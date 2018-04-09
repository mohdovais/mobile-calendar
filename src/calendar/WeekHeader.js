import React, { Component } from "react";
import { dayNames } from "./../utils/Date";
import './WeekHeader.css';

export default class extends Component {
    constructor(props){
        super();
        this.days = dayNames.map(day => {
            return (
                <span key={day} className={day}>
                    {day.substr(0, 1)}
                </span>
            );
        });
    }

    render() {
        return <header>{this.days}</header>;
    }
}
