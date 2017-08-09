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
    searchingArray = (arr)=>{
        console.log(JSON.parse(this.state.data),arr);
    }
    componentWillReceiveProps(newProps) {
       this.setState({data:newProps.patientList.data})
    }
    componentWillMount() {
        this.props.list();
    }
    render() {
        return <PatientList search={this.props.search} navigation={this.props.navigation} data={this.state.data} />
    }
}

const mapStateToProps = (state) => {
    return { patientList: state.PatientReducer };
};
const mapDispatchToProps = (dispatch) => {
    return {
        list: () => dispatch(AuthActions.getPatient()),
        search: (value) => dispatch(AuthActions.searchPatient(value))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PatientLists);