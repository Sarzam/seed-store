import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Linking,
  Image,
} from 'react-native';


const Login = ({ navigation }) => {
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
      <Text style={styles.header}>hiiii In</Text>

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
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>hiiii In</Text>
      </TouchableOpacity>

      <View style={styles.orContainer}>
        <View style={styles.line} />
        <Text style={styles.orText}>or</Text>
        <View style={styles.line} />
      </View>

      <TouchableOpacity style={styles.googleButton} >
        <View style={styles.googleButtonContent}>
          <Image
            source={require('../../assets/images/googleIcon.png')}
            style={styles.googleLogo}
          />
          <Text style={styles.googleButtonText}>Log in with Google</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
        <Text style={styles.signupLink}>Don’t have an account? Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#ffffff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#8B183F',
  },
  input: {
    borderWidth: 1,
    borderColor: '#373F51',
    borderRadius: 8,
    padding: 12,
    marginBottom: 10,
    backgroundColor: '#fff',
    color: '#333',
  },
  button: {
    backgroundColor: '#8B183F',
    borderRadius: 8,
    padding: 15,
    alignItems: 'center',
    marginVertical: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  googleButton: {
    borderColor: '#373F51',
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 10,
    backgroundColor: '#ffffff',
  },
  googleButtonContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  googleLogo: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  googleButtonText: {
    color: '#373F51',
    fontSize: 16,
    fontWeight: 'bold',
  },
  orContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#373F51',
  },
  orText: {
    marginHorizontal: 10,
    color: '#373F51',
    fontSize: 16,
  },
  signupLink: {
    color: '#8B183F',
    textAlign: 'center',
    marginTop: 20,
    textDecorationLine: 'underline',
    fontSize: 16,
  },
});

export default Login;
