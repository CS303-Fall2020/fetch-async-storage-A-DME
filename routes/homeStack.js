import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Home from '../screens/home';
import ReviewDetails from '../screens/reviewDetails';
import Header from '../components/header';
import React from 'react';

const screens = {
  Home: {
    screen: Home,
    navigationOptions: {
      headerTitle: () => <Header />
    }
  },
  ReviewDetails: {
    screen: ReviewDetails,
    navigationOptions: {
      title: 'Details'
      // headerStyle: { backgroundColor: '#ddd' }
    }
  }
  // TodoItem: {
  //   screen: TodoItem,
  //   navigationOptions: {
  //     title: 'Details'
  //     // headerStyle: { backgroundColor: '#ddd' }
  //   }
  // }
};

const HomeStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: '#444',
    headerStyle: {
      backgroundColor: '#ccc',
      height: 120
      // alignSelf: 'stretch'
    }
  }
});

export default createAppContainer(HomeStack);
