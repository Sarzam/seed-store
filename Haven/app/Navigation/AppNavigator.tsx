import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

import HomePage from '../(tabs)/HomePage';
import SignUp from '../(tabs)/SignUp';
import Login from '../(tabs)/Login'; // Import Login screen

const Stack = createStackNavigator();

const AppNavigator = () => {
  const [isSignedUp, setIsSignedUp] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const checkStatus = async () => {
      try {
        const signUpStatus = await AsyncStorage.getItem('isSignedUp');
        const loginStatus = await AsyncStorage.getItem('isLoggedIn');

        if (signUpStatus === 'true') {
          setIsSignedUp(true);
        }
        if (loginStatus === 'true') {
          setIsLoggedIn(true);
        }
      } catch (error) {
        console.error('Error checking status:', error);
      }
    };

    checkStatus();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isLoggedIn ? (
          // If logged in, show HomePage
          <Stack.Screen name="Home" component={HomePage} />
        ) : isSignedUp ? (
          // If signed up but not logged in, show Login
          <Stack.Screen name="Login" component={Login} />
        ) : (
          // If not signed up, show SignUp
          <Stack.Screen name="SignUp" component={SignUp} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
