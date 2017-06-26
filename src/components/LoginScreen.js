//@flow
import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { injectIntl } from 'react-intl';
import { Button } from './common/Button';
import { mainNavigation } from '../actions';
import { colorStyles } from '../styles';

class LoginScreen extends Component {
  static navigationOptions = {
    title: 'Login',
  };

  constructor(props) {
    super(props);
    this.formatMessage = this.props.intl.formatMessage.bind(this);
  }

  render() {
    const { navigation } = this.props;
    return (
        <View style={styles.mainHolder}>
          <Button onPress={() => this.props.mainNavigation()}>
            {this.formatMessage(
              {
                id: "login.label",
                defaultMessage: "Login"
              })
            }
          </Button>
          <Button onPress={() => navigation.navigate('Register')}>
            {this.formatMessage(
              {
                id: "register.button.label",
                defaultMessage: "Register"
              })
            }
          </Button>
        </View>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    mainNavigation: () => {
      dispatch(mainNavigation());
    }
  };
};

export default connect(null, mapDispatchToProps)(injectIntl(LoginScreen));

const styles = StyleSheet.create({
  mainHolder: {
    flex: 1,
    backgroundColor: colorStyles.brand.primary,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
});

LoginScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
  mainNavigation: PropTypes.func.isRequired,
  intl: PropTypes.object.isRequired,
};
