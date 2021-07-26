import React, { Component } from "react";
import Counter from "./Counter.jsx";
import "../Style/counters.css";

class Counters extends Component {
  render() {
    const {
      onReset,
      onIncrement,
      onDelete,
      onDecrement,
      counters,
      onRestart
    } = this.props;
    return (
      <div className="main-div">
        <button
          className="btn btn-success m-2"
          onClick={onReset}
          disabled={counters.length === 0 ? "disabled" : ""}
        >
          Reset <i className="fa fa-refresh" aria-hidden="true" />
        </button>
        <div>
        <button className="wallet-address">Wallet Address : {this.props.address}</button>
        </div>
        {counters.map(counter => (
          <Counter
            key={counter.id}
            counter={counter}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
            onDelete={onDelete}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
