import React, { useState, useEffect } from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import { globalStyles } from '../styles/global';

export default function ReveiwDetails({ navigation }) {
  const pressHandler = () => {
    navigation.goBack();
  };

  const [title, setTitle] = useState('');
  const p = { x: false };
  const changeHandler = val => {
    setTitle(navigation.getParam('item').title + val);
    p.x = true;
  };

  const update = navigation.getParam('upHand');

  return (
    <View style={globalStyles.container}>
      <TextInput
        style={globalStyles.input}
        defaultValue={navigation.getParam('item').title}
        onChangeText={changeHandler}
        multiline={true}
      />
      <Button
        title='Done'
        onPress={() =>
          update(
            navigation.getParam('item').id,
            p.x ? title : navigation.getParam('item').title
          )
        }
      />
    </View>
  );
}
