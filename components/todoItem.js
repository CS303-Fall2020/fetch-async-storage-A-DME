import React from 'react';
import { Text, TouchableOpacity, View, CheckBox } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { globalStyles } from '../styles/global';

export default function TodoItem({
  item,
  pressHandler,
  navigation,
  txt,
  checkHandler,
  upHand
}) {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('ReviewDetails', { item, upHand })}
    >
      <View style={globalStyles.item}>
        <MaterialIcons
          // style={globalStyles.del}
          name='delete'
          size={22}
          color='#333'
          onPress={() => pressHandler(item.key)}
        />
        <View style={globalStyles.itemText}>
          <Text
            // style={globalStyles.itemText}
            style={
              Boolean(item.isDone) && { textDecorationLine: 'line-through' }
            }
          >
            {item.text}
          </Text>
        </View>
        <CheckBox
          // style={globalStyles.check}
          value={item.isDone}
          onChange={() => checkHandler(item.key)}
        />
      </View>
    </TouchableOpacity>
  );
}
