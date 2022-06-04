import {View, Text, StyleSheet, Pressable} from 'react-native';
import React from 'react';

export default function CustomButton(props) {
  return (
    <View>
      <View style={{alignItems: 'center'}}>
        <Pressable style={styles.buttonStyle} onPress={props.submit}>
          <Text style={styles.text}>{props?.buttonName}</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonStyle: {
    backgroundColor: 'darkorange',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
    marginBottom: 30,
    width: '100%',
    marginTop: 30,
    borderRadius: 5,
  },
  text: {
    color: '#fff',
    fontSize: 20,
  },
});
