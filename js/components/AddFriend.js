import React, { Component, PropTypes } from 'react';

export default class AddFriend extends Component {
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
		this.props.actions.addFriend(this.state.text);
		this.setState({ text: this.props.text || ""});
	}

	render() {
		return (
			<div className="add-friend input-group">
				<div className="input-group-addon"><span className="glyphicon glyphicon-plus" aria-hidden="true"></span></div>
				<input
					className="form-control"
					onKeyDown={::this.handleKeyDown}
					onChange={::this.handleChange}
					value={this.state.text} />
			</div>
		);
	}
}
