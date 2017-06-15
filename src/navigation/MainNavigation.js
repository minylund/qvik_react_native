//import React from 'react';
import { TabNavigator } from 'react-navigation';
import MainScreen from '../components/MainScreen';
import ProfileScreen from '../components/ProfileScreen';
import { colorStyles, textStyles } from '../styles';


 const MainNavigation = TabNavigator(
   {
     Main: { screen: MainScreen },
     Profile: { screen: ProfileScreen },
   },
   {
     tabBarOptions: {
       activeBackgroundColor: colorStyles.brand.primary,
       inactiveBackgroundColor: colorStyles.brand.primary,
       activeTintColor: colorStyles.white,
       labelStyle: {
         ...textStyles.subTitle,
       },
       indicatorStyle: {
         backgroundColor: colorStyles.white,
       },
       style: {
         backgroundColor: colorStyles.brand.primary,
       },
     },
     tabBarPosition: 'bottom',
     //lazy: true,
   },
 );

 export default MainNavigation;
