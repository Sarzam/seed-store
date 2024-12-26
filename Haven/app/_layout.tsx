import 'react-native-gesture-handler';
import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import SideDrawerNavigator from './Navigation/SideDrawerNavigator';

const Layout = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SideDrawerNavigator />
    </GestureHandlerRootView>
  );
};

export default Layout;
