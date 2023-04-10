import {Alert, View, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import Input from '../components/Input';
import Button from '../components/Button/Button';

const MemberSing = ({navigation}) => {
  const [userName, setUserName] = useState(null);
  const [userSurname, setUserSurname] = useState(null);
  const [userAge, setUserAge] = useState(null);
  const [userMail, setUserMail] = useState(null);

  const handleSubmit = () => {
    if (!userName || !userSurname || !userAge || !userMail) {
      Alert.alert('Mars Atletic Club', 'Bilgiler Boş Birakilamaz');
      return;
    }
    const user = {
      userName,
      userSurname,
      userAge,
      userMail,
    };
    navigation.navigate('MemberResultScreen', {user});
  };

  const gotToWelcomeSing = () => {
    navigation.navigate('WelcomeScreen');
  };

  return (
    <View style={styles.container}>
      <Input
        label="Üye Adi"
        placeHolder="Üye İsmini Giriniz..."
        onChangeText={setUserName}
      />
      <Input
        label="Üye SoyAdi"
        placeHolder="Üye soyİsmini Giriniz..."
        onChangeText={setUserSurname}
      />
      <Input
        label="Üye Yaş"
        placeHolder="Üye Yaşini Giriniz..."
        onChangeText={setUserAge}
      />
      <Input
        label="Üye E-Mail"
        placeHolder="Üye E-Mailini  Giriniz..."
        onChangeText={setUserMail}
      />
      <Button text="Kaydi Tamamla" onPress={handleSubmit} />
      <Button text="Ana Sayfaya Geri Dön" onPress={gotToWelcomeSing} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C0C0C0',
  },
});

export default MemberSing;
