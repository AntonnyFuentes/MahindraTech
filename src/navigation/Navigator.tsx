import React from 'react';
import {enableScreens} from 'react-native-screens';
import {createStackNavigator} from '@react-navigation/stack';

import MainNavigator from './MainNavigator';
import {NavigationRoutes} from './Routes';

interface NaivgatorProps {
  initialRouteName: NavigationRoutes;
}

enableScreens();
const Stack = createStackNavigator();

function Navigator(props: NaivgatorProps) {
  const {initialRouteName} = props;

  return (
    <Stack.Navigator
      initialRouteName={initialRouteName}
      screenOptions={{gestureEnabled: false, headerShown: false}}>
      <Stack.Screen
        name={NavigationRoutes.MAIN_NAVIGATOR}
        children={MainNavigator}
      />
    </Stack.Navigator>
  );
}

export default Navigator;
