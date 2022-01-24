import React from 'react';
import HomePage from './components/HomePage/HomePage';
import ProfileContainer from './components/Profile/ProfileContainer';
import Sidebar from './components/Sidebar/Sidebar';
import Contact from './components/Contact/Contact';
import Portfolio from './components/Portfolio/Portfolio';
import Footer from './components/Footer/Footer';
import { Route } from 'react-router-dom';
import UsersContainer from './components/Users/UsersContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import LoginPage from './components/LoginPage/LoginPage'

function App() {

    return (
            <div id="wrapper">
                <HeaderContainer />
                <Sidebar />
                <div>
                    <Route path='/' exact={true} render={() => <HomePage />} />
                    <Route path='/profile' render={() => <ProfileContainer/>} />
                    <Route path='/contact' render={() => <Contact />} />
                    <Route path='/users' render={() => <UsersContainer />}/>
                    <Route path='/portfolio' render={() => <Portfolio />} />
                    <Route path='/login' render={() => < LoginPage />} />
                </div>
                <Footer />
            </div>
    );
}

export default App;
