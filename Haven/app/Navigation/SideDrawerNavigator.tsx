// import React from 'react';
// import { createDrawerNavigator } from '@react-navigation/drawer';
// import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
// import { Ionicons } from '@expo/vector-icons';
// import BottomNavigator from './BottomNavigator';
// import FAQsPage from '../(tabs)/FAQsPage';
// import AboutUsPage from '../(tabs)/AboutUsPage';
// import SafetyInsiderPage from '../(tabs)/SafetyInsiderPage';
// import SettingsPage from '../(tabs)/SettingsPage';
// import UploadImagePage from '../(tabs)/UploadImagePage'; // Import the UploadImagePage

// const Drawer = createDrawerNavigator();

// // Custom Drawer Content
// const CustomDrawerContent = ({ navigation }) => {
//   return (
//     <View style={styles.drawerContainer}>
//       {/* Profile Section */}
//       <View style={styles.profileSection}>
//         <Ionicons name="person-circle-outline" size={80} color="#0a7ea4" style={styles.userIcon} />
//         <View style={styles.profileDetailsContainer}>
//           <Text style={styles.profileName}>Priyanshi Mehta</Text>
//           <Text style={styles.profileDetails}>pvmehta112@example.com</Text>
//           <Text style={styles.profileDetails}>Phone: +91 9876543210</Text>
//           <Text style={styles.profileDetails}>DOB: 03-10-2005</Text>
//           <Text style={styles.profileDetails}>Country: India</Text>
//           <Text style={styles.profileDetails}>State: Gujarat</Text>
//           <Text style={styles.profileDetails}>Pincode: 360007</Text>
//           <TouchableOpacity
//             style={styles.viewProfileButton}
//             onPress={() => navigation.navigate('Profile')}
//           >
//             <Text style={styles.buttonText}>View Profile</Text>
//           </TouchableOpacity>
//         </View>
//       </View>

//       {/* Divider */}
//       <View style={styles.divider} />

//       {/* Menu Items */}
//       <View style={styles.menuContainer}>
//         {/* Upload Image Button */}
//         <TouchableOpacity
//           style={styles.menuButton}
//           onPress={() => navigation.navigate('UploadImage')} // Navigate to UploadImagePage
//         >
//           <Text style={styles.buttonText}>Upload Image</Text>
//         </TouchableOpacity>

//         <TouchableOpacity
//           style={styles.menuButton}
//           onPress={() => navigation.navigate('SafetyInsider')}
//         >
//           <Text style={styles.buttonText}>Safety Insider</Text>
//         </TouchableOpacity>

//         <TouchableOpacity
//           style={styles.menuButton}
//           onPress={() => navigation.navigate('AboutUs')}
//         >
//           <Text style={styles.buttonText}>About Us</Text>
//         </TouchableOpacity>

//         <TouchableOpacity
//           style={styles.menuButton}
//           onPress={() => navigation.navigate('FAQs')}
//         >
//           <Text style={styles.buttonText}>FAQs</Text>
//         </TouchableOpacity>
//       </View>

//       {/* Settings and Logout inline */}
//       <View style={styles.settingsLogoutContainer}>
//         <TouchableOpacity
//           style={styles.logoutButtonContainer}
//           onPress={() => alert('Logged out')}
//         >
//           <Text style={styles.logoutButtonText}>Log Out</Text>
//         </TouchableOpacity>
        
//         <TouchableOpacity
//           style={styles.settingsButton}
//           onPress={() => navigation.navigate('Settings')} // Redirect to settings page
//         >
//           <Ionicons name="settings-outline" size={24} color="black" />
//         </TouchableOpacity>
//       </View>

//       {/* Privacy Policy and Terms */}
//       <View style={styles.footerLinksContainer}>
//         <TouchableOpacity onPress={() => alert('Privacy Policy info')}>
//           <Text style={styles.footerLink}>Privacy Policy</Text>
//         </TouchableOpacity>
//         <Text style={styles.footerLinkDivider}> | </Text>
//         <TouchableOpacity onPress={() => alert('Terms and Conditions info')}>
//           <Text style={styles.footerLink}>Terms and Conditions</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// export default function SideDrawerNavigator() {
//   return (
//     <Drawer.Navigator drawerContent={(props) => <CustomDrawerContent {...props} />}>
//       <Drawer.Screen 
//         name="HAVEN" 
//         component={BottomNavigator} // Ensure BottomNavigator is passed correctly
//         options={{
//           headerShown: false,
          
//         }}
//       />
//       <Drawer.Screen name="FAQs" component={FAQsPage} />
//       <Drawer.Screen name="Profile" component={ProfileScreen}/>
//       <Drawer.Screen name="AboutUs" component={AboutUsPage} />
//       <Drawer.Screen name="SafetyInsider" component={SafetyInsiderPage}/>
//       <Drawer.Screen name="Settings" component={SettingsPage}/>
//       <Drawer.Screen name="UploadImage" component={UploadImagePage} /> 
//     </Drawer.Navigator>
//   );
// }

// function ProfileScreen() {
//   return (
//     <View style={styles.screen}>
//       <Text style={styles.profileHeader}>Detailed Profile</Text>
//       <Text style={styles.profileInfo}>Name: John Doe</Text>
//       <Text style={styles.profileInfo}>Email: johndoe@example.com</Text>
//       <Text style={styles.profileInfo}>Phone: +91 9876543210</Text>
//       <Text style={styles.profileInfo}>DOB: 01-01-1990</Text>
//       <Text style={styles.profileInfo}>Country: India</Text>
//       <Text style={styles.profileInfo}>State: Gujarat</Text>
//       <Text style={styles.profileInfo}>Pincode: 360001</Text>
//     </View>
//   );
// }

// // Styles
// const styles = StyleSheet.create({
//   drawerContainer: {
//     flex: 1,
//     padding: 20,
//     backgroundColor: '#fff',
//   },
//   profileSection: {
//     marginTop: 0,
//     alignItems: 'flex-start',
//   },
//   userIcon: {
//     marginBottom: 10,
//   },
//   profileDetailsContainer: {
//     alignItems: 'flex-start',
//     marginTop: 10,
//   },
//   profileName: {
//     fontSize: 25,
//     fontWeight: 'bold',
//     marginBottom: 10,
//   },
//   profileDetails: {
//     fontSize: 18,
//     color: '#666',
//     marginBottom: 5,
//   },
//   viewProfileButton: {
//     marginTop: 10,
//     backgroundColor: '#0a7ea4',
//     paddingVertical: 8,
//     paddingHorizontal: 20,
//     borderRadius: 5,
//   },
//   buttonText: {
//     color: '#fff',
//     fontSize: 14,
//     fontWeight: '600',
//     textAlign: 'center',
//   },
//   divider: {
//     height: 1,
//     backgroundColor: '#ccc',
//     marginVertical: 20,
//   },
//   menuContainer: {
//     marginTop: 130, // Reduced marginTop for menu items to move them up
//     justifyContent: 'center',
//   },
//   menuButton: {
//     backgroundColor: '#0a7ea4',
//     paddingVertical: 10,
//     paddingHorizontal: 15,
//     borderRadius: 5,
//     marginBottom: 10,
//   },
//   settingsLogoutContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginTop: 10,
//   },
//   settingsButton: {
//     padding: 10,
//   },
//   logoutButtonContainer: {
//     backgroundColor: '#FF4D4D',
//     paddingVertical: 10,
//     borderRadius: 5,
//     alignItems: 'center',
//     width: 280,
//   },
//   logoutButtonText: {
//     color: '#fff',
//     fontSize: 16,
//     fontWeight: '600',
//   },
//   footerLinksContainer: {
//     marginTop: 10, // Reduced top margin to make it visible
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   footerLink: {
//     fontSize: 14,
//     color: '#007BFF',
//     textDecorationLine: 'underline',
//   },
//   footerLinkDivider: {
//     fontSize: 14,
//     color: '#666',
//     marginHorizontal: 5,
//   },
//   screen: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#f5f5f5',
//   },
//   profileHeader: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     marginBottom: 20,
//   },
//   profileInfo: {
//     fontSize: 16,
//     marginBottom: 10,
//     color: '#333',
//   },
// });


import React, { useState } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { View, Text, TextInput, Alert, StyleSheet, TouchableOpacity, Modal, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import BottomNavigator from './BottomNavigator';
import FAQsPage from '../(tabs)/FAQsPage';
import AboutUsPage from '../(tabs)/AboutUsPage';
import SafetyInsiderPage from '../(tabs)/SafetyInsiderPage';
import SettingsPage from '../(tabs)/SettingsPage';
import UploadImagePage from '../(tabs)/UploadImagePage';
import { ScrollView } from 'react-native-gesture-handler';

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
        {/* Upload Image Button */}
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
          onPress={() => alert('Logged out')}
        >
          <Text style={styles.logoutButtonText}>Log Out</Text>
        </TouchableOpacity>
        
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
      <Drawer.Screen name="FAQs" component={FAQsPage} />
      <Drawer.Screen name="Profile" component={ProfileScreen}/>
      <Drawer.Screen name="AboutUs" component={AboutUsPage} />
      <Drawer.Screen name="SafetyInsider" component={SafetyInsiderPage}/>
      <Drawer.Screen name="Settings" component={SettingsPage}/>
      <Drawer.Screen name="UploadImage" component={UploadImagePage} /> 
    </Drawer.Navigator>
  );
}


const ProfileScreen = () => {
  const [isUpdateModalVisible, setUpdateModalVisible] = useState(false);
  const [isChangePasswordModalVisible, setChangePasswordModalVisible] =
    useState(false);
  const [isPersonalInfoModalVisible, setPersonalInfoModalVisible] =
    useState(false);

  const [email, setEmail] = useState("Priyuvmehta@gmail.com");
  const [phone, setPhone] = useState("50887508");
  const [password, setPassword] = useState("******");

  const [gender, setGender] = useState("Female");
  const [dob, setDob] = useState("1995-05-25");
  const [country, setCountry] = useState("India");
  const [state, setState] = useState("Maharashtra");
  const [city, setCity] = useState("Mumbai");
  const [pincode, setPincode] = useState("400001");

  const handleUpdate = () => {
    Alert.alert("Success", "Contact Info Updated");
    setUpdateModalVisible(false);
  };

  const handleChangePassword = () => {
    Alert.alert("Success", "Password Changed");
    setChangePasswordModalVisible(false);
  };

  const handlePersonalInfoUpdate = () => {
    Alert.alert("Success", "Personal Info Updated");
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

      {/* Delete Account */}
      <View style={styles.card}>
        <TouchableOpacity
          onPress={() => Alert.alert("Delete Account", "This feature is not implemented yet.")}
        >
          <Text style={styles.deleteText}>Delete my log-in account</Text>
          <Text style={styles.deleteDescription}>
            This will permanently remove your account from the app and web
            portal.
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
    marginVertical: -25,
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
  // profileInfo: {
  //   fontSize: 16,
  //   marginBottom: 10,
  //   color: '#333',
  // },
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
    padding: 5,
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
    backgroundColor: "#FF6B6B",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  avatarText: {
    fontSize: 24,
    color: "#fff",
    fontWeight: "bold",
   },
  // profileName: {
  //   fontSize: 20,
  //   fontWeight: "bold",
  // },
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
    backgroundColor: "#A0522D",
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  changeButton: {
    backgroundColor: "#A0522D",
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  // buttonText: {
  //   color: "#fff",
  //   fontWeight: "bold",
  // },
  deleteText: {
    fontSize: 16,
    color: "#FF6B6B",
    fontWeight: "bold",
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
  // input: {
  //   width: "100%",
  //   borderBottomWidth: 1,
  //   borderBottomColor: "#ddd",
  //   marginBottom: 15,
  //   fontSize: 16,
  // },
  saveButton: {
    backgroundColor: "#FF6B6B",
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
