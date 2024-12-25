import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image, TextInput } from 'react-native';
import { Feather, MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function HomePage() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <View style={styles.headerTextContainer}>
          <Text style={styles.welcomeText}>Welcome!</Text>
          <Text style={styles.userName}>Priyanshi</Text>
          <Text style={styles.greetingText}>How is it going today?</Text>
        </View>
      </View>

      {/* Search Bar */}
      <View style={styles.searchBar}>
        <Feather name="search" size={20} color="#9E9E9E" />
        <TextInput
          style={styles.searchInput}
          placeholder="Search for latest health predictions..."
          placeholderTextColor="#9E9E9E"
        />
      </View>

      {/* Quick Access Buttons */}
      <View style={styles.quickAccess}>
        <TouchableOpacity
          style={styles.quickAccessButton}
          onPress={() => navigation.navigate('Contacts')} // Navigate to Contacts page
        >
          <View style={styles.iconCircle}>
            <Feather name="user" size={24} color="#FFFFFF" />
          </View>
          <Text style={styles.quickAccessText}>Talk to Nearby Professional</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.quickAccessButton}>
          <View style={styles.iconCircle}>
            <MaterialIcons name="directions-run" size={24} color="#FFFFFF" />
          </View>
          <Text style={styles.quickAccessText}>Go to Map View</Text>
        </TouchableOpacity>
      </View>

      {/* Safety Insider Section */}
      <ScrollView style={styles.safetyInsider}>
        <Text style={styles.sectionTitle}>Safety insider</Text>
        <TouchableOpacity style={styles.insiderItem}>
          <Text style={styles.insiderTitle}>Heatwave Alert: Tips to Stay Hydrated</Text>
          <Text style={styles.insiderDate}>Sep 10, 2024 • 1 min read</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.insiderItem}>
          <Text style={styles.insiderTitle}>Understanding Emergency Exits</Text>
          <Text style={styles.insiderDate}>Sep 09, 2024 • 2 min read</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.insiderItem}>
          <Text style={styles.insiderTitle}>Uber Launches a Safety-Cam</Text>
          <Text style={styles.insiderDate}>Sep 08, 2024 • 3 min read</Text>
        </TouchableOpacity>
      </ScrollView>

      {/* Footer Alert */}
      <View style={styles.footerAlert}>
        <Text style={styles.alertText}>
          Click to send Alerts to <Text style={styles.alertHighlight}>Emergency Contacts</Text>
        </Text>
        <Text style={styles.alertTime}>Regular schedule at 23:00</Text>
      </View>
    </View>
  );
}

// Your styles remain unchanged


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FA',
  },
  header: {
    padding: 20,
    backgroundColor: '#ADD8E6',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  headerTextContainer: {
    marginLeft: 0,
  },
  welcomeText: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'black',
  },
  userName: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#000000',
  },
  greetingText: {
    fontSize: 15,
    color: 'grey',
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    margin: 20,
    padding: 10,
    borderRadius: 10,
    elevation: 2, // Replaced shadow for Android support
  },
  searchInput: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
    color: 'grey',
  },
  quickAccess: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    margin: 20,
  },
  quickAccessButton: {
    alignItems: 'center',
    width: 120, // Ensured consistent sizing
  },
  iconCircle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#0a7ea4',
    justifyContent: 'center',
    alignItems: 'center',
  },
  quickAccessText: {
    marginTop: 5,
    fontSize: 15,
    color: 'black',
    textAlign: 'center',
  },
  safetyInsider: {
    flex: 1,
    marginHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 19,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 10,
  },
  insiderItem: {
    backgroundColor: '#FFFFFF',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    elevation: 2,
  },
  insiderTitle: {
    fontSize: 16,
    color: 'black',
  },
  insiderDate: {
    marginTop: 5,
    fontSize: 13,
    color: '#9E9E9E',
  },
  footerAlert: {
    backgroundColor: '#ADD8E6',
    padding: 15,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    elevation: 2,
  },
  alertText: {
    fontSize: 16,
    color: '#000000',
  },
  alertHighlight: {
    color: 'black',
    fontWeight: 'bold',
  },
  alertTime: {
    marginTop: 5,
    fontSize: 14,
    color: 'black',
  },
});

