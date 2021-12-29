import React from 'react';
import Header from './components/Header/Header';
import HomePage from './components/HomePage/HomePage';
import Profile from './components/Profile/Profile';
import Sidebar from './components/Sidebar/Sidebar';
import Contact from './components/Contact/Contact';
import Portfolio from './components/Portfolio/Portfolio';
import Footer from './components/Footer/Footer';
import { Route } from 'react-router-dom';
import Users from './components/Users/Users';

function App(props) {
// debugger
    return (
            <div id="wrapper">
                <Header />
                <Sidebar />
                <div>
                    <Route exact path='/' render={() => <HomePage />} />
                    <Route path='/profile'
                            render={() => <Profile
                                    store={props.store} />} />

                    <Route path='/contact' render={() => <Contact />} />
                    <Route path='/users' render={() => <Users />}/>
                    <Route exact path='/portfolio' render={() => <Portfolio />} />
                </div>
                <Footer />
            </div>
    );
}

export default App;
