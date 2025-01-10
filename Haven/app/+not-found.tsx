import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import SignUp from './(tabs)/SignUp';  // Import the SignUp component
import Login from './(tabs)/Login';    // Import the Login component

const AuthPage = () => {
  // State to toggle between SignUp and Login
  const [isSignUp, setIsSignUp] = useState(true);

  // Function to toggle the state
  const toggleForm = () => {
    setIsSignUp(!isSignUp);
  };

  return (
    <View style={styles.container}>
      {isSignUp ? (
        <SignUp /> // Render SignUp component if isSignUp is true
      ) : (
        <Login /> // Render Login component if isSignUp is false
      )}

      {/* Toggle between SignUp and Login */}
      <TouchableOpacity onPress={toggleForm} style={styles.toggleTextContainer}>
        <Text style={styles.toggleText}>
          {isSignUp
            ? "."
            : "."}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    backgroundColor: '#ffffff',
  },
  toggleTextContainer: {
    marginTop: 20,
  },
  toggleText: {
    color: '#8B183F',
    fontSize: 16,
    textDecorationLine: 'underline',
  },
});

export default AuthPage;
