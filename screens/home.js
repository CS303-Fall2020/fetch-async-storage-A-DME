import React, { useState, useEffect } from 'react';
import {
  View,
  Keyboard,
  TouchableWithoutFeedback,
  FlatList,
  Alert,
  AsyncStorage,
  ActivityIndicator,
  Button
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { globalStyles } from '../styles/global';
import AddTodo from '../components/addTodo';
import Header from '../components/header';
import TodoItem from '../components/todoItem';
import Sandbox from '../components/sandbox';

export default function Home({ navigation }) {
  const [todos, setTodos] = useState([
    // { text: 'buy coffee', key: '1', isDone: false },
    // { text: 'create an app', key: '2', isDone: false },
    // { text: 'play on the switch', key: '3', isDone: false }
  ]);

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos?userId=1')
      .then(res => res.json())
      .then(res => {
        setTodos(res), setLoading(false);
      })
      .then(json => console.log(json))
      .catch(e => {
        console.error(e);
      });
  }, []);

  const onRefresh = async () => {
    setLoading(!loading);
    return fetch('https://jsonplaceholder.typicode.com/todos?userId=1')
      .then(res => res.json())
      .then(res => {
        setTodos(res), setLoading(false);
      })
      .catch(error => {
        console.error(error);
      });
  };

//   load = async () => {
//     try {
//       const get = await AsyncStorage.getItem(todos);
//       if (get !== null) {
//         this.setState({ get });
//       }
//     } catch (e) {
//       console.error('Failed to load get.');
//     }
//   };
//   save = async get => {
//     try {
//       await AsyncStorage.setItem(todos, [title, id, completed]);

//       this.setState({ get });
//     } catch (e) {
//       console.error('Failed to save todos.');
//     }
//   };

  const pressHandler = id => {
    setTodos(prevTodos => {
      return prevTodos.filter(todo => todo.id != id);
    });
  };
  // const retod = item => {
  //   todos.indexOf(item.id);
  //   return item.text;
  // };

  const upHand = (id, title) => {
    // setTodos(val => {
    //   return [{ title: title, id: id }, ...val];
    // });
    // // navigation.setParam('title', val);
    setTodos(prevTodos => {
      return prevTodos.filter(todo => {
        if ((todo.id != id) == false) {
          todo.title = title;
        }
        return true;
      });
    });
    navigation.navigate('Home');
  };

  const submitHandler = title => {
    if (title.length > 3) {
      setTodos(val => {
        return [{ title: title, id: Math.random().toString() }, ...val];
      });
    }
    // else if (title.trim().length < 3) {
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

  const checkHandler = id => {
    setTodos(prevTodos => {
      return prevTodos.filter(todo => {
        if ((todo.id != id) == false) {
          todo.completed = !todo.completed;
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
            {loading ? (
              <ActivityIndicator size='large' color='red' />
            ) : (
              <FlatList
                data={todos}
                renderItem={({ item }) => (
                  <TodoItem
                    style={globalStyles.titleText}
                    item={item}
                    pressHandler={pressHandler}
                    navigation={navigation}
                    // pHN={pHN}
                    txt={item.title}
                    checkHandler={checkHandler}
                    upHand={upHand}
                  />
                )}
              />
            )}
          </View>
          <Button title='refresh' onPress={onRefresh} />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
