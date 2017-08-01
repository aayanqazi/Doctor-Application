import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import { Login ,Signup} from "../component";

const RouterComponent = () => {
    return (
        <Router>
            <Scene key="root">
                <Scene key="login" component={Login} initial hideNavBar={true} />
                <Scene key="signup" component={Signup}  hideNavBar={true}/>
            </Scene>
        </Router>
    )
};

export default RouterComponent;