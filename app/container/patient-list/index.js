import React, { Component } from "react";
import { connect } from "react-redux";
import { PatientList } from "../../component/"
import AuthActions from "../../store/actions/authActions";
class PatientLists extends Component {
    static navigationOptions = {
        tabBarLabel: 'Patient List',
    };
    render() {
        return <PatientList navigation={this.props.navigation} />
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

export default connect(mapStateToProps, mapDispatchToProps)(PatientLists);