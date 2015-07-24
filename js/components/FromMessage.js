import React, { Component, PropTypes } from 'react';

export default class FromMessage extends Component {
	render() {
		const from = this.props.from;
		const messages = this.props.messages;

		const avatar = "https://github.com/identicons/" + from + ".png";

		const text = messages.map(message => {
			return (
				<p>{message.contents}</p>
			);
		});

		return (
			<div className="message-box media">
				<div className="media-left">
					<img className="media-object" width="40" height="40" src={avatar} />
				</div>
				<div className="media-body">
					<h5 className="name">{from}</h5>
					{text}
				</div>
			</div>
		);
	}
}
