import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';

export default function AboutUsPage() {
  return (
    <ScrollView style={styles.container}>

      {/* Hero Section */}
      <View style={styles.header}>
              <View style={styles.headerTextContainer}>
                <Text style={styles.welcomeText}>Know More About Us</Text>
              </View>
      </View>

      {/* Our Mission Section */}
      <View style={styles.section}>
        <Feather name="compass" size={30} color="#AB0D0D" style={styles.icon} />
        <Text style={styles.subheading}>Our Mission</Text>
        <Text style={styles.paragraph}>
          Our mission is to revolutionize the way you explore the world. By harnessing the power of AI, we aim to provide accurate, real-time location suggestions and intelligent navigation, helping you discover new places with ease.
        </Text>
      </View>

      {/* Our Vision Section */}
      <View style={styles.section}>
        <Feather name="target" size={30} color="#AB0D0D" style={styles.icon} />
        <Text style={styles.subheading}>Our Vision</Text>
        <Text style={styles.paragraph}>
          To create a world where everyone can navigate their surroundings effortlessly with the help of AI. We believe that AI should not only make life easier but should also make it more enjoyable by allowing you to focus on your experiences, not your directions.
        </Text>
      </View>

      {/* AI Technology Section */}
      <View style={styles.section}>
        <Feather name="cpu" size={30} color="#AB0D0D" style={styles.icon} />
        <Text style={styles.subheading}>AI Technology</Text>
        <Text style={styles.paragraph}>
          At the core of our app is an advanced AI engine that uses machine learning to predict the best locations based on your preferences. Our AI technology evolves with every interaction, learning from user data to provide smarter, faster recommendations.
        </Text>
      </View>

      {/* Our Team Section */}
      <View style={styles.section}>
        <Feather name="users" size={30} color="#AB0D0D" style={styles.icon} />
        <Text style={styles.subheading}>Meet the Team</Text>
        <Text style={styles.paragraph}>
          Behind this powerful AI-driven platform is a team of passionate developers, data scientists, and user experience experts. We're constantly working to improve the app and provide you with the most intuitive and helpful experience possible.
        </Text>
      </View>
      
      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>Kavach - Your shield in every step.</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#373F51', // Light, clean background
  },
  header: {
    padding: 20,
    backgroundColor: "#8B183F", // Claret
    borderRadius: 10,
    marginBottom: 20,
    elevation: 5, // Added shadow
    margin:10,
  },
  headerTextContainer: { 
    alignItems: "flex-start",
  },
  welcomeText: { 
    fontSize: 20, color: "#F2F4F3" 
  }, // White Smoke
  heroSection: {
    backgroundColor: '#ADD8E6', // Bright blue for a tech-inspired look
    paddingVertical: 40,
    paddingHorizontal: 20,
    marginBottom: 20,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  heroHeading: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
    marginBottom: 10,
  },
  heroText: {
    fontSize: 18,
    color: 'black',
    textAlign: 'center',
    marginBottom: 20,
    lineHeight: 24,
  },
  section: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 20,
    paddingHorizontal: 25,
    marginBottom: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5, // For Android shadow effect
    margin:20,
  },
  subheading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#AB0D0D', // Blue color to keep the theme
    marginBottom: 10,
  },
  paragraph: {
    fontSize: 16,
    color: '#333333',
    lineHeight: 22,
    textAlign: 'justify',
  },
  icon: {
    marginBottom: 15,
  },
  footer: {
    backgroundColor: '#8B183F',
    paddingVertical: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  footerText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
});
