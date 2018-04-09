import React, { Component } from "react";
import { createStore } from "redux";
import reducer from './reducer/main';
import {changeFromView} from './reducer/action-creator';
import NavButton from "./NavButton";
import CalendarView from "./CalendarView";
import "./Calendar.css";

export default class extends Component {
    constructor(props) {
        super(props);
        const now = new Date();
        this.state = Object.assign(
            {},
            {
                viewType: "month",
                month: now.getMonth(),
                year: now.getFullYear()
            },
            props
        );

        const store = createStore(reducer, this.state);
        this.unsubscribe = store.subscribe(() => {
            this.setState((a, b) => {
                return store.getState();
            })
        });
        this.store = store;
    }

    render() {
        const { month, year, viewType } = this.state;
        return (
            <div className="calendar">
                <NavButton
                    viewType={viewType}
                    month={month}
                    year={year}
                    onClick={this.onNavButtonClick.bind(this)}
                />
                <CalendarView store={this.store} />
            </div>
        );
    }

    onNavButtonClick(event) {
        this.store.dispatch(changeFromView(this.state.viewType));
    }
}
