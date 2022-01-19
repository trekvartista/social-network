import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import { authUser } from '../../redux/authReducer';

let mapStateToProps = (state) => {
    return {
        login: state.auth.login,
        isAuthorized: state.auth.isAuthorized
    }
}

export default connect(mapStateToProps, { authUser })(Header);