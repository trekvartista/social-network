import React, { Component } from "react";

class Counter extends Component {

    componentWillUnmount() {
        console.log('Counter – Unmount');
    }

    render() {
        console.log('Counter – Rendered');

        return (
            <div>
                <button
                    onClick={() => this.props.onReset(this.props.counter)}
                    className="btn btn-info btn-sm"
                >
                    Reset
                </button>

                <span className={this.getBadgeClasses()}>
                    {this.formatCount()}
                </span>

                <button
                    onClick={() => this.props.onIncrement(this.props.counter)}
                    className="btn btn-secondary btn-sm"
                >
                    Increment
                </button>

                <button
                    onClick={() => this.props.onDelete(this.props.counter.id)}
                    className="btn btn-danger btn-sm m-2"
                >
                    Delete
                </button>
            </div>
        );
    }
    getBadgeClasses() {
        let classes = "bg m-2 bg-";
        classes += this.props.counter.value === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount() {
        const { value } = this.props.counter;
        return value === 0 ? "Zero" : value;
    }
}

export default Counter;
