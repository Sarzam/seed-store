// _layout.tsx
import 'react-native-gesture-handler';  // Import gesture handler
import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';  // Import GestureHandlerRootView
import SideDrawerNavigator from './Navigation/SideDrawerNavigator';  // Import SideDrawerNavigator

const Layout = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SideDrawerNavigator />
    </GestureHandlerRootView>
  );
};

export default Layout;  // Ensure Layout is the default export



