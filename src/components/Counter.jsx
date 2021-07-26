import React, { Component } from "react";

class Counter extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <span style={{ fontSize: "24px", width:'50%' }} className={this.getBadgeClasses()}>
              {this.formatCount()}
            </span>
          </div>
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <button
              className="btn btn-secondary"
              onClick={() => this.props.onIncrement(this.props.counter)}
            >
              <i className="fa fa-plus-circle" aria-hidden="true" />
            </button>
            <button
              className="btn btn-info m-2"
              onClick={() => this.props.onDecrement(this.props.counter)}
              disabled={this.props.counter.value === 0 ? "disabled" : ""}
            >
              <i className="fa fa-minus-circle" aria-hidden="true" />
            </button>
            <button
              className="btn btn-danger"
              onClick={() => this.props.onDelete(this.props.counter.id)}
            >
              <i className="fa fa-trash-o" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    );
  }

  getBadgeClasses = () => {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  };

  formatCount = () => {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  };
}

export default Counter;