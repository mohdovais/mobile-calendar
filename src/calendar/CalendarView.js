import React, { Component } from "react";
import Month from "./Month";
import Year from "./Year";
import Years from "./Years";

export default class extends Component {

    render() {
        const props = this.props;
        const year = parseInt(props.year, 10);
        const month = parseInt(props.month, 10);

        switch (props.viewType) {
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
        this.onSelect(null, parseInt(year, 10))
    }

    onMonthSelect(month) {
        this.onSelect(parseInt(month, 10), this.props.year)
    }

    onSelect(month, year){
        if(typeof this.props.onSelect === 'function'){
            this.props.onSelect(month, year);
        }
    }
}
