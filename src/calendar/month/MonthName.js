import React, { Component } from "react";
import { monthNames } from "./../../utils/Date";

export default class extends Component {
    render() {
        return this.props.render && <h4>{monthNames[this.props.month]}</h4>;
    }
}
