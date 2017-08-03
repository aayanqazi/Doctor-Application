import React from 'react';
// import { Scene, Router } from 'react-native-router-flux';
import { StackNavigator } from 'react-navigation';
import { Signup, Login } from "../container";
import { Dashboard } from "../component";
import AuthGuard from "./authGuard";
const RouterComponent = StackNavigator({
    login: { screen: Login },
    singup: {screen: Signup},
    dashboard: {screen:Dashboard}
}, { navigationOptions: { header: null } });
/*<Router>
    <Scene key="root">
        <Scene key="login" component={Login} hideNavBar={true} onEnter={AuthGuard} initial />
        <Scene key="signup" component={Signup} hideNavBar={true} />
        <Scene key="dashboard" component={Dashboard} hideNavBar={true}>
            <Scene key="main" component={Login} />
            </Scene>
    </Scene>
</Router>*/

export default RouterComponent;