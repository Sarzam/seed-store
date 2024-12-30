// BottomNavigator.tsx
import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useNavigation } from '@react-navigation/native';

// Import screens
import HomePage from '../(tabs)/HomePage';
import MapsPage from '../(tabs)/Maps';
import ContactsPage from '../(tabs)/ContactsPage';
import MoreTabPlaceholder from './MoreTabPlaceholder';
import UploadImagePage from '../(tabs)/UploadImagePage'; // Ensure this is the correct path

// Create Bottom Tab Navigator
const Tab = createBottomTabNavigator();

const tabIcons = {
  Home: 'home-outline',
  Maps: 'map-outline',
  Contacts: 'call-outline',
  More: 'ellipsis-horizontal-outline',
};

export default function BottomNavigator() {
  const navigation = useNavigation(); // Correctly using useNavigation

  return (
    <>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            const iconName = tabIcons[route.name] || '';
            return <Icon name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#007BFF',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Home" component={HomePage} options={{ headerShown: false }} />
        <Tab.Screen name="Maps" component={MapsPage} options={{ headerShown: false }} />
        <Tab.Screen name="Contacts" component={ContactsPage} options={{ headerShown: false }} />
        <Tab.Screen
          name="More"
          component={MoreTabPlaceholder}
          listeners={({ navigation }) => ({
            tabPress: (e) => {
              e.preventDefault();
              navigation.toggleDrawer();
            },
          })}
        />
      </Tab.Navigator>

      {/* Floating Action Button (FAB) */}
      <TouchableOpacity
        style={styles.fab}
        onPress={() => navigation.navigate('UploadImagePage')} // Navigate to UploadImagePage
      >
        <Icon name="add" size={30} color="white" />
      </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({
  fab: {
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
  },
});
