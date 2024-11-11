import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Add} from 'iconsax-react-native';

const FloatActionButton = props => {
  return (
    <TouchableOpacity {...props} style={styles.container}>
      <Add size="32" color="#fff" />
    </TouchableOpacity>
  );
};

export default FloatActionButton;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#2ccce4',
    justifyContent: 'center',
    alignItems: 'center',
    width: 70,
    height: 70,
    borderRadius: 50,
    position: 'absolute',
    bottom: 25,
    right: 25,
  },
});
