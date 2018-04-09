import React, { Component } from "react";
import Day from "./Day";
import { getToday } from "./../utils/Date";
import className from "./../utils/class-name";
import './Week.css';

export default class extends Component {
    constructor(props){
        super(props);
        const date = props.date;
        this.state = Object.assign({}, props, {
            year: date.getFullYear(),
            month: date.getMonth(),
            date: date.getDate(),
            day: date.getDay() || 7,
            today: getToday().getTime()
        })
    }

    render() {
        const {year, month, date, day, today, selectedDate} = this.state;
        return (
            <div className="week">
                {[1, 2, 3, 4, 5, 6, 7].map(i => {
                    const dateObj = new Date(year, month, date - day + i);
                    const timestamp = dateObj.getTime();
                    const outOfBound = dateObj.getMonth() !== month;
                    return (
                        <Day
                            key={timestamp}
                            className={className({
                                today:  timestamp === today,
                                selected: selectedDate && selectedDate.getTime() === dateObj.getTime()
                            })}
                            date={outOfBound ? null : dateObj}
                            onSelect={this.onSelect.bind(this)}
                        />
                    );
                })}
            </div>
        );
    }

    onSelect(date) {
        const props = this.props;

        this.setState((state, props) => {
            return Object.assign({}, state, {
                selectedDate: date
            });
        });

        if (props.onSelect) {
            props.onSelect(props.date, date);
        }
    }
}
