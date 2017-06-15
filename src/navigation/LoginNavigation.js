//import React from 'react';
import { StackNavigator } from 'react-navigation';
import LoginScreen from '../components/LoginScreen';
import RegisterScreen from '../components/RegisterScreen';

 const LoginNavigation = StackNavigator({
   Login: { screen: LoginScreen },
   Register: { screen: RegisterScreen },
 },
 {
   navigationOptions: {
     header: null,
   },
   initialRouteName: 'Login',
 }
);

 export default LoginNavigation;
