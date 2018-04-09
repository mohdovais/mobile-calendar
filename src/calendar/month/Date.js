import React, { Component } from "react";

export default class extends Component {
    render() {
        const date = this.props.date;
        return date ? <h5>{date.toDateString()}</h5> : null;
    }
}
