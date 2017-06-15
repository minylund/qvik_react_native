/**
 * Actions in which you can change between different
 * Navigation flows
 */


import {
  NAVIGATION_TYPE_LOGIN,
  NAVIGATION_TYPE_SPLASH,
  NAVIGATION_TYPE_MAIN,
 } from './types';

export const loginNavigation = () => {
    return {
      type: NAVIGATION_TYPE_LOGIN,
      payload: NAVIGATION_TYPE_LOGIN,
    };
};

export const mainNavigation = () => {
    return {
      type: NAVIGATION_TYPE_MAIN,
      payload: NAVIGATION_TYPE_MAIN,
    };
};

export const splashNavigation = () => {
    return {
      type: NAVIGATION_TYPE_SPLASH,
      payload: NAVIGATION_TYPE_SPLASH,
    };
};
