import React, { Component } from "react";
import { monthNames } from "./../utils/Date";
import { getDomData } from "../utils/Dom";
import { getToday } from "./../utils/Date";
import className from "./../utils/class-name";
import "./Year.css";

export default class extends Component {
    render() {
        const year = this.props.year;
        const today = getToday();
        const getBtutton = this.buttonCurry(
            year,
            today.getFullYear(),
            today.getMonth()
        );

        return (
            <div className="calendar-year">
                <h4>{year}</h4>
                <div>
                    {getBtutton(0)}
                    {getBtutton(1)}
                    {getBtutton(2)}
                </div>
                <div>
                    {getBtutton(3)}
                    {getBtutton(4)}
                    {getBtutton(5)}
                </div>
                <div>
                    {getBtutton(6)}
                    {getBtutton(7)}
                    {getBtutton(8)}
                </div>
                <div>
                    {getBtutton(9)}
                    {getBtutton(10)}
                    {getBtutton(11)}
                </div>
            </div>
        );
    }

    buttonCurry(year, currentYear, currentMonth) {
        return month => {
            return this.getButton(
                month,
                year,
                className({
                    current: year === currentYear && month === currentMonth
                })
            );
        };
    }

    getButton(month, year, className) {
        const monthName = monthNames[month];
        return (
            <button
                className={className}
                data-year={year}
                data-month={month}
                onClick={this.onSelect.bind(this)}
            >
                {monthName}
            </button>
        );
    }

    onSelect(event) {
        const button = event.target;
        const props = this.props;
        if (props.onSelect) {
            props.onSelect(
                getDomData(button, "month"),
                getDomData(button, "year")
            );
        }
    }
}
