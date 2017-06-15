//import React from 'react';
import { StackNavigator } from 'react-navigation';
import SplashScreen from '../components/SplashScreen';
//import OnBoardingScene from './OnBoardingScene';


 const SplashNavigation= StackNavigator(
   {
     Splash: { screen: SplashScreen },
     //Onboarding: { screen: OnBoardingScene },
   },
   {
     headerMode: 'screen',
   }
 );

export default SplashNavigation;
