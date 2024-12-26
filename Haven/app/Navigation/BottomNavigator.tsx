import React, { useState } from 'react';
import { Modal, View, Text, Button, StyleSheet, TouchableOpacity, Image, PermissionsAndroid } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { launchImageLibrary } from 'react-native-image-picker'; // For image selection
import Geolocation from 'react-native-geolocation-service'; // For geolocation
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Import screens
import HomePage from '../(tabs)/HomePage';
import MapsPage from '../(tabs)/Maps';
import ContactsPage from '../(tabs)/ContactsPage';
import MoreTabPlaceholder from './MoreTabPlaceholder';
import UploadImagePage from '../(tabs)/UploadImagePage'; // Ensure this is the correct path

// Initialize Tab Navigator
const Tab = createBottomTabNavigator();

const tabIcons = {
  Home: 'home-outline',
  Maps: 'map-outline',
  Contacts: 'call-outline',
  More: 'ellipsis-horizontal-outline',
};

export default function BottomNavigator({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [imageUri, setImageUri] = useState(null);
  const [location, setLocation] = useState(null);
  const [loading, setLoading] = useState(false);

  // Function to request location permission (Android)
  const requestLocationPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Location Permission',
          message: 'We need access to your location to get the current position',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('Location permission granted');
        getCurrentLocation(); // Proceed to get location if permission is granted
      } else {
        console.log('Location permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  // Function to get the current location
  const getCurrentLocation = () => {
    setLoading(true); // Set loading to true when requesting location
    Geolocation.getCurrentPosition(
      (position) => {
        setLocation(position.coords);
        setLoading(false); // Set loading to false after getting the position
      },
      (error) => {
        console.log(error.code, error.message);
        setLocation(null);
        setLoading(false); // Set loading to false in case of error
      },
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
    );
  };

  // Function to handle image selection
  const selectImage = () => {
    launchImageLibrary({ mediaType: 'photo' }, (response) => {
      if (response.assets) {
        setImageUri(response.assets[0].uri);
      }
    });
  };

  return (
    <React.Fragment>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            const iconName = tabIcons[route.name] || '';  // Dynamic icon mapping
            return <Icon name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#007BFF',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Home" component={HomePage} options={{ headerShown: false }}  />
        <Tab.Screen name="Maps" component={MapsPage} options={{ headerShown: false }} />
        <Tab.Screen name="Contacts" component={ContactsPage} options={{headerShown: false}} />

        {/* The 'More' tab uses a listener to toggle the drawer */}
        <Tab.Screen
          name="More"
          component={MoreTabPlaceholder} // Ensure this is a valid component
          listeners={({ navigation }) => ({
            tabPress: (e) => {
              e.preventDefault(); // Prevent tab navigation
              navigation.toggleDrawer(); // Open the side drawer
            },
          })}
        />
      </Tab.Navigator>

      {/* Floating Action Button (FAB) */}
      <TouchableOpacity
        style={{
          position: 'absolute',
          bottom: 30,
          left: '50%',
          transform: [{ translateX: -30 }],
          backgroundColor: '#0a7ea4',
          borderRadius: 50,
          width: 60,
          height: 60,
          justifyContent: 'center',
          alignItems: 'center',
          borderWidth: 2,
          borderColor: '#fff',
        }}
        onPress={() => {
          setModalVisible(true); // Show the modal on button press
          requestLocationPermission(); // Request location permission
        }}
      >
        <Icon name="add" size={30} color="white" />
      </TouchableOpacity>

      {/* Modal to upload image */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.header}>Upload Image</Text>

            {imageUri ? (
              <Image source={{ uri: imageUri }} style={styles.imagePreview} />
            ) : (
              <Text>No image selected</Text>
            )}

            <Button title="Select Image" onPress={selectImage} />

            <Text style={styles.locationText}>
              {loading
                ? 'Fetching location...'
                : location
                ? `Lat: ${location.latitude}, Lon: ${location.longitude}`
                : 'Location not available'}
            </Text>

            <Button title="Close" onPress={() => setModalVisible(false)} />
          </View>
        </View>
      </Modal>
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: 300,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  imagePreview: {
    width: 200,
    height: 200,
    marginVertical: 20,
    borderRadius: 10,
  },
  locationText: {
    fontSize: 16,
    marginVertical: 10,
    color: '#555',
  },
});
