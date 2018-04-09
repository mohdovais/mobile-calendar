import React, { Component } from "react";
import Week from "./Week";
import WeekHeader from "./WeekHeader";
import MonthName from './month/MonthName';
import SelectedDate from './month/Date';
import className from "./../utils/class-name";
import "./Month.css";

export default class extends Component {
    constructor(props) {
        super();
        const now = new Date();
        this.state = Object.assign(
            {},
            {
                current: now.getMonth() === props.month,
                selectedWeek: null
            },
            props
        );
    }

    render() {
        const state = this.state;
        const month = state.month;
        return (
            <div
                className={className({
                    "calendar-month": true,
                    current: state.current,
                    "date-selected": !!state.selectedDate
                })}
            >
                <WeekHeader />
                <MonthName month={month} render={!state.selectedDate}/>
                {state.selectedWeek
                    ? this.getWeek(state.selectedWeek, state.selectedDate)
                    : this.getWeeksOfMonth(month, state.year)}
                <SelectedDate date={state.selectedDate} />
                <div className="meetings">
                    {this.getMeetings(state.selectedDate)}
                </div>
            </div>
        );
    }

    getWeeksOfMonth(month, year) {
        let d = 1;
        let date = new Date(year, month, d);
        let weeks = [];

        while (date.getMonth() === month) {
            weeks = weeks.concat(this.getWeek(date));

            d += 8 - (date.getDay() || 7);
            date = new Date(year, month, d);
        }

        return weeks;
    }

    getWeek(date, selected) {
        return [
            <Week
                key={date.getTime()}
                date={date}
                selected={selected}
                onSelect={this.onSelect.bind(this)}
            />
        ];
    }

    getMeetings(selectedWeek) {
        return selectedWeek ? (
            <ul>
                <li>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </li>
                <li>Mauris efficitur nisl a mattis porta.</li>
                <li>Fusce at odio ut enim feugiat fermentum.</li>
                <li>Sed et ex tempus, rhoncus est non, egestas nisi.</li>
            </ul>
        ) : null;
    }

    onSelect(selectedWeek, selectedDate) {
        const props = this.props;

        this.setState((state, props) => {
            return Object.assign({}, state, {
                selectedWeek,
                selectedDate
            });
        });

        if (props.onSelect) {
            props.onSelect(selectedWeek, selectedDate);
        }
    }
}
