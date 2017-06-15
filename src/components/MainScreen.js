import React from 'react';
import { Text, View, StyleSheet, Platform } from 'react-native';
import { colorStyles, textStyles } from '../styles';

const MainScreen = () => (
  <View style={styles.mainHolder}>
    <Text style={styles.title}>Main</Text>
  </View>
);

export default MainScreen;

const styles = StyleSheet.create({
  mainHolder: {
    flex: 1,
    backgroundColor: colorStyles.brand.primary,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    paddingTop: Platform.OS === 'ios' ? 20 : 0,
  },
  title: {
    ...textStyles.title,
    fontSize: 32,
    margin: 8,
  },
});
