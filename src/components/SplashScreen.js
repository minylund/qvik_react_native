//@flow
import React, { Component } from 'react';
import { View, ActivityIndicator, StyleSheet, Text } from 'react-native';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';
import { loginNavigation } from '../actions';
import { colorStyles, textStyles } from '../styles';


class SplashScreen extends Component {
  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);
  }

  // Fetch some data in this function
  componentWillMount() {
    this.asyncExample()
    .then(() => {
      this.props.loginNavigation();
    })
    .catch(() => {
      //console.log(err);
    });
  }

  asyncExample() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("SplashDone");
      },
      2000);
    });
  }

  render() {
    return (
        <View style={styles.main}>
          <Text style={styles.text}>
            <FormattedMessage
              id="splash.label"
              defaultMessage={'Splash'}
              />
          </Text>
          <ActivityIndicator size="large" />
        </View>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loginNavigation: () => {
      dispatch(loginNavigation());
    }
  }
};

export default connect(null, mapDispatchToProps)(SplashScreen);

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: colorStyles.brand.primary,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  text: {
    ...textStyles.title,
    fontSize: 32,
  },
});

SplashScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
  loginNavigation: PropTypes.func.isRequired,
};
