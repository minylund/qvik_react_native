//@flow
import React from 'react';
import { Text, View, StyleSheet, Platform } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button } from './common/Button';
import { loginNavigation } from '../actions';
import { colorStyles, textStyles } from '../styles';


const ProfileScreen = (props) => (
  <View style={styles.mainHolder}>
    <Text style={styles.title}>Profile</Text>
      <Button onPress={() => props.loginNavigation()}>
        Logout
      </Button>
  </View>
);

const mapDispatchToProps = (dispatch) => {
  return {
    loginNavigation: () => {
      dispatch(loginNavigation());
    }
  }
};

export default connect(null, mapDispatchToProps)(ProfileScreen);

const styles = StyleSheet.create({
  mainHolder: {
    flex: 1,
    backgroundColor: colorStyles.brand.primary,
    flexDirection: 'column',
    alignItems: 'center',
    padding: 16,
    paddingTop: Platform.OS === 'ios' ? 20 : 0,
  },
  title: {
    ...textStyles.title,
    margin: 8,
  },
});

ProfileScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
  loginNavigation: PropTypes.func.isRequired,
};
