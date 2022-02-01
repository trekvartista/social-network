import React from 'react';
import { Route } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import HeaderContainer from './components/Header/HeaderContainer';
import Sidebar from './components/Sidebar/Sidebar';
import LoginPage from './components/LoginPage/LoginPage';
import ProfileContainer from './components/Profile/ProfileContainer';
import UsersContainer from './components/Users/UsersContainer';
// import Contact from './components/Contact/Contact';
// import Portfolio from './components/Portfolio/Portfolio';
import Footer from './components/Footer/Footer';
import loading from './images/loading.gif';

const Contact = React.lazy( () => import('./components/Contact/Contact') )
const Portfolio = React.lazy( () => import('./components/Portfolio/Portfolio') )

function App() {

    return (
            <div id="wrapper">
                <HeaderContainer />
                <Sidebar />
                <div>
                    <Route path='/' exact={true} render={() => <HomePage />} />
                    <Route path='/login' render={() => < LoginPage />} />
                    <Route path='/profile' render={() => <ProfileContainer/>} />
                    <Route path='/users' render={() => <UsersContainer />}/>
                    <Route path='/contact' render={() => (
                                            <React.Suspense fallback={<div> Loading... </div>}>
                                                <Contact />
                                            </React.Suspense>)} />
                    <Route path='/portfolio' render={() => (
                                            <React.Suspense fallback={<div> Loading... </div>}>
                                                <Portfolio />
                                            </React.Suspense>)} />
                </div>
                <Footer />
            </div>
    );
}

export default App;
