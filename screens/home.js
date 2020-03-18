import React, { useState } from 'react';
import {
  View,
  Keyboard,
  TouchableWithoutFeedback,
  FlatList,
  Alert
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { globalStyles } from '../styles/global';
import AddTodo from '../components/addTodo';
import Header from '../components/header';
import TodoItem from '../components/todoItem';
import Sandbox from '../components/sandbox';

export default function Home({ navigation }) {
  const [todos, setTodos] = useState([
    { text: 'buy coffee', key: '1', isDone: false },
    { text: 'create an app', key: '2', isDone: false },
    { text: 'play on the switch', key: '3', isDone: false }
  ]);
  const pressHandler = key => {
    setTodos(prevTodos => {
      return prevTodos.filter(todo => todo.key != key);
    });
  };
  // const retod = item => {
  //   todos.indexOf(item.key);
  //   return item.text;
  // };

  const upHand = (key, text) => {
    // setTodos(val => {
    //   return [{ text: text, key: key }, ...val];
    // });
    // // navigation.setParam('text', val);
    setTodos(prevTodos => {
      return prevTodos.filter(todo => {
        if ((todo.key != key) == false) {
          todo.text = text;
        }
        return true;
      });
    });
    navigation.navigate('Home');
  };

  const submitHandler = text => {
    if (text.length > 3) {
      setTodos(val => {
        return [{ text: text, key: Math.random().toString() }, ...val];
      });
    }
    //  else if (text.toString().isEmpty()) {
    //   Alert.alert('OOPS!', 'Cannot insert an empty Todo', [
    //     { text: 'Understood', onPress: () => console.log('alert closed') }
    //   ]);
    // }
    else {
      Alert.alert('OOPS!', 'Todos must be over 3 chars long', [
        { text: 'Understood', onPress: () => console.log('alert closed') }
      ]);
    }
    Keyboard.dismiss();
  };

  const checkHandler = key => {
    setTodos(prevTodos => {
      return prevTodos.filter(todo => {
        if ((todo.key != key) == false) {
          todo.isDone = !todo.isDone;
        }
        return true;
      });
    });
  };
  return (
    // <Sandbox />
    <TouchableWithoutFeedback
      onPress={() => {
        // Keyboard.dismiss();
        console.log('dismissed keyboard');
      }}
    >
      <View style={globalStyles.container}>
        {/* <Header /> */}
        <View style={globalStyles.content}>
          <AddTodo submitHandler={submitHandler} />
          {/* <Button title='go to rev dets' /> */}
          <View style={globalStyles.list}>
            <FlatList
              data={todos}
              renderItem={({ item }) => (
                <TodoItem
                  style={globalStyles.titleText}
                  item={item}
                  pressHandler={pressHandler}
                  navigation={navigation}
                  // pHN={pHN}
                  txt={item.text}
                  checkHandler={checkHandler}
                  upHand={upHand}
                />
              )}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
