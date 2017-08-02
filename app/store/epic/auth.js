import { Observable } from 'rxjs';
import { ActionsObservable } from 'redux-observable';
import AuthActions from "../actions/authActions";
import LocalStorage from "../../services/localStorage";
import { AsyncStorage } from "react-native";
//** Epic Middlewares For Auth **//
export default class AuthEpic {

    //Epic middleware for login
    // static loginEpic = (action$) =>
    //     action$.ofType(AuthActions.)
    //         .switchMap(({ payload }) => {
    //             return alert("Hello World")
    //             // return HttpService.post(Path.LOGIN, payload)
    //             //     .switchMap(({ response }) => {
    //             //         if (!response.data || response.data.length == 0) {
    //             //             return Observable.of({
    //             //                 type: AuthActions.LOGIN_FAILER,
    //             //                 payload: "email and password not matched ! Try Again "
    //             //             });
    //             //         }
    //             //         return Observable.of({
    //             //             type: AuthActions.LOGIN_SUCCESS,
    //             //             payload: response.data
    //             //         });
    //             //     });
    //         })

    //Epic middleware for signup
    static signupEpic = (action$) =>
        action$.ofType(AuthActions.SIGNUP)
            .switchMap(({ payload }) => {
                return Observable.fromPromise(AsyncStorage.setItem('user', JSON.stringify(payload)))
                    .switchMap(arr => {
                        if (AsyncStorage.getItem('user')) {
                            let user = AsyncStorage.getItem('user')
                            return Observable.of({
                                type: AuthActions.SIGNUP_SUCCESSFUL,
                                payload: user
                            })
                        }
                        else {
                            return Observable.of({
                                type: AuthActions.SIGNUP_REJECTED,
                                payload: "Not Saved Try Again"
                            });
                        }
                    })
            })
}