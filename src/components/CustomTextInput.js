import {View, Text, TextInput, StyleSheet} from 'react-native';
import React from 'react';

export default function CustomTextInput(props) {
  return (
    <View>
      <Text style={styles.headerText2}>{props?.label}</Text>
      <TextInput
        style={styles.input}
        keyboardType={props?.keyboardType}
        value={props?.value}
        placeholder={props?.placeholder}
        onChangeText={props?.onChange}
      />
      {props?.error !== '' && <Text style={styles.error}>{props?.error}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  headerText2: {
    marginBottom: 10,
    marginTop: 10,
    fontSize: 12,
    color: '#000',
    fontWeight: '500',
  },
  input: {
    height: 40,
    // margin: 5,
    borderWidth: 1,
    padding: 10,
    borderColor: '#787878',
    borderRadius: 5,
  },
  error: {
    color: 'red',
    fontSize: 10,
  },
});
