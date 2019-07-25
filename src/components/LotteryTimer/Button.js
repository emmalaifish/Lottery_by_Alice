import React, { Component } from "react";

export default class Button extends Component {

	render() {
		
		return (
			<button className={this.props.color} onClick={this.props.onClickHandler}>{this.props.label}</button>    
		);
	  }
}