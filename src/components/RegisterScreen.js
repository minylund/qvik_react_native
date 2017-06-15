import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
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
  }

  render() {
    return (
        <View style={styles.mainHolder}>
          <Text style={styles.text}>
            Register
          </Text>
        </View>
    )
  }
}

export default RegisterScreen;

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
