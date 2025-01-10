import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  StyleSheet,
  Image,
  Linking,
} from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation
import { Checkbox } from 'react-native-paper';

const SignUp = () => {
  const navigation = useNavigation(); // Initialize useNavigation hook
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [dob, setDob] = useState('');
  const [gender, setGender] = useState('');
  const [country, setCountry] = useState('');
  const [state, setState] = useState('');
  const [city, setCity] = useState('');
  const [pincode, setPincode] = useState('');
  const [acceptTerms, setAcceptTerms] = useState(false);

  const handleSignUp = () => {
    if (!email || !password || !confirmPassword || !dob || !gender || !country || !state || !city || !pincode) {
      Alert.alert('All fields are required');
      return;
    }

    if (!acceptTerms) {
      Alert.alert('You must accept the Terms and Conditions to sign up');
      return;
    }

    if (password === confirmPassword) {
      Alert.alert('Sign Up Successful');
      navigation.navigate('Home'); // Navigate to the Home page after successful signup
    } else {
      Alert.alert('Passwords do not match');
    }
  };

  const openTermsAndConditions = () => {
    Linking.openURL('https://www.example.com/terms-and-conditions');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Sign Up</Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
      />
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry={true}
      />
      <TextInput
        style={styles.input}
        placeholder="DOB (dd/mm/yyyy)"
        value={dob}
        onChangeText={setDob}
      />
      <TextInput
        style={styles.input}
        placeholder="Gender"
        value={gender}
        onChangeText={setGender}
      />
      <TextInput
        style={styles.input}
        placeholder="Country"
        value={country}
        onChangeText={setCountry}
      />
      <TextInput
        style={styles.input}
        placeholder="State"
        value={state}
        onChangeText={setState}
      />
      <TextInput
        style={styles.input}
        placeholder="City"
        value={city}
        onChangeText={setCity}
      />
      <TextInput
        style={styles.input}
        placeholder="PinCode"
        value={pincode}
        onChangeText={setPincode}
      />

      <View style={styles.checkboxContainer}>
        <Checkbox
          status={acceptTerms ? 'checked' : 'unchecked'}
          onPress={() => setAcceptTerms(!acceptTerms)}
          color="#8B183F"
        />
        <Text style={styles.checkboxLabel}>
          I accept the{' '}
          <Text style={styles.link} onPress={openTermsAndConditions}>
            Terms and Conditions
          </Text>
        </Text>
      </View>

      <TouchableOpacity
        style={[styles.button, { backgroundColor: acceptTerms ? '#8B183F' : '#d3d3d3' }]}
        onPress={handleSignUp}
        disabled={!acceptTerms}
      >
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>

      <View style={styles.orContainer}>
        <View style={styles.line} />
        <Text style={styles.orText}>or</Text>
        <View style={styles.line} />
      </View>

      <TouchableOpacity style={styles.googleButton}>
        <View style={styles.googleButtonContent}>
          <Image
            source={require('../../assets/images/googleIcon.png')}
            style={styles.googleLogo}
          />
          <Text style={styles.googleButtonText}>Sign up with Google</Text>
        </View>
      </TouchableOpacity>

      {/* This TouchableOpacity will navigate to the Login screen */}
      <TouchableOpacity onPress={() => navigation.navigate("Login")}>
        <Text style={styles.loginLink}>Already have an account? Log In</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignUp;

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
    borderRadius: 8,
    padding: 15,
    alignItems: 'center',
    marginVertical: 10,
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
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  checkboxLabel: {
    fontSize: 14,
    color: '#373F51',
  },
  link: {
    color: '#8B183F',
    textDecorationLine: 'underline',
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
  loginLink: {
    color: '#8B183F',
    textAlign: 'center',
    marginTop: 20,
    textDecorationLine: 'underline',
    fontSize: 16,
  },
});
