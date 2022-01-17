import React from 'react';
import { connect } from 'react-redux';
import { setUserProfile } from '../../redux/profileReducer';
import Profile from './Profile';

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profileInfo
    }
}

export default connect(mapStateToProps, { setUserProfile })(Profile);