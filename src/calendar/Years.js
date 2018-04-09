import React, { Component } from "react";
import "./Years.css";

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = props;
  }

  render() {
    const { start, end } = this.state;
    const range = end - start;
    return (
      <div className="years-selector">
        {this.getPreviousButton(range)}
        <div className="wrapper">{this.getYears(start, end)}</div>
        {this.getNextButton(range)}
      </div>
    );
  }

  getPreviousButton(range) {
    return (
      <button onClick={this.previous.bind(this)}>Previous {range} years</button>
    );
  }

  getNextButton(range) {
    return <button onClick={this.next.bind(this)}>Next {range} years</button>;
  }

  getYears(start, end) {
    const curr = new Date().getFullYear();
    let years = [];
    for (; start < end; start++) {
      years.push(
        <button
          className={curr === start ? "current" : ""}
          key={start}
          data-year={start}
          onClick={this.onSelect.bind(this)}
        >
          {start}
        </button>
      );
    }
    return years;
  }

  previous() {
    this.setState(state => {
      const range = state.end - state.start;
      return Object.assign({}, state, {
        start: state.start - range,
        end: state.start
      });
    });
  }

  next() {
    this.setState((prevState, props) => {
      const range = prevState.end - prevState.start;
      return Object.assign({}, prevState, {
        start: prevState.end,
        end: prevState.end + range
      });
    });
  }

  onSelect(event) {
    const year = parseInt(
      event.currentTarget.attributes["data-year"].value,
      10
    );
    if (this.props.onSelect) {
      this.props.onSelect(year);
    }
  }
}
