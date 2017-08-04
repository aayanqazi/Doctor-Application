import React from 'react';
// import { Scene, Router } from 'react-native-router-flux';
import { StackNavigator, TabNavigator } from 'react-navigation';
import { Signup, Login, AddPeople, Patient } from "../container";
import { Dashboard, Emergency } from "../component";
import AuthGuard from "./authGuard";
import { Platform } from "react-native";

const RouterComponent = StackNavigator({
    login: { screen: Login },
    singup: { screen: Signup },
    dashboard: {
        screen: TabNavigator(
            {
                Home: {
                    screen: Dashboard,
                },
                AddPeople: { screen: AddPeople },
                PatientList: { screen: Patient },
                emergency: { screen: Emergency }
            },
            {
                tabBarOptions: {
                    activeTintColor: Platform.OS === 'ios' ? '#e91e63' : '#fff'

                }, tabBarPosition: "bottom",swipeEnabled:false,animationEnabled:false
            }
        )
    }
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