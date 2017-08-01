import { Observable } from 'rxjs';
import { ActionsObservable } from 'redux-observable';
import AuthActions from "../actions/authActions";
import LocalStorage from "../../services/localStorage";
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
            .mergeMap(({ payload }) => 
                 Observable.fromPromise(LocalStorage.setUser('user',payload))
                .map(response => alert(response))
                .catch(err => alert(arr))
                // return LocalStorage.setUser('user', payload).then(res => {
                //     console.log(res)
                // })
                //     .catch(err => {
                //     })
                // return HttpService.post(Path.SIGNUP, payload)
                //     .switchMap(({ response }) => {
                //         if (response.err) {
                //             return Observable.of({
                //                 type: AuthActions.SIGNUP_FAILER,
                //                 payload: response.err
                //             });
                //         }
                //         return Observable.of({
                //             type: AuthActions.SIGNUP_SUCCESS,
                //             payload: response
                //         });
                //     });
            )
}