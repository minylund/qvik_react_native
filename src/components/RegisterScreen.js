//@flow
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { injectIntl, FormattedMessage } from 'react-intl';
import { colorStyles, textStyles } from '../styles';

class RegisterScreen extends Component {
  static navigationOptions = {
    title: 'Register',
    header: undefined, // This will show the header ;)
    headerTintColor: 'white',
    headerTitleStyle: {
      ...textStyles.title,
    },
    headerBackTitleStyle: {
      ...textStyles.title,
    },
    headerStyle: {
      backgroundColor: colorStyles.brand.primary,
    }
  };

  constructor(props) {
    super(props);

    this.formatMessage = this.props.intl.formatMessage.bind(this);

    RegisterScreen.navigationOptions.title = this.formatMessage({
      id: "register.label",
      defaultMessage: "Register"
     });
  }

  render() {
    return (
        <View style={styles.mainHolder}>
          <Text style={styles.text}>
            <FormattedMessage
              id="register.label"
              defaultMessage={'Register'}
              />
          </Text>
        </View>
    )
  }
}

let injectRegisterScreen = injectIntl(RegisterScreen);
Object.assign(injectRegisterScreen, RegisterScreen);

export default injectRegisterScreen;

const styles = StyleSheet.create({
  mainHolder: {
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
