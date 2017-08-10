import React, { Component } from "react";
import { connect } from "react-redux";
import { Addpeople } from "../../component/"
import AuthActions from "../../store/actions/authActions";
import { AsyncStorage } from "react-native";
import { DatePickerAndroid, Platform ,DatePickerIOS} from "react-native";
class PatientContainer extends Component {
    static navigationOptions = {
        tabBarLabel: 'Add Patient',
    };
    state = {
        form: {
            firstName: null,
            lastName: null,
            age: null,
            mobile_number: null,
            date: null,
            disease: null
        }
    }
    datePicker =  () => {
        (Platform.OS === 'ios') ? <DatePickerIOS onDateChange={(val)=>this.getValues("date",val)}/>:this.datePickerAndroid()
    }
    datePickerAndroid = async () => {
        try {
            const { action, year, month, day } = await DatePickerAndroid.open({
                date: new Date(2017, 4, 25)
            });
            if (action !== DatePickerAndroid.dismissedAction) {
                // Selected year, month (0-11), day
                this.getValues("date", day + "/" + month + "/" + year);
            }
        } catch ({ code, message }) {
            console.warn('Cannot open date picker', message);
        }

    }
    addPatient = () => {
        if (this.state.form.firstName && this.state.form.lastName && this.state.form.age && this.state.form.mobile_number && this.state.form.date && this.state.form.disease) {
            // this.props.add(this.state.form);
            AsyncStorage.getItem("patients", (cb, result) => {
                if (result) {
                    var arr = result;
                    arr = JSON.parse(arr);
                    arr.push(this.state.form);
                    this.props.add(arr);
                }
                else {
                    var arr = [];
                    arr.push(this.state.form);
                    console.log(arr)
                    this.props.add(arr);
                }
            })
        }
        else {
            alert("Please complete from , Something missing")
        }

    }

    getValues = (states, val) => {
        var obj = this.state.form;
        obj[states] = val;
        this.setState(obj)
    }
    componentWillReceiveProps(newProps) {
        var obj = this.state.form;
        if (newProps.patient.isAdd) {
            for (var key in obj) {
                obj[key] = null;
            }
            this.setState(obj);
            alert("Success")
            this.props.navigation.navigate('Home');
        }
    }
    render() {
        // this.props.patient.isAdd ? this.props.navigation.navigate('Home') : null;
        return <Addpeople isOpen={this.state.isDateTimePickerVisible} add={this.addPatient} datePicker={this.datePicker} values={this.state.form} patient={this.props.patient} getValues={this.getValues} navigation={this.props.navigation} />
    }
}

const mapStateToProps = (state) => {
    return { patient: state.PatientReducer };
};
const mapDispatchToProps = (dispatch) => {
    return {
        add: (userObj) => dispatch(AuthActions.add_patient(userObj))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PatientContainer);