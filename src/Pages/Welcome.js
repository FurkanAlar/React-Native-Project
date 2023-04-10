import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

import Button from '../components/Button';

const Welcome = ({navigation}) => {
  const goToMemberSign = () => {
    navigation.navigate('MemberSignScreen');
  };
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Mars Atletic Club</Text>
      <Button
        style={styles.text}
        text="Üye Kaydi Oluştur"
        onPress={goToMemberSign}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#36013F',
  },
  header: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    margin: 10,
    color: 'white',
  },
  text: {
    borderRadius: 5,
    margin: 10,
  },
});

export default Welcome;
