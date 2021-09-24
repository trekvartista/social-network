import React, { Component } from 'react';
import NavBar from './components/navbar'
import Counters from './components/counters'

class App extends Component {

    state = {
        counters: [
            { id: 1, value: 32 },
            { id: 2, value: -0 },
            { id: 3, value: -2 },
            { id: 4, value: 999999 },
        ],
    };

    constructor() {
        super();
        console.log('App – Constructor');
    }

    componentDidMount = counter => {
        // Ajax call
        console.log('App – Mounted');
    }

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
        console.log('App – Rendered');

        return (
            // used to wrap multiple 'root' elements from the render method
            <React.Fragment>
                <NavBar totalCounters={this.state.counters.filter(c => c.value > 0).length}/>
                <main className="container">
                    <Counters
                        counters={this.state.counters}
                        onReset={this.handleReset}
                        onIncrement={this.handleIncrement}
                        onDelete={this.handleDelete}
                    />
                </main>
            </React.Fragment>
        );
    }
}
 
export default App;