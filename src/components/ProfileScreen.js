//@flow
import React, { Component } from 'react';
import { Text, View, StyleSheet, Platform } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { injectIntl, FormattedMessage } from 'react-intl';
import { Button } from './common/Button';
import { loginNavigation } from '../actions';
import { colorStyles, textStyles } from '../styles';


class ProfileScreen extends Component {

  constructor(props) {
    super(props);

    this.formatMessage = this.props.intl.formatMessage.bind(this);
  }

  render() {
    return (
      <View style={styles.mainHolder}>
        <Text style={styles.title}>
          <FormattedMessage
            id="profile.label"
            defaultMessage={'Profile'}
            />
        </Text>
        <Button onPress={() => this.props.loginNavigation()}>
          {this.formatMessage(
            {
              id: "logout.label",
              defaultMessage: "Logout"
            })
          }
        </Button>
      </View>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loginNavigation: () => {
      dispatch(loginNavigation());
    }
  }
};

export default connect(null, mapDispatchToProps)(injectIntl(ProfileScreen));

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
