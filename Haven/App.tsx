// App.tsx
import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'; // Import the NavigationContainer
import AppNavigator from './app/Navigation/AppNavigator'; // Import the AppNavigator component

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle="dark-content" />
      <NavigationContainer> {/* Wrap the navigator inside NavigationContainer */}
        <AppNavigator />  {/* Render the AppNavigator component */}
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;
