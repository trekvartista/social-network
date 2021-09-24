import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
     render() {
        console.log('Counters – Rendered');

        return (
            <div>
                {this.props.counters.map((counter) => (
                    <Counter
                        key={counter.id}
                        onReset={this.props.onReset}
                        onDelete={this.props.onDelete}
                        onIncrement={this.props.onIncrement}
                        // value={counter.value}
                        // id={counter.id}
                        counter={counter}
                    >
                        <h1>Counter #{counter.id}</h1>
                    </Counter>
                ))}
            </div>
        );
    }
}

export default Counters;
