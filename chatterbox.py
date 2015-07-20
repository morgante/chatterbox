import hashlib

class Chatterbox(object):
    def __init__(self):
        pass

    def __hash_username(self, name):
        return hashlib.sha256(name).hexdigest()

    def register_user(self, name):
        return self.__hash_username(name)

    def authenticate(self, username, key):
        if self.__hash_username(username) == key:
            return True
        else:
            return False
