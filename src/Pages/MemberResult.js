import {View, Text, StyleSheet, Button} from 'react-native';
import React from 'react';

const MemberResult = ({route, navigation}) => {
  const {user} = route.params;
  const gotToWelcomeSing = () => {
    navigation.navigate('WelcomeScreen');
  };
  return (
    <View style={styles.container}>
      <Text style={styles.message}>Kayit Tamamlandi!!!</Text>
      <Text style={styles.label}>Üye Adi: {user.userName} </Text>
      <Text style={styles.label}>Üye SoyAdi:{user.userSurname} </Text>
      <Text style={styles.label}>Üye Yaşi:{user.userAge} </Text>
      <Text style={styles.label}>Üye Maili:{user.userMail} </Text>
      <Button title="Bitti" onPress={gotToWelcomeSing} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#add8e6',
  },
  label: {
    fontWeight: 'bold',
    fontSize: 20,
    padding: 5,
  },
  message: {
    fontWeight: 'bold',
    fontSize: 50,
    textAlign: 'center',
    margin: 10,
    padding: 10,
    color: 'green',
  },
});
export default MemberResult;
