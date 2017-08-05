import { Observable } from 'rxjs';
import { ActionsObservable } from 'redux-observable';
import AuthActions from "../actions/authActions";
import LocalStorage from "../../services/localStorage";
import { AsyncStorage } from "react-native";
//** Epic Middlewares For Auth **//
export default class PatientEpic {

    //Epic middleware for signup
    static addPatientEpic = (action$) =>
        action$.ofType(AuthActions.ADD_PATIENT)
            .switchMap(({ payload }) => {
                return Observable.fromPromise(AsyncStorage.setItem('patients', JSON.stringify(payload)))
                    .switchMap(arr => {
                        var data = [];
                        AsyncStorage.getItem('patients', (error, result) => {
                            console.log(result);
                            data = result;
                        });
                        if (data) {
                            return Observable.of({
                                type: AuthActions.ADD_PATIENT_SUCCESSFULL,
                                payload: data
                            })
                        }
                        else {
                            return Observable.of({
                                type: AuthActions.ADD_PATIENT_FAILED,
                                payload: "Not Saved"
                            })
                        }
                        // if (AsyncStorage.getItem('patients')) {
                        //     let user = AsyncStorage.getItem('patients')
                        //     console.log(user);
                        //     return Observable.of({
                        //         type: AuthActions.ADD_PATIENT_SUCCESSFULL,
                        //         payload: user
                        //     })
                        // }
                        // else {
                        //     return Observable.of({
                        //         type: AuthActions.ADD_PATIENT_FAILED,
                        //         payload: "Not Saved Try Again"
                        //     });
                        // }
                    })
            })
}