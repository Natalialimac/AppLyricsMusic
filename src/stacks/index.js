import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Home from '../screens/Home/index';
const Stack = createStackNavigator();

export default () => (
  <Stack.Navigator
    initialRouteName="Home"
    screenOptions={{
      headerShown: false,
    }}>
    <Stack.Screen name=" " component={Home} />
  </Stack.Navigator>
);
