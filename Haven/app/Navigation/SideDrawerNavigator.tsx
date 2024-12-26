import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import BottomNavigator from './BottomNavigator';
import FAQsPage from '../(tabs)/FAQsPage';
import AboutUsPage from '../(tabs)/AboutUsPage';
import SafetyInsiderPage from '../(tabs)/SafetyInsiderPage';
import SettingsPage from '../(tabs)/SettingsPage';

const Drawer = createDrawerNavigator();

// Custom Drawer Content
const CustomDrawerContent = ({ navigation }) => {
  return (
    <View style={styles.drawerContainer}>
      {/* Profile Section */}
      <View style={styles.profileSection}>
        <Ionicons name="person-circle-outline" size={80} color="#0a7ea4" style={styles.userIcon} />
        <View style={styles.profileDetailsContainer}>
          <Text style={styles.profileName}>Priyanshi Mehta</Text>
          <Text style={styles.profileDetails}>pvmehta112@example.com</Text>
          <Text style={styles.profileDetails}>Phone: +91 9876543210</Text>
          <Text style={styles.profileDetails}>DOB: 03-10-2005</Text>
          <Text style={styles.profileDetails}>Country: India</Text>
          <Text style={styles.profileDetails}>State: Gujarat</Text>
          <Text style={styles.profileDetails}>Pincode: 360007</Text>
          <TouchableOpacity
            style={styles.viewProfileButton}
            onPress={() => navigation.navigate('Profile')}
          >
            <Text style={styles.buttonText}>View Profile</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Divider */}
      <View style={styles.divider} />

      {/* Menu Items */}
      <View style={styles.menuContainer}>
        <TouchableOpacity
          style={styles.menuButton}
          onPress={() => navigation.navigate('SafetyInsider')}
        >
          <Text style={styles.buttonText}>Safety Insider</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.menuButton}
          onPress={() => navigation.navigate('AboutUs')}
        >
          <Text style={styles.buttonText}>About Us</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.menuButton}
          onPress={() => navigation.navigate('FAQs')}
        >
          <Text style={styles.buttonText}>FAQs</Text>
        </TouchableOpacity>
      </View>

      {/* Settings and Logout inline */}
      <View style={styles.settingsLogoutContainer}>
        <TouchableOpacity
          style={styles.logoutButtonContainer}
          onPress={() => alert('Logged out')}
        >
          <Text style={styles.logoutButtonText}>Log Out</Text>
        </TouchableOpacity>
        
        <TouchableOpacity
          style={styles.settingsButton}
          onPress={() => navigation.navigate('Settings')}  // Redirect to settings page
        >
          <Ionicons name="settings-outline" size={24} color="black" />
        </TouchableOpacity>
      </View>

      {/* Privacy Policy and Terms */}
      <View style={styles.footerLinksContainer}>
        <TouchableOpacity onPress={() => alert('Privacy Policy')}>
          <Text style={styles.footerLink}>Privacy Policy</Text>
        </TouchableOpacity>
        <Text style={styles.footerLinkDivider}> | </Text>
        <TouchableOpacity onPress={() => alert('Terms and Conditions')}>
          <Text style={styles.footerLink}>Terms and Conditions</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};


// Main Drawer Navigator
export default function SideDrawerNavigator() {
  return (
    <Drawer.Navigator drawerContent={(props) => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="Home" component={BottomNavigator} />
      <Drawer.Screen name="FAQs" component={FAQsPage} />
      <Drawer.Screen name="Profile" component={ProfileScreen} />
      <Drawer.Screen name="AboutUs" component={AboutUsPage} />
      <Drawer.Screen name="SafetyInsider" component={SafetyInsiderPage} />
      <Drawer.Screen name="Settings" component={SettingsPage} />
    </Drawer.Navigator>
  );
}

function ProfileScreen() {
  return (
    <View style={styles.screen}>
      <Text style={styles.profileHeader}>Detailed Profile</Text>
      <Text style={styles.profileInfo}>Name: John Doe</Text>
      <Text style={styles.profileInfo}>Email: johndoe@example.com</Text>
      <Text style={styles.profileInfo}>Phone: +91 9876543210</Text>
      <Text style={styles.profileInfo}>DOB: 01-01-1990</Text>
      <Text style={styles.profileInfo}>Country: India</Text>
      <Text style={styles.profileInfo}>State: Gujarat</Text>
      <Text style={styles.profileInfo}>Pincode: 360001</Text>
    </View>
  );
}

// Styles
const styles = StyleSheet.create({
  drawerContainer: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  profileSection: {
    marginTop: 0,
    alignItems: 'flex-start',
  },
  userIcon: {
    marginBottom: 10,
  },
  profileDetailsContainer: {
    alignItems: 'flex-start',
    marginTop: 10,
  },
  profileName: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  profileDetails: {
    fontSize: 18,
    color: '#666',
    marginBottom: 5,
  },
  viewProfileButton: {
    marginTop: 10,
    backgroundColor: '#0a7ea4',
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'center',
  },
  divider: {
    height: 1,
    backgroundColor: '#ccc',
    marginVertical: 20,
  },
  menuContainer: {
    marginTop: 220,
    justifyContent: 'center',
  },
  menuButton: {
    backgroundColor: '#0a7ea4',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
    marginBottom: 10,
  },
  settingsLogoutContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  settingsButton: {
    padding: 10,
  },
  logoutButtonContainer: {
    backgroundColor: '#FF4D4D',
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
    width:280,
  },
  logoutButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  footerLinksContainer: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerLink: {
    fontSize: 14,
    color: '#007BFF',
    textDecorationLine: 'underline',
  },
  footerLinkDivider: {
    fontSize: 14,
    color: '#666',
    marginHorizontal: 5,
  },
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  profileHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  profileInfo: {
    fontSize: 16,
    marginBottom: 10,
    color: '#333',
  },
});