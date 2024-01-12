import React from 'react';
import {enableScreens} from 'react-native-screens';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from '../screens/Home';
import UsersScreen from '../screens/Users';
import PhotosScreen from '../screens/Photos';
import {MainRoutes} from './Routes';

enableScreens();
const Stack = createStackNavigator();

function MainNavigator() {
  return (
    <Stack.Navigator
      initialRouteName={MainRoutes.HOME}
      screenOptions={{gestureEnabled: false, headerShown: false}}>
      <Stack.Screen name={MainRoutes.HOME} component={HomeScreen} />
      <Stack.Screen name={MainRoutes.USERS} component={UsersScreen} />
      <Stack.Screen name={MainRoutes.PHOTOS} component={PhotosScreen} />
    </Stack.Navigator>
  );
}

export default MainNavigator;
