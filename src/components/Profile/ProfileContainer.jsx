import { connect } from 'react-redux';
import { getUserProfileTC, savePhotoTC } from '../../redux/profileReducer';
import Profile from './Profile';

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profileInfo,
        isAuthorized: state.auth.isAuthorized,
        myUserID: state.auth.userId
    }
}

export default connect(mapStateToProps, { getUserProfile: getUserProfileTC, savePhoto: savePhotoTC })(Profile);