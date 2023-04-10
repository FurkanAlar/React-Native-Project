import {View, Text, TextInput} from 'react-native';
import React from 'react';
import styles from './Input.styles';

const Input = ({label, onChangeText, placeHolder}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}> {label} </Text>
      <View style={styles.input_container}>
        <TextInput placeholder={placeHolder} onChangeText={onChangeText} />
      </View>
    </View>
  );
};

export default Input;
