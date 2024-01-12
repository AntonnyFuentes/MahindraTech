import React, {useState} from 'react';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';

import store from './config/store';
import Navigator from './navigation/Navigator';
import {NavigationRoutes} from './navigation/Routes';

import './utils/localization/config';

export default function App() {
  const [isSignIn] = useState<boolean>(true);

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Navigator
          initialRouteName={
            isSignIn ? NavigationRoutes.MAIN_NAVIGATOR : NavigationRoutes.AUTH
          }
        />
      </NavigationContainer>
    </Provider>
  );
}
