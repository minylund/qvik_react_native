import {
  NAVIGATION_TYPE_LOGIN,
  NAVIGATION_TYPE_MAIN,
  NAVIGATION_TYPE_SPLASH
} from '../actions/types';

const INITIAL_STATE = {
  navigateTo: NAVIGATION_TYPE_SPLASH,
 };

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case NAVIGATION_TYPE_LOGIN:
      return { ...state, navigateTo: action.payload };
    case NAVIGATION_TYPE_MAIN:
      return { ...state, navigateTo: action.payload };
    case NAVIGATION_TYPE_SPLASH:
      return { ...state, navigateTo: action.payload };

    default:
      return state;
  }
};
