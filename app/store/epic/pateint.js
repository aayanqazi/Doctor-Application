import { Observable } from 'rxjs';
import { ActionsObservable } from 'redux-observable';
import AuthActions from "../actions/authActions";
import LocalStorage from "../../services/localStorage";
import { AsyncStorage } from "react-native";
//** Epic Middlewares For Auth **//
export default class PatientEpic {
    constructor() {
        this.patientList = ""
    }
    //Epic middleware for signup
    static addPatientEpic = (action$) =>
        action$.ofType(AuthActions.ADD_PATIENT)
            .debounceTime(1000)
            .switchMap(({ payload }) => {
                return Observable.fromPromise(AsyncStorage.setItem('patients', JSON.stringify(payload)))
                    .switchMap(arr => {
                        AsyncStorage.getItem('patients', (error, result) => {
                            this.patientList = result;
                        });
                        if (this.patientList) {
                            return Observable.of({
                                type: AuthActions.ADD_PATIENT_SUCCESSFULL,
                                payload: JSON.stringify(payload)
                            })
                        }
                        else {
                            return Observable.of({
                                type: AuthActions.ADD_PATIENT_FAILED,
                                payload: "Not Saved"
                            })
                        }
                    })
            })
    // AsyncStorage.getItem('patients', (cb, result) => {
    //     this.setState({ data: result })
    // })
    static getPatientEpic = (action$) =>
        action$.ofType(AuthActions.GET_PATIENT)
            .switchMap(() => {
                let data = "";
                return Observable.fromPromise(AsyncStorage.getItem('patients', (error, result) => {
                    this.patientList = result;
                })).switchMap(arr => {
                    if (this.patientList) {
                        return Observable.of({
                            type: AuthActions.GET_PATIENT_SUCCESSFUL,
                            payload: this.patientList
                        })
                    }
                    else {
                        return Observable.of({
                            type: AuthActions.GET_PATIENT_FAILED,
                            payload: "Error"
                        })
                    }

                })
            })

    static searchPatientEpic = (action$) =>
        action$.ofType(AuthActions.SEARCH_PATIENT)
            .switchMap(({ payload }) => {
                return Observable.from(AsyncStorage.getItem("patients"))
                    .switchMap(arr => {
                        var data = JSON.parse(arr);
                        data = JSON.stringify(data.filter(function (el) {
                            return el.firstName.toLowerCase().indexOf(payload.toLowerCase()) > -1;
                        }))
                        return Observable.of({
                            type: AuthActions.GET_PATIENT_SUCCESSFUL,
                            payload: data
                        })
                    })
                // console.log(this.patientList)
                // return Observable.fromPromise(new Promise((resolve, reject) => {
                //     AsyncStorage.getItem('Patients', (error, result)=>{
                //         resolve(result);
                //         reject(error);
                //     })
                // })).switchMap(({resolve}) => {
                //     console.log("Daasfsadasdsadadasd",resolve);
                //     return Observable.of({
                //         type: AuthActions.GET_PATIENT_SUCCESSFUL,
                //         payload: this.patientList
                //     })
                // })
            })
    // .switchMap(() => {
    //     let data = "";
    //     return Observable.fromPromise(AsyncStorage.getItem('patients', (error, result) => {
    //         this.patientList = result;
    //     })).switchMap(arr => {
    //         if (this.patientList) {
    //             return Observable.of({
    //                 type: AuthActions.GET_PATIENT_SUCCESSFUL,
    //                 payload: this.patientList
    //             })
    //         }
    //         else {
    //             return Observable.of({
    //                 type: AuthActions.GET_PATIENT_FAILED,
    //                 payload: "Error"
    //             })
    //         }

    //     })
    // })
    static deletePatientEpic = (action$) =>
        action$.ofType(AuthActions.DELETED_PATIENT)
            .switchMap(({ payload }) => {
                return Observable.from(AsyncStorage.getItem("patients"))
                    .switchMap(arr => {
                        var data = JSON.parse(arr);
                        data.splice(payload,1)
                        data=JSON.stringify(data);
                        AsyncStorage.setItem('patients',data)
                        return Observable.of({
                            type: AuthActions.GET_PATIENT_SUCCESSFUL,
                            payload: data
                        })
                    })


            })
}

