import React, { useState, useEffect } from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import { globalStyles } from '../styles/global';

export default function ReveiwDetails({ navigation }) {
  const pressHandler = () => {
    navigation.goBack();
  };

  const [text, setText] = useState('');

  const changeHandler = val => {
    setText(navigation.getParam('item').text + val);
  };
  // const update = (key, text) => useEffect(upHand(key, text));
  const update = navigation.getParam('upHand');
  // useEffect(() => {
  //   setTodos(val => {
  //     return [{ text: text, key: key }, ...val];
  //   });
  //   // navigation.setParam('text', val);
  //   navigation.navigate('Home');
  // }
  // );
  return (
    <View style={globalStyles.container}>
      <TextInput
        style={globalStyles.input}
        defaultValue={navigation.getParam('item').text}
        onChangeText={changeHandler}
        multiline={true}
      />
      <Button
        title='Done'
        onPress={() => update(navigation.getParam('item').key, text)}
      />
    </View>
  );
}
