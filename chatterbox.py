import hashlib
import gevent
import json
import redis

class Chatterbox(object):
    def __init__(self, redis_uri="redis://localhost:6379"):
        self.redis = redis.from_url(redis_uri)

    def __hash_username(self, name):
        # need to add a secret in here, maybe user json web token
        return hashlib.sha256(name).hexdigest()

    def __get_redis_list(self, name):
        return "chatbox_inbox_" + self.__hash_username(name)

    def __get_redis_channel(self, name):
        return "chatbox_channel_" + self.__hash_username(name)

    def register_user(self, name):
        return self.__hash_username(name)

    def authenticate(self, username, key):
        if self.__hash_username(username) == key:
            return True
        else:
            return False

    def __grab_recent(self, username, count=100):
        return self.redis.lrange(self.__get_redis_list(username), -1 * count, -1)

    def open_inbox(self, username, key, handler):
        if self.__hash_username(username) == key:
            def send(data):
                if (data is not None):
                    info = json.loads(data)
                    self.send_message(username, info.get("to"), info.get("contents"))

            def receiver(data):
                handler(data.get("data"))

            for message in self.__grab_recent(username):
                handler(message)

            pubsub = self.redis.pubsub()
            pubsub.subscribe(**{
                "" + self.__get_redis_channel(username): receiver
            })
            pubsub.run_in_thread(sleep_time=0.001)

            return send
        else:
            return False

    def send_message(self, sender, destination, contents):
        data = json.dumps({
            "from": sender,
            "to": destination,
            "contents": contents
        })

        self.redis.rpush(self.__get_redis_list(destination), data)
        self.redis.rpush(self.__get_redis_list(sender), data)
        self.redis.publish(self.__get_redis_channel(destination), data)
