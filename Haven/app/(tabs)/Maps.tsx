// import React, { useState } from "react";
// import {
//   View,
//   Text,
//   StyleSheet,
//   TouchableOpacity,
//   TextInput,
//   Linking,
//   Alert,
// } from "react-native";
// import MapView, { Marker } from "react-native-maps";
// import * as Location from "expo-location";

// const MapPage = () => {
//   const [region, setRegion] = useState({
//     latitude: 37.78825,
//     longitude: -122.4324,
//     latitudeDelta: 0.0922,
//     longitudeDelta: 0.0421,
//   });

//   const [manualLocation, setManualLocation] = useState("");

//   // Fetch Current Location
//   const fetchCurrentLocation = async () => {
//     try {
//       let { status } = await Location.requestForegroundPermissionsAsync();
//       if (status !== "granted") {
//         Alert.alert("Permission Denied", "Location permission is required.");
//         return;
//       }

//       let location = await Location.getCurrentPositionAsync({});
//       const { latitude, longitude } = location.coords;

//       setRegion({
//         ...region,
//         latitude,
//         longitude,
//       });
//     } catch (error) {
//       Alert.alert("Error", "Unable to fetch the current location.");
//     }
//   };

//   // Open Location in Google Maps
//   const openInGoogleMaps = () => {
//     const url = `https://www.google.com/maps?q=${region.latitude},${region.longitude}`;
//     Linking.canOpenURL(url)
//       .then((supported) => {
//         if (supported) {
//           Linking.openURL(url);
//         } else {
//           Alert.alert("Error", "Unable to open Google Maps.");
//         }
//       })
//       .catch((err) => console.error("An error occurred", err));
//   };

//   return (
//     <View style={styles.container}>
//       {/* Map View */}
//       <MapView
//         style={styles.map}
//         region={region}
//         onRegionChangeComplete={(newRegion) => setRegion(newRegion)}
//       >
//         <Marker
//           coordinate={{
//             latitude: region.latitude,
//             longitude: region.longitude,
//           }}
//           title="Selected Location"
//         />
//       </MapView>

//       {/* Location Actions */}
//       <View style={styles.actionContainer}>
//         {/* Search Location Input */}
//         <TextInput
//           style={styles.input}
//           placeholder="Search Location"
//           value={manualLocation}
//           onChangeText={(text) => setManualLocation(text)}
//         />

//         {/* Buttons */}
//         <View style={styles.buttonsContainer}>
//           <TouchableOpacity
//             style={styles.button}
//             onPress={fetchCurrentLocation}
//           >
//             <Text style={styles.buttonText}>Use My Current Location</Text>
//           </TouchableOpacity>

//           <TouchableOpacity style={styles.button} onPress={openInGoogleMaps}>
//             <Text style={styles.buttonText}>Open in Google Maps</Text>
//           </TouchableOpacity>
//         </View>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   map: {
//     flex: 1,
//   },
//   actionContainer: {
//     backgroundColor: "#fff",
//     padding: 15,
//     borderTopLeftRadius: 20,
//     borderTopRightRadius: 20,
//     position: "absolute",
//     bottom: 0,
//     width: "100%",
//   },
//   input: {
//     height: 50,
//     borderColor: "#ddd",
//     borderWidth: 1,
//     borderRadius: 8,
//     paddingHorizontal: 10,
//     marginBottom: 15,
//   },
//   buttonsContainer: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//   },
//   button: {
//     flex: 1,
//     backgroundColor: "#007BFF",
//     paddingVertical: 15,
//     borderRadius: 8,
//     alignItems: "center",
//     marginHorizontal: 5,
//   },
//   buttonText: {
//     color: "#fff",
//     fontSize: 16,
//     fontWeight: "bold",
//   },
// });

// export default MapPage;


import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";

const FAQ = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const faqs = [
    {
      title: "Getting Started",
      questions: [
        {
          question: "How do I download and install the Haven app?",
          answer:
            "Go to the App Store (iOS) or Google Play Store (Android). Search for “Haven – Your Safety Companion” and tap Install.",
        },
        {
          question: "How do I create an account?",
          answer:
            "Open the Haven app, tap Sign Up, and fill in your details. Accept the Terms & Conditions and tap Submit.",
        },
        {
          question: "Can I use the app without creating an account?",
          answer:
            "Some features, like emergency alerts and location sharing, require an account to work effectively.",
        },
      ],
    },
    {
      title: "Emergency Alerts",
      questions: [
        {
          question: "How do I send an emergency alert?",
          answer:
            "Open the Haven app, tap the Emergency Alert button, and the app will notify your emergency contacts with your location.",
        },
        {
          question: "Can I customize who gets my emergency alerts?",
          answer:
            "Yes. Go to Settings → Emergency Contacts and add or remove trusted contacts.",
        },
        {
          question: "What if I don’t have an internet connection?",
          answer:
            "Haven uses offline algorithms to approximate your location. Alerts will send as soon as you regain connectivity.",
        },
      ],
    },
    {
      title: "Location Tracking",
      questions: [
        {
          question: "How do I share my live location with someone?",
          answer:
            "Tap on the Live Location option in the app menu, select a contact, and share your location.",
        },
        {
          question: "Is my location data secure?",
          answer:
            "Yes, your data is encrypted and shared only with the contacts you specify. Haven prioritizes user privacy.",
        },
      ],
    },
    {
      title: "Uploading Pictures",
      questions: [
        {
          question: "How can I upload a picture from my gallery?",
          answer:
            "Go to the Profile page, tap on 'Upload Picture,' and select an image from your gallery. Once selected, the app will upload the picture to your profile.",
        },
        {
          question: "How can I take a new picture using the camera?",
          answer:
            "Go to the Profile page, tap on 'Upload Picture,' and select the 'Take Photo' option. Capture an image using your camera and upload it directly.",
        },
        {
          question: "Can I preview the image before uploading?",
          answer:
            "Yes. Once you select an image or take a photo, the app will display a preview. You can confirm or retake the picture before uploading.",
        },
      ],
    },
    {
      title: "Privacy Policy",
      questions: [
        {
          question: "What personal data does Haven collect?",
          answer:
            "Haven collects only the data necessary for its functionality, including location details, emergency contact information, and captured images.",
        },
        {
          question: "Why does Haven need access to my location?",
          answer:
            "Your location data is used for real-time updates, emergency alerts, and personalized safety insights.",
        },
        {
          question: "How is my data protected?",
          answer:
            "We use advanced encryption and robust security measures to safeguard your personal information.",
        },
        {
          question: "Does Haven share my data with third parties?",
          answer:
            "We do not share your data with third parties without explicit consent, except as required by law.",
        },
        {
          question: "Can I delete my data from Haven?",
          answer:
            "Yes, you can request data deletion through the app or by contacting our support team.",
        },
      ],
    },
  ];

  const filteredFAQs = faqs
    .map((section) => ({
      ...section,
      questions: section.questions.filter((q) =>
        q.question.toLowerCase().includes(searchQuery.toLowerCase())
      ),
    }))
    .filter(
      (section) =>
        section.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        section.questions.length > 0
    );

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>FAQs</Text>
      <TextInput
        style={styles.searchBar}
        placeholder="Search FAQs"
        value={searchQuery}
        onChangeText={(text) => setSearchQuery(text)}
      />

      {filteredFAQs.map((section, index) => (
        <View key={index}>
          <TouchableOpacity
            onPress={() =>
              setExpandedSection(expandedSection === section.title ? null : section.title)
            }
            style={styles.sectionHeader}
          >
            <Text style={styles.sectionTitle}>{section.title}</Text>
          </TouchableOpacity>
          {expandedSection === section.title &&
            section.questions.map((faq, qIndex) => (
              <View key={qIndex} style={styles.questionContainer}>
                <Text style={styles.question}>{faq.question}</Text>
                <Text style={styles.answer}>{faq.answer}</Text>
              </View>
            ))}
        </View>
      ))}

      {/* <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()} // Go back to the previous screen (Contacts)
      >
        <Text style={styles.buttonText}>Back to HomePage</Text>
      </TouchableOpacity> */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  searchBar: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
    marginBottom: 20,
  },
  sectionHeader: {
    backgroundColor: "#f7f7f7",
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#007bff",
  },
  questionContainer: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  question: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 5,
  },
  answer: {
    fontSize: 15,
    color: "#555",
  },
  backButton: {
    marginTop: 20,
    backgroundColor: "#007bff",
    padding: 10,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
});

export default FAQ;
