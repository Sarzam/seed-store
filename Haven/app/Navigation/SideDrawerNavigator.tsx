import React, { useState } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { View, Text, TextInput, Alert, StyleSheet, TouchableOpacity, Modal, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import BottomNavigator from './BottomNavigator';
import FAQsPage from '../(tabs)/FAQsPage';
import AboutUsPage from '../(tabs)/AboutUsPage';
import SafetyInsiderPage from '../(tabs)/SafetyInsiderPage';
import SettingsPage from '../(tabs)/SettingsPage';
import UploadImagePage from '../(tabs)/UploadImagePage';
import ReportPage from '../(tabs)/ReportPage';
import HomePage from '../(tabs)/HomePage';
import { ScrollView } from 'react-native-gesture-handler';
import Login from '../(tabs)/Login';
import SignUp from '../(tabs)/SignUp';

const Drawer = createDrawerNavigator();

// Custom Drawer Content
const CustomDrawerContent = ({ navigation }) => {
  return (
    <View style={styles.drawerContainer}>
      {/* Profile Section */}
      <View style={styles.profileSection}>
        <Ionicons name="person-circle-outline" size={80} color="#373F51" style={styles.userIcon} />
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
        onPress={() => navigation.navigate('Home')}
        >
          <Text style={styles.buttonText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity
            style={styles.menuButton}
            onPress={() => navigation.navigate('Report')} // Navigate to UploadImagePage
          >
            <Text style={styles.buttonText}>Report Incident</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.menuButton}
          onPress={() => navigation.navigate('UploadImage')} // Navigate to UploadImagePage
        >
          <Text style={styles.buttonText}>Upload Image</Text>
        </TouchableOpacity>

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
          onPress={() => navigation.navigate('Login')}
        >
          <Text style={styles.logoutButtonText}>Log Out</Text>
        </TouchableOpacity>
        

        {/* <View style={styles.card}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Login')}
          >
            <Text style={styles.deleteText}>Log Out</Text>
            <Text style={styles.deleteDescription}>
              This will log you out from your account in the app.
            </Text>
          </TouchableOpacity>
        </View> */}


        <TouchableOpacity
          style={styles.settingsButton}
          onPress={() => navigation.navigate('Settings')} // Redirect to settings page
        >
          <Ionicons name="settings-outline" size={24} color="black" />
        </TouchableOpacity>
      </View>

      {/* Privacy Policy and Terms */}
      <View style={styles.footerLinksContainer}>
        <TouchableOpacity onPress={() => alert('Privacy Policy info')}>
          <Text style={styles.footerLink}>Privacy Policy</Text>
        </TouchableOpacity>
        <Text style={styles.footerLinkDivider}> | </Text>
        <TouchableOpacity onPress={() => alert('Terms and Conditions info')}>
          <Text style={styles.footerLink}>Terms and Conditions</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default function SideDrawerNavigator() {
  return (
    <Drawer.Navigator drawerContent={(props) => <CustomDrawerContent {...props} />}>
      <Drawer.Screen 
        name="HAVEN" 
        component={BottomNavigator} // Ensure BottomNavigator is passed correctly
        options={{
          headerShown: false,
          
        }}
      />
      <Drawer.Screen name="SignUp" component={SignUp} />
      <Drawer.Screen name="Login" component={Login}/>
      <Drawer.Screen name="FAQs" component={FAQsPage} />
      <Drawer.Screen name="Profile" component={ProfileScreen}/>
      <Drawer.Screen name="AboutUs" component={AboutUsPage} 
      options={{
        headerStyle:{
          backgroundColor: '#373F51',
        },
        headerTintColor: '#fff',
        headerTitle: 'Know more About Us',
        headerTitleStyle: {fontWeight: 'bold',marginLeft: 50},
      }}
      />
      <Drawer.Screen
        name="SafetyInsider"
        component={SafetyInsiderPage}
        options={{
          headerStyle: {
            backgroundColor: '#373F51', // Your desired color
          },
          headerTintColor: '#fff', // Color for the header text
          headerTitle: 'Safety Insider: Mumbai', // Header Title
          headerTitleStyle: { fontWeight: 'bold',marginLeft: 50},
        }}
      />

      <Drawer.Screen name="Settings" component={SettingsPage}
        options={{
          headerStyle:{
            backgroundColor:'#373F51',
          },
          headerTitle: 'Settings',
          headerTitleStyle: {fontWeight: 'bold',marginLeft: 120, color:"white"},
        }}
      />
      <Drawer.Screen name="UploadImage" component={UploadImagePage} 
        options={{
          headerStyle:{
            backgroundColor:'#373F51',
          },
          headerTitle: ' Upload Nearest Landmark',
          headerTitleStyle: {fontWeight: 'bold',marginLeft: 35, color:"white"}
        }}/> 
      <Drawer.Screen name="Report" component={ReportPage} 
        options={{
          headerStyle: {
            backgroundColor: '#373F51', // Your desired color
          },
          headerTintColor: '#fff', // Color for the header text
          headerTitle: 'Report an Incident', // Header Title
          headerTitleStyle: { fontWeight: 'bold',marginLeft: 70},
        }}
      />
      <Drawer.Screen name="Home" component={HomePage} />
    </Drawer.Navigator>
  );
}

const ProfileScreen = () => {
  const [phone, setPhone] = useState('123-456-7890');
  const [email, setEmail] = useState('example@example.com');
  const [password, setPassword] = useState('password123');
  const [gender, setGender] = useState('Female');
  const [dob, setDob] = useState('1998-01-01');
  const [city, setCity] = useState('Rajkot');
  const [state, setState] = useState('Gujarat');
  const [country, setCountry] = useState('India');
  const [pincode, setPincode] = useState('360001');
  const [isUpdateModalVisible, setUpdateModalVisible] = useState(false);
  const [isChangePasswordModalVisible, setChangePasswordModalVisible] = useState(false);
  const [isPersonalInfoModalVisible, setPersonalInfoModalVisible] = useState(false);

  const navigation = useNavigation();

  const handleUpdate = () => {
    // Handle update logic here
    setUpdateModalVisible(false);
  };

  const handleChangePassword = () => {
    // Handle password change logic here
    setChangePasswordModalVisible(false);
  };

  const handlePersonalInfoUpdate = () => {
    // Handle personal info update logic here
    setPersonalInfoModalVisible(false);
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>My Profile</Text>
        </View>

        {/* Profile Section */}
        <View style={styles.profileInfo}>
          <View style={styles.profileAvatar}>
            <Text style={styles.avatarText}>PM</Text>
          </View>
          <Text style={styles.profileName}>Priyanshi Mehta</Text>
          <Text style={styles.profileId}>{phone}</Text>
        </View>

        {/* Contact Info */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Contact Info</Text>
          <View>
            <Text style={styles.infoLabel}>Phone Number</Text>
            <Text style={styles.infoValue}>{phone}</Text>
            <Text style={styles.infoLabel}>Email Address</Text>
            <Text style={styles.infoValue}>{email}</Text>
          </View>
          <TouchableOpacity
            style={styles.updateButton}
            onPress={() => setUpdateModalVisible(true)}
          >
            <Text style={styles.buttonText}>UPDATE</Text>
          </TouchableOpacity>
        </View>

        {/* Password Section */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Password</Text>
          <Text style={styles.infoValue}>{password}</Text>
          <TouchableOpacity
            style={styles.changeButton}
            onPress={() => setChangePasswordModalVisible(true)}
          >
            <Text style={styles.buttonText}>CHANGE</Text>
          </TouchableOpacity>
        </View>

        {/* Personal Info Section */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Personal Info</Text>
          <View>
            <Text style={styles.infoLabel}>Gender</Text>
            <Text style={styles.infoValue}>{gender}</Text>
            <Text style={styles.infoLabel}>Date of Birth</Text>
            <Text style={styles.infoValue}>{dob}</Text>
            <Text style={styles.infoLabel}>Address</Text>
            <Text style={styles.infoValue}>
              {city}, {state}, {country} - {pincode}
            </Text>
          </View>
          <TouchableOpacity
            style={styles.updateButton}
            onPress={() => setPersonalInfoModalVisible(true)}
          >
            <Text style={styles.buttonText}>UPDATE</Text>
          </TouchableOpacity>
        </View>

        {/* Log Out */}
        <View style={styles.card}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Login')}
          >
            <Text style={styles.deleteText}>Log Out</Text>
            <Text style={styles.deleteDescription}>
              This will log you out from your account in the app.
            </Text>
          </TouchableOpacity>
        </View>

        {/* Update Modal */}
        <Modal visible={isUpdateModalVisible} transparent>
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>Update Contact Info</Text>
              <TextInput
                style={styles.input}
                value={phone}
                onChangeText={setPhone}
                placeholder="Enter new phone number"
                keyboardType="phone-pad"
              />
              <TextInput
                style={styles.input}
                value={email}
                onChangeText={setEmail}
                placeholder="Enter new email"
                keyboardType="email-address"
              />
              <TouchableOpacity style={styles.saveButton} onPress={handleUpdate}>
                <Text style={styles.saveButtonText}>SAVE</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.cancelButton}
                onPress={() => setUpdateModalVisible(false)}
              >
                <Text style={styles.cancelButtonText}>CANCEL</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>

        {/* Change Password Modal */}
        <Modal visible={isChangePasswordModalVisible} transparent>
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>Change Password</Text>
              <TextInput
                style={styles.input}
                value={password}
                onChangeText={setPassword}
                placeholder="Enter new password"
                secureTextEntry
              />
              <TouchableOpacity
                style={styles.saveButton}
                onPress={handleChangePassword}
              >
                <Text style={styles.saveButtonText}>SAVE</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.cancelButton}
                onPress={() => setChangePasswordModalVisible(false)}
              >
                <Text style={styles.cancelButtonText}>CANCEL</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>

        {/* Personal Info Modal */}
        <Modal visible={isPersonalInfoModalVisible} transparent>
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>Update Personal Info</Text>
              <TextInput
                style={styles.input}
                value={gender}
                onChangeText={setGender}
                placeholder="Enter gender"
              />
              <TextInput
                style={styles.input}
                value={dob}
                onChangeText={setDob}
                placeholder="Enter date of birth (YYYY-MM-DD)"
              />
              <TextInput
                style={styles.input}
                value={country}
                onChangeText={setCountry}
                placeholder="Enter country"
              />
              <TextInput
                style={styles.input}
                value={state}
                onChangeText={setState}
                placeholder="Enter state"
              />
              <TextInput
                style={styles.input}
                value={city}
                onChangeText={setCity}
                placeholder="Enter city"
              />
              <TextInput
                style={styles.input}
                value={pincode}
                onChangeText={setPincode}
                placeholder="Enter pincode"
                keyboardType="numeric"
              />
              <TouchableOpacity
                style={styles.saveButton}
                onPress={handlePersonalInfoUpdate}
              >
                <Text style={styles.saveButtonText}>SAVE</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.cancelButton}
                onPress={() => setPersonalInfoModalVisible(false)}
              >
                <Text style={styles.cancelButtonText}>CANCEL</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    </ScrollView>
  );
};

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
    color: '#373F51',
    marginBottom: 5,
  },
  viewProfileButton: {
    marginTop: 10,
    backgroundColor: '#373F51',
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
    marginVertical: 10,
  },
  menuContainer: {
    marginTop: 50,
    justifyContent: 'center',
  },
  menuButton: {
    backgroundColor: '#373F51',
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
    backgroundColor: '#AB0D0D',
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
    width: 280,
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
  detailContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  editButton: {
    backgroundColor: '#0a7ea4',
    padding: 10,
    borderRadius: 5,
    marginTop: 30,
    alignItems: 'center',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  value: {
    fontSize: 16,
  },
  container: {
    flex: 1,
    backgroundColor: "#f9f9f9",
    padding: 20,
  },
  header: {
    marginBottom: 20,
  },
  input: {
    flex: 2,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 12,
    margin:5,
    marginBottom: 10,
    width:300,
  },
  actionButtons: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
  },
  profileInfo: {
    alignItems: "center",
    marginBottom: 30,
  },
  profileAvatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "#373F51",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  avatarText: {
    fontSize: 24,
    color: "white",
    fontWeight: "bold",
   },
  profileId: {
    fontSize: 14,
    color: "gray",
  },
  card: {
    backgroundColor: "#fff",
    padding: 20,
    marginBottom: 15,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  infoLabel: {
    fontSize: 14,
    color: "gray",
  },
  infoValue: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
  },
  updateButton: {
    backgroundColor: "#373F51",
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  changeButton: {
    backgroundColor: "#373F51",
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  deleteText: {
    fontSize: 16,
    color: "#AB0D0D",
    fontWeight: "bold",
    marginLeft:139,
  },
  deleteDescription: {
    fontSize: 14,
    color: "gray",
    marginTop: 5,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
    paddingHorizontal: 20,
  },
  modalContent: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
    alignItems: "center",
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 15,
  },
  saveButton: {
    backgroundColor: "#AB0D0D",
    paddingVertical: 10,
    borderRadius: 5,
    width: "100%",
    alignItems: "center",
    marginBottom: 10,
  },
  saveButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  cancelButton: {
    backgroundColor: "#ddd",
    paddingVertical: 10,
    borderRadius: 5,
    width: "100%",
    alignItems: "center",
  },
  cancelButtonText: {
    color: "#000",
},
});