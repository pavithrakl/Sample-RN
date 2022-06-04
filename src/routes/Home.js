import {View, Text, Pressable} from 'react-native';
import React, {useState} from 'react';
import CustomButton from '../components/CustomButton';
import {styles} from '../styles/Style';

export default function Home({navigation}) {
  // const [users, setUsers] = useState([]);

  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <CustomButton
        submit={() => navigation.navigate('Profile')}
        buttonName="NEXT"
      />
      {/* <Pressable onPress={() => navigation.navigate('Profile')}>
        <Text>NEXT</Text>
      </Pressable> */}
    </View>
  );
}
