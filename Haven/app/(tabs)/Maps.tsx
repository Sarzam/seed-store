import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (email && password) {
      Alert.alert('Login Successful');
    } else {
      Alert.alert('Please fill in both email and password');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Log In</Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        placeholderTextColor="#373F51"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
        placeholderTextColor="#373F51"
      />

      {/* Login Button */}
      <TouchableOpacity
        style={styles.button}
        onPress={handleLogin}
      >
        <Text style={styles.buttonText}>Log In</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white', // Dark blue-gray background
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#8B183F', // Burgundy color for the header
  },
  input: {
    borderWidth: 1,
    borderColor: '#8B183F', // Burgundy border for inputs
    borderRadius: 8,
    padding: 12,
    marginBottom: 10,
    backgroundColor: '#FFFFFF', // White background for input fields
    color: '#373F51', // Dark blue-gray text color
  },
  button: {
    backgroundColor: '#8B183F', // Burgundy button color
    borderRadius: 8,
    padding: 15,
    alignItems: 'center',
    marginVertical: 10,
  },
  buttonText: {
    color: '#FFFFFF', // White text on buttons
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Login;
