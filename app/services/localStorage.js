import { AsyncStorage } from "react-native";
import { Observable } from "rxjs";
export default class LocalStorage {
    static setUser(userKey, userObj) {
        return AsyncStorage.setItem(userKey,JSON.stringify(userObj));
        //    return new Promise((resolve, reject)=>{
        //     let value =  await AsyncStorage.setItem(userKey, JSON.stringify(userObj));
        //     if (value != undefined) {
        //         resolve("Congratulation! Saved")
        //     }
        //     else
        //     {
        //         reject("Sorry Try Again");
        //     }
        // })
    }

    static clearLocalStorage() {
        AsyncStorage.clear()
    }

    static removeUser() {
        AsyncStorage.removeItem('localStorageUser');
    }

    static getUser(userKey) {
        return JSON.parse(AsyncStorage.getItem(userKey));
    }
}