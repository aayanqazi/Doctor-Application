import React, { Component } from "react";
import { connect } from "react-redux";
import { PatientList } from "../../component/"
import AuthActions from "../../store/actions/authActions";
import { AsyncStorage } from "react-native";
class PatientLists extends Component {
    static navigationOptions = {
        tabBarLabel: 'Patient List',
    };
    state = {
        data: ""
    }

    render() {
        AsyncStorage.getItem('patients', (cb, result) => {
            this.setState({ data: result })
        })
        return <PatientList navigation={this.props.navigation} data={this.state.data} />
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