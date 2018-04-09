import React, { Component } from "react";
import { dayNames } from "./../utils/Date";
import className from "./../utils/class-name";
import "./Day.css";

export default class extends Component {
    render() {
        const props = this.props;
        const date = props.date;
        const disabled = !date || props.disabled;

        const day = date ? date.getDay() || 7 : -1;
        const SPACE = "\u00a0";
        const DOT = "\u25CF";
        
        return (
            <button
                className={className(
                    "calendar-day",
                    dayNames[day - 1],
                    className(props.className)
                )}
                disabled={disabled}
                onClick={this.onSelect.bind(this)}
            >
                <span className='day-number'>
                    {date ? date.getDate() : SPACE}
                </span>
                <div>{!disabled && Math.random() > 0.5 ? DOT : SPACE}</div>
            </button>
        );
        // u00a0 = space
    }

    onSelect(event) {
        const props = this.props;
        if (props.onSelect) {
            props.onSelect(props.date);
        }
    }
}
