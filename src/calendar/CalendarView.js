import React, { Component } from "react";
import Month from "./Month";
import Year from "./Year";
import Years from "./Years";

export default class extends Component {
    constructor(props){
        super(props);
        const store = props.store;

        this.unsubscribe = store.subscribe(() => {
            this.setState(() => {
                return store.getState();
            })
        });
    }

    render() {
        const state = this.props.store.getState();
        const year = parseInt(state.year, 10);
        const month = parseInt(state.month, 10);

        switch (state.viewType) {
            case "year":
                return (
                    <Year
                        year={year}
                        onSelect={this.onMonthSelect.bind(this)}
                    />
                );
            case "years":
                return (
                    <Years
                        onSelect={this.onYearSelect.bind(this)}
                        start={year - 10}
                        end={year + 10}
                    />
                );
            default:
                return <Month month={month} year={year} />;
        }
    }

    onYearSelect(year) {
        this.setState((prevState, props) => {
            return Object.assign({}, prevState, {
                viewType: "year",
                year: parseInt(year, 10)
            });
        });
    }

    onMonthSelect(month) {
        this.setState((prevState, props) => {
            return Object.assign({}, prevState, {
                viewType: "month",
                month: parseInt(month, 10)
            });
        });
    }
}
