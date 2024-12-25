import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // For User Icon
import BottomNavigator from './BottomNavigator'; // Your Bottom Nav
import FAQsPage from '../(tabs)/FAQsPage';
import AboutUsPage from '../(tabs)/AboutUsPage'; // Assuming an About Us Page exists

const Drawer = createDrawerNavigator();

// Custom Drawer Content
const CustomDrawerContent = ({ navigation }) => {
  return (
    <View style={styles.drawerContainer}>
      {/* Profile Section */}
      <View style={styles.profileSection}>
        {/* User Icon */}
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

      {/* Logout Button */}
      <View style={styles.logoutContainer}>
        <TouchableOpacity
          style={styles.logoutButtonContainer}
          onPress={() => alert('Logged out')}
        >
          <Text style={styles.logoutButtonText}>Log Out</Text>
        </TouchableOpacity>
      </View>

      {/* Privacy Policy and Terms */}
      <View style={styles.footerLinksContainer}>
        <TouchableOpacity onPress={() => alert('At Haven, your privacy is our priority. We are committed to safeguarding your personal information while ensuring the best possible user experience. The app collects and processes only the data necessary for its functionality, such as location details, emergency contact information, and captured images, all of which are securely stored and transmitted. Your location data is used solely for real-time updates, emergency alerts, and personalized safety insights. Haven operates offline using lightweight algorithms, ensuring minimal data transmission and protecting your privacy in GPS-dead zones. We do not share your information with third parties without explicit consent, except when required by law. By using Haven, you entrust us with your safety, and we take that responsibility seriously by employing advanced encryption and robust security measures to protect your data. For a detailed overview of our data practices, please refer to our complete privacy policy within the app or on our website.')}>
          <Text style={styles.footerLink}>Privacy Policy</Text>
        </TouchableOpacity>
        <Text style={styles.footerLinkDivider}> | </Text>
        <TouchableOpacity onPress={() => alert('Welcome to Haven. By using our app, you agree to the following terms and conditions:\n1. Purpose and Use: Haven is designed to enhance personal safety by providing location-based services, emergency alerts, and safety insights. It is your responsibility to use the app in accordance with its intended purpose.\n2. Accuracy of Information: While we strive to provide accurate and reliable safety updates and location services, Haven relies on various data sources and offline algorithms, which may occasionally result in discrepancies. We are not liable for any inaccuracies or issues arising from the use of the app.\n3. User Responsibility: Users must ensure that the app is updated regularly and functioning correctly on their device. Providing accurate emergency contact information and other details is the sole responsibility of the user.\n4. Data Privacy: By using Haven, you consent to the collection, processing, and storage of data as outlined in our Privacy Policy. We employ strict security measures to protect your data.\n5. Third-Party Services: Haven may utilize third-party tools or services for enhanced functionality. We are not responsible for the actions or data practices of third-party providers.\n6. Limitations of Liability: Haven is not liable for any damages, direct or indirect, resulting from the use of the app, including emergencies where the app could not function due to external factors such as device issues or network failures.\n7. Termination: We reserve the right to suspend or terminate your access to Haven if the terms and conditions are violated or for maintenance and upgrades.\n8. Changes to Terms: We may update these terms periodically. Continued use of the app after such updates constitutes your acceptance of the revised terms.')}>
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
    marginTop:220,
    justifyContent: 'center',
  },
  menuButton: {
    backgroundColor: '#0a7ea4',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
    marginBottom: 10,
  },
  logoutContainer: {
    marginTop: 0, // Pushes the logout button to the bottom
  },
  logoutButtonContainer: {
    marginTop: 0,
    backgroundColor: '#FF4D4D',
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
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
