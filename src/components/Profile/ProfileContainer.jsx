import React from 'react';
import { connect } from 'react-redux';
import { getUserProfileTC } from '../../redux/profileReducer';
import Profile from './Profile';

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profileInfo,
        isAuthorized: state.auth.isAuthorized
    }
}

export default connect(mapStateToProps, { getUserProfile: getUserProfileTC })(Profile);