import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { globalStyles } from '../styles/global';

export default function AddTodo({ submitHandler }) {
  const [text, setText] = useState('');

  const changeHandler = val => {
    setText(val);
  };

  return (
    <View>
      <TextInput
        style={globalStyles.input}
        placeholder='new Todo...'
        placeholderTextColor='white'
        onChangeText={changeHandler}
        multiline={true}
      />
      <Button
        onPress={() => submitHandler(text)}
        title='add Todo'
        color='black'
      />
    </View>
  );
}
