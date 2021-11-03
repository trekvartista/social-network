import React from 'react';
import Header from './components/Header/Header';
import HomePage from './components/HomePage/HomePage';
import Profile from './components/Profile/Profile';
import Sidebar from './components/Sidebar/Sidebar';
import Contact from './components/Contact/Contact';
import Portfolio from './components/Portfolio/Portfolio';
import Footer from './components/Footer/Footer';
import { BrowserRouter, Route } from 'react-router-dom';

function App(props) {

    return (
        <BrowserRouter>
            <div id="wrapper">
                <Header />
                <Sidebar />
                <div>
                    <Route exact path='/' render={() => <HomePage />} />
                    <Route path='/profile'
                            render={() => <Profile
                                    state={props.state}
                                    addPost={props.addPost}/>} />

                    <Route path='/contact' render={() => <Contact />} />
                    <Route exact path='/portfolio' render={() => <Portfolio />} />
                </div>
                <Footer />
            </div>
        </BrowserRouter>
    );
}

export default App;
