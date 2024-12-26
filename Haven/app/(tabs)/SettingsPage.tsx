import React, { useState } from 'react';
import { View, Text, StyleSheet, Switch, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const SettingsPage = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isNotificationsEnabled, setIsNotificationsEnabled] = useState(true);

  const toggleDarkMode = () => {
    setIsDarkMode(previousState => !previousState);
    // Add logic to apply theme changes (e.g., update context or global styles)
  };

  const toggleNotifications = () => {
    setIsNotificationsEnabled(previousState => !previousState);
    // Add logic to handle notification settings
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Settings</Text>

      {/* Dark Mode Toggle */}
      <View style={styles.settingItem}>
        <Text style={styles.settingText}>Dark Mode</Text>
        <Switch
          value={isDarkMode}
          onValueChange={toggleDarkMode}
          trackColor={{ false: '#767577', true: '#0a7ea4' }}
          thumbColor={isDarkMode ? '#fff' : '#f4f3f4'}
        />
      </View>

      {/* Notifications Toggle */}
      <View style={styles.settingItem}>
        <Text style={styles.settingText}>Enable Notifications</Text>
        <Switch
          value={isNotificationsEnabled}
          onValueChange={toggleNotifications}
          trackColor={{ false: '#767577', true: '#0a7ea4' }}
          thumbColor={isNotificationsEnabled ? '#fff' : '#f4f3f4'}
        />
      </View>

      {/* Logout Button */}
      <TouchableOpacity style={styles.logoutButton} onPress={() => alert('Logged out')}>
        <Text style={styles.logoutText}>Log Out</Text>
      </TouchableOpacity>

      {/* Footer Links */}
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#0a7ea4',
  },
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  settingText: {
    fontSize: 18,
    color: '#333',
  },
  logoutButton: {
    backgroundColor: '#FF4D4D',
    paddingVertical: 12,
    marginTop: 30,
    borderRadius: 5,
    alignItems: 'center',
  },
  logoutText: {
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
});

export default SettingsPage;
