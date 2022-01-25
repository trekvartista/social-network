import Header from './Header';
import { connect } from 'react-redux';
import { authUserTC, logoutTC } from '../../redux/authReducer';

let mapStateToProps = (state) => {
    return {
        login: state.auth.login,
        isAuthorized: state.auth.isAuthorized
    }
}

export default connect(mapStateToProps, { authMe: authUserTC, logout: logoutTC })(Header);