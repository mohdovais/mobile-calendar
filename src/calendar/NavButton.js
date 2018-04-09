import React, { Component } from "react";

export default class extends Component {
    render() {
        const props = this.props;
        return (
            <button className="nav" onClick={props.onClick}>
                &lt; {this.getLabel(props.viewType, props.month, props.year)}
            </button>
        );
    }

    getLabel(viewType, month, year) {
        switch (viewType) {
            case "year":
                return "Select Year";
            case "years":
                return "Today";
            default:
                return year;
        }
    }
}

//onClick={this.onNavButtonClick.bind(this)}
