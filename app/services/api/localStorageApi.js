import LocalStorage from "../localStorage";
import { Observable } from "rxjs";
import AuthActions from "../../store/actions/authActions";
import { AsyncStorage } from "react-native";

class LocalStorageApi extends LocalStorage {
    static signUp(payload) {
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
    }
    static login(payload) {
        return Observable.from(LocalStorage.loginUser(payload))
            .map(AuthActions.signinSuccessful)
            .catch(arr=>Observable.of({
                type:AuthActions.SIGNIN_REJECTED,
                payload:arr
            }))
    }

}

export default LocalStorageApi;