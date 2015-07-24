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

	render() {
		return (
			<div className="messagebar">
				<div className="form-group">
					<div className="input-group">
						<div className="input-group-addon">+</div>
						<input
							className="form-control"
							onKeyDown={::this.handleKeyDown}
							onChange={::this.handleChange}
							value={this.state.text} />
					</div>
				</div>
			</div>
		);
	}
}
