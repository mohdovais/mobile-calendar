import React, { Component } from "react";
import CalendarView from "./CalendarView";
import "./Calendar.css";

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = Object.assign({}, {
        backButtonLabel: 'aaaa'
    }, props);
  }

  shouldComponentUpdate(props, state) {
    console.log(props, state);
    return true;
  }

  render() {
    const now = new Date();
    const year = this.props.year || now.getFullYear();
    const month = this.props.month || now.getMonth();
    return (
      <div className="calendar">
        <button
          className="nav"
          type="button"
          onClick={this.onBackButtonClick.bind(this)}
        >
          &lt; {this.state.backButtonLabel}
        </button>
        <CalendarView year={year} month={month} />
      </div>
    );
  }

  onBackButtonClick(event) {
    //this.store.dispatch(changeFromView(this.state.viewType));
  }
}
