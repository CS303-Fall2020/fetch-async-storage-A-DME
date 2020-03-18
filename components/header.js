import React from 'react';
import { Text, View } from 'react-native';
import { globalStyles } from '../styles/global';

export default function Header() {
  return (
    <View style={globalStyles.header}>
      <Text style={globalStyles.title}>My Todos</Text>
    </View>
  );
}
