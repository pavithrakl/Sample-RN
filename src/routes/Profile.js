import {View, Text} from 'react-native';
import React, {useState} from 'react';
import {styles} from '../styles/Style';
import CustomTextInput from '../components/CustomTextInput';
import CustomButton from '../components/CustomButton';

export default function Profile({navigation}) {
  const [name, setName] = useState();
  const [phone, setPhone] = useState();
  const [email, setEmail] = useState();

  return (
    <View style={styles.container}>
      <Text>Profile Details</Text>
      <CustomTextInput label="Name" value={name} onChange={setName} />
      <CustomTextInput label="Phone Number" value={phone} onChange={setPhone} />
      <CustomTextInput label="Email" value={email} onChange={setEmail} />
      <CustomButton
        buttonName="NEXT"
        submit={() => navigation.navigate('Home')}
      />
    </View>
  );
}
