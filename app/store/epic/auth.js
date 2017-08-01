import { Observable } from 'rxjs';
import { ActionsObservable } from 'redux-observable';
import AuthActions from "../actions/authActions";
import LocalStorage from "../../services/localStorage";
import {AsyncStorage} from "react-native";
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
                 AsyncStorage.setItem('user',JSON.stringify(payload),(err,res)=>{
                     if(err){
                         alert(err)
                     }
                     else{
                         alert(res);
                     }
                 })
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