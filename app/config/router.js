import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import {Signup,Login} from "../container";
import {Dashboard} from "../component";
import AuthGuard from "./authGuard";
const RouterComponent = () => {
    return (
        <Router>
            <Scene key="root">
                <Scene key="login" component={Login} hideNavBar={true} onEnter={AuthGuard} initial />
                <Scene key="signup" component={Signup}  hideNavBar={true}/>
                 <Scene key="dashboard" component={Dashboard} hideNavBar={true}/>
            </Scene>
        </Router>
    )
};

export default RouterComponent;