import { AsyncStorage } from "react-native";
import { Observable } from "rxjs";
export default class LocalStorage {
    static async setUser(userKey, userObj) {
        return await AsyncStorage.setItem(userKey,JSON.stringify(userObj));
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
    static  loginUser(payload){
        return new Promise((resolve,reject)=>{
             AsyncStorage.getItem('user').then(arr=>{
                 var data = JSON.parse(arr);
                if(data.email === payload.email && data.password === payload.password)
                {
                    resolve(data)
                }
                reject({message:"INVALID USERNAME AND PASSWORD"})
            })
        })
    }
    static removeUser() {
        AsyncStorage.removeItem('localStorageUser');
    }

    static async getUser(userKey) {
        return await AsyncStorage.getItem(userKey);
    }
}