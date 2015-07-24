import React, { Component, PropTypes } from 'react';

export default class SendMessage extends Component {
	static propTypes = {
	};

	constructor(props, context) {
		super(props, context);
		this.state = {
			text: this.props.text || ""
		};
	}

	handleKeyDown(e) {
		if (e.which === 13) {
			this.save();
		}
	}

	handleChange(e) {
		this.setState({ text: e.target.value });
	}

	save() {
		this.props.onSend(this.state.text);
		this.setState({ text: this.props.text || ""});
	}

	componentDidUpdate() {
		React.findDOMNode(this.refs.messagerInput).focus();
	}

	render() {
		return (
			<div className="messagebar">
				<div className="input-group">
					<div className="input-group-addon">+</div>
					<input
						ref="messagerInput"
						className="form-control"
						data-target={this.props.username}
						onKeyDown={::this.handleKeyDown}
						onChange={::this.handleChange}
						value={this.state.text} />
				</div>
			</div>
		);
	}
}
