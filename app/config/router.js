import React from 'react';
import {Scene,Router} from 'react-native-router-flux';
import {Login} from "../component";

const RouterComponent  = () => {
    return (
        <Router>
            <Scene key="root">
            <Scene key="login" component ={Login} initial hideNavBar={true}/>
            </Scene>
            </Router>
    )
};

export default RouterComponent;