import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignUp from '../(tabs)/SignUp';
import HomePage from '../(tabs)/HomePage';
import Login from '../(tabs)/Login';  // Import the Login screen

const Stack = createStackNavigator();

const Layout = () => {
  const [isSignedUp, setIsSignedUp] = useState(false); // Track signup state

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="SignUp">
          {() => <SignUp onSignUp={() => setIsSignedUp(true)} />}
        </Stack.Screen>
        <Stack.Screen name="HomePage" component={HomePage} />
        <Stack.Screen name="Login" component={Login} />  {/* Add the Login screen here */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Layout;
