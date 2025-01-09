import React from 'react';
import { StyleSheet, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useNavigation } from '@react-navigation/native';

// Import screens
import HomePage from '../(tabs)/HomePage';
import MapsPage from '../(tabs)/Maps';
import ContactsPage from '../(tabs)/ContactsPage';
import MoreTabPlaceholder from './MoreTabPlaceholder';
import UploadImagePage from '../(tabs)/UploadImagePage'; // Ensure this is the correct path

const Tab = createBottomTabNavigator();

const tabIcons = {
  Home: 'home-outline',
  Maps: 'map-outline',
  Contacts: 'call-outline',
  More: 'ellipsis-horizontal-outline',
};

export default function BottomNavigator() {
  const navigation = useNavigation();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === '.') {
            return (
              <View style={[styles.uploadCircle, focused && styles.uploadCircleFocused]}>
                <Icon name="add" size={size - 5} color="#fff" />
              </View>
            );
          }
          const iconName = tabIcons[route.name] || '';
          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#373F51',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="Home" component={HomePage} options={{ headerShown: false }} />
      <Tab.Screen name="Maps" component={MapsPage} options={{ headerShown: false }} />
      <Tab.Screen
        name="."
        component={UploadImagePage}
        options={{
          headerShown: false,
        }}
      />
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
  );
}

const styles = StyleSheet.create({
  uploadCircle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#373F51',
    justifyContent: 'center',
    alignItems: 'center',
  },
  uploadCircleFocused: {
    backgroundColor: '#4C5C72', // Slightly different color when focused
  },
});
