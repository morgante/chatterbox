import React, { Component, PropTypes } from 'react';

export default class FromMessage extends Component {
	render() {
		const {from, contents, to} = this.props.message;

		const avatar = "https://github.com/identicons/" + from + ".png";

		return (
			<div className="message-box media">
				<div className="media-left">
					<img className="media-object" width="40" height="40" src={avatar} />
				</div>
				<div className="media-body">
					<h5 className="name">{from}</h5>
					<p>{contents}</p>
				</div>
			</div>
		);
	}
}
