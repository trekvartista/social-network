import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
    state = {
        counters: [
            { id: 1, value: 32 },
            { id: 2, value: -0 },
            { id: 3, value: -2 },
            { id: 4, value: 999999 },
        ],
    };

    handleDelete = (counterId) => {
        // console.log("Event Handler Called", counterId);
        const counters = this.state.counters.filter((c) => c.id !== counterId);
        this.setState({ counters });
    };

    handleReset = (counter) => {
        // console.log(e.value);
        const counters = this.state.counters.map((c) => {
            c.value = counter.id === c.id ? 0 : c.value;
            return c;
        });
        this.setState({ counters });
    };

    handleIncrement = (counter) => {
        // console.log (counter);
        // const counters = this.state.counters.map(c => {
        //   c.value = counter.id === c.id ? c.value + 1 : c.value;
        //   return c;
        // });

        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = { ...counter };
        counters[index].value++;

        this.setState({ counters });
    };

    render() {
        return (
            <div>
                {this.state.counters.map((counter) => (
                    <Counter
                        key={counter.id}
                        onReset={this.handleReset}
                        onDelete={this.handleDelete}
                        onIncrement={this.handleIncrement}
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
