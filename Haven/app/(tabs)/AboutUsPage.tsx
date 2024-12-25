import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';

export default function AboutUsPage() {
  return (
    <ScrollView style={styles.container}>

      {/* Logo Section */}
      <Image 
        source={{ uri: 'https://via.placeholder.com/150' }} 
        style={styles.logo}
      />

      {/* Content Section */}
      <View style={styles.content}>
        <Text style={styles.heading}>Welcome to Haven!</Text>
        <Text style={styles.paragraph}>
          Haven is your trusted partner in ensuring safety and well-being, wherever life takes you. From staying connected with loved ones to accessing critical resources, our platform is built to empower and protect.
        </Text>
      </View>

      {/* Vision Section */}
      <View style={styles.section}>
        <Feather name="eye" size={24} color="#007BFF" style={styles.icon} />
        <Text style={styles.subheading}>Our Vision</Text>
        <Text style={styles.paragraph}>
          To build a world where everyone feels safe and secure, no matter where they are. Through cutting-edge technology and community support, Haven sets a new standard in personal safety.
        </Text>
      </View>

      {/* Values Section */}
      <View style={styles.section}>
        <Feather name="heart" size={24} color="#007BFF" style={styles.icon} />
        <Text style={styles.subheading}>Our Values</Text>
        <Text style={styles.paragraph}>
          - Empathy: Understanding and addressing user needs.{"\n"}
          - Innovation: Leveraging advanced tools for continuous improvement.{"\n"}
          - Integrity: Maintaining trust and privacy at the core.{"\n"}
          - Collaboration: Fostering a community of support and care.
        </Text>
      </View>

      {/* Team Section */}
      <View style={styles.section}>
        <Feather name="users" size={24} color="#007BFF" style={styles.icon} />
        <Text style={styles.subheading}>Our Team</Text>
        <Text style={styles.paragraph}>
          Behind Haven is a team of developers, designers, and safety experts who are passionate about creating a seamless and reliable safety experience for all our users.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FA',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#007BFF',
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  backButton: {
    marginRight: 10,
  },
  headerTitle: {
    fontSize: 20,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  logo: {
    width: 120,
    height: 120,
    alignSelf: 'center',
    marginTop: 20,
    marginBottom: 20,
    borderRadius: 60,
  },
  content: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333333',
    textAlign: 'center',
    marginBottom: 10,
  },
  paragraph: {
    fontSize: 16,
    lineHeight: 22,
    color: '#555555',
    textAlign: 'justify',
  },
  section: {
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  subheading: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#007BFF',
    marginTop: 10,
    marginBottom: 5,
  },
  icon: {
    marginBottom: 10,
  },
});
