import React from 'react';
// import { Scene, Router } from 'react-native-router-flux';
import { StackNavigator, TabNavigator } from 'react-navigation';
import { Signup, Login, AddPeople, Patient } from "../container";
import { Dashboard, Emergency, PatientProfile } from "../component";
import AuthGuard from "./authGuard";
import { Platform } from "react-native";

const RouterComponent = StackNavigator({
    login:{screen:Login},
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
                }, tabBarPosition: "bottom", swipeEnabled: false, animationEnabled: false
            }
        )
    },
    profile: { screen: PatientProfile }
}, { navigationOptions: { header: null,initialRouterName: 'dashboard' } });

export default RouterComponent;

// const AuthArray = () => {
//     return singup: { screen: Signup },
// ;
// }