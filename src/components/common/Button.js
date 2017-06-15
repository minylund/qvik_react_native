import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, Text } from 'react-native';
import { colorStyles } from '../../styles';

const Button = ({ onPress, children }) => {

  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles.buttonStyle}
    >
      <Text style={styles.textStyle}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

const styles = {
  textStyle: {
    alignSelf: 'center',
    color: colorStyles.white,
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  },
  buttonStyle: {
    alignSelf: 'stretch',
    backgroundColor: colorStyles.brand.primary,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: colorStyles.white,
    marginLeft: 5,
    marginRight: 5
  }
};

export { Button };


Button.propTypes = {
  onPress: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};
