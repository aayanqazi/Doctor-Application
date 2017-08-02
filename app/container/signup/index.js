import React , {Component} from "react";
import {connect} from "react-redux";
import {Signup} from "../../component/"
import AuthActions from "../../store/actions/authActions";

class SignupContainer extends Component {
    render(){
        return <Signup signup={this.props.signUp} userData={this.props.authObj}/>
    }
}

const mapStateToProps = (state) => {
    return { authObj: state.AuthReducer };
};
const mapDispatchToProps = (dispatch) => {
    return {
        signUp: (userObj) => dispatch(AuthActions.signup(userObj))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignupContainer);