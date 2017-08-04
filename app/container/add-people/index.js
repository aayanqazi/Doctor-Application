import React, { Component } from "react";
import { connect } from "react-redux";
import { Addpeople } from "../../component/"
import AuthActions from "../../store/actions/authActions";
class LoginContainer extends Component {
    static navigationOptions = {
        tabBarLabel: 'Add Patient',
    };

    render() {
        return <Addpeople navigation={this.props.navigation} />
    }
}

const mapStateToProps = (state) => {
    return { authObj: state.AuthReducer };
};
const mapDispatchToProps = (dispatch) => {
    return {
        login: (userObj) => dispatch(AuthActions.login(userObj))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);