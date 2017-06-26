import React, { Component } from 'react';
import { connect } from 'react-redux';
import { injectIntl } from 'react-intl';
import PropTypes from 'prop-types';
import { NAVIGATION_TYPE_LOGIN, NAVIGATION_TYPE_MAIN } from '../actions/types';
import LoginNavigation from './LoginNavigation';
import MainNavigation from './MainNavigation';
import SplashNavigation from './SplashNavigation';


class AppNavigation extends Component {
  render() {
    const { navigateTo } = this.props;
    switch (navigateTo) {

      case NAVIGATION_TYPE_LOGIN:
        return <LoginNavigation />;

      case NAVIGATION_TYPE_MAIN:
        return <MainNavigation />;

      default:
        return <SplashNavigation />;
    }
  }
}

const mapStateToProps = ({ navigation }) => {
  const { navigateTo } = navigation;
  return { navigateTo };
};

export default connect(mapStateToProps, {})(injectIntl(AppNavigation));

AppNavigation.propTypes = {
  navigateTo: PropTypes.string.isRequired,
};
