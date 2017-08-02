import { Observable } from 'rxjs';
import { ActionsObservable } from 'redux-observable';
import AuthActions from "../actions/authActions";
import LocalStorage from "../../services/localStorage";
import { AsyncStorage } from "react-native";
//** Epic Middlewares For Auth **//
export default class AuthEpic {

    //Epic middleware for login
    // static loginEpic = (action$) =>
    //     action$.ofType(AuthActions.SIGNIN)
    //         .map(({ payload }) => {
    //             return Observable.fromPromise(AsyncStorage.getItem('user', (err, res) => {
    //                 if (err) {
    //                     return Observable.of({
    //                         type: AuthActions.SIGNIN_REJECTED,
    //                         payload: "Not Saved Try Again"
    //                     });
    //                 }
    //                 else {
    //                     return Observable.of({
    //                         type: AuthActions.SIGNIN_SUCCESSFUL,
    //                         payload: res
    //                     })
    //                 }
    //             }))
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