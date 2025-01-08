
import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Switch, Animated, Button } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const SettingsPage = () => {
  const [isLocationShared, setIsLocationShared] = useState(false);
  const [slideAnim] = useState(new Animated.Value(1000)); // Initial position (offscreen)
  const [modalContent, setModalContent] = useState("");

  const toggleLocationSharing = () => setIsLocationShared(!isLocationShared);

  const openSlidePanel = (content) => {
    setModalContent(content);
    Animated.timing(slideAnim, {
      toValue: 0, // Move panel to its final position
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const closeSlidePanel = () => {
    Animated.timing(slideAnim, {
      toValue: 1000, // Move panel offscreen
      duration: 300,
      useNativeDriver: true,
    }).start();
    setModalContent("");
  };

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Settings</Text>
      </View>

      {/* Profile Settings */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Profile Settings</Text>
        <TouchableOpacity style={styles.option} onPress={() => openSlidePanel("Edit your profile details.")}>
          <Text style={styles.optionText}>Edit Profile</Text>
          <MaterialIcons name="arrow-forward-ios" size={20} color="#6A4C42" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.option} onPress={() => openSlidePanel("Manage your emergency contacts.")}>
          <Text style={styles.optionText}>Emergency Contacts</Text>
          <MaterialIcons name="arrow-forward-ios" size={20} color="#6A4C42" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.option} onPress={() => openSlidePanel("Manage relationships with contacts.")}>
          <Text style={styles.optionText}>Manage Relationships</Text>
          <MaterialIcons name="arrow-forward-ios" size={20} color="#6A4C42" />
        </TouchableOpacity>
      </View>

      {/* Location Settings */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Location Settings</Text>
        <View style={styles.option}>
          <Text style={styles.optionText}>Share Live Location</Text>
          <Switch
            value={isLocationShared}
            onValueChange={toggleLocationSharing}
            trackColor={{ false: "#DDD", true: "#A0522D" }}
            thumbColor={isLocationShared ? "#FFF" : "#8B4513"}
          />
        </View>
        <TouchableOpacity style={styles.option} onPress={() => openSlidePanel("Set location update intervals.")}>
          <Text style={styles.optionText}>Update Location Interval</Text>
          <MaterialIcons name="arrow-forward-ios" size={20} color="#6A4C42" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.option} onPress={() => openSlidePanel("Adjust GPS sensitivity settings.")}>
          <Text style={styles.optionText}>GPS Sensitivity</Text>
          <MaterialIcons name="arrow-forward-ios" size={20} color="#6A4C42" />
        </TouchableOpacity>
      </View>

      {/* Safety Alerts */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Safety Alerts</Text>
        <TouchableOpacity style={styles.option} onPress={() => openSlidePanel("Customize your SOS alert sound.")}>
          <Text style={styles.optionText}>SOS Alert Sound</Text>
          <MaterialIcons name="arrow-forward-ios" size={20} color="#6A4C42" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.option} onPress={() => openSlidePanel("Enable emergency call shortcuts.")}>
          <Text style={styles.optionText}>Emergency Call Shortcut</Text>
          <MaterialIcons name="arrow-forward-ios" size={20} color="#6A4C42" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.option} onPress={() => openSlidePanel("Set your safe zone radius.")}>
          <Text style={styles.optionText}>Safe Zone Radius</Text>
          <MaterialIcons name="arrow-forward-ios" size={20} color="#6A4C42" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.option} onPress={() => openSlidePanel("View your alert history.")}>
          <Text style={styles.optionText}>Alert History</Text>
          <MaterialIcons name="arrow-forward-ios" size={20} color="#6A4C42" />
        </TouchableOpacity>
      </View>

      {/* Feedback */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Feedback</Text>
        <TouchableOpacity style={styles.option} onPress={() => openSlidePanel("Provide feedback about the app.")}>
          <Text style={styles.optionText}>Provide Feedback</Text>
          <MaterialIcons name="arrow-forward-ios" size={20} color="#6A4C42" />
        </TouchableOpacity>
      </View>

      {/* Slide Panel */}
      <Animated.View style={[styles.slidePanel, { transform: [{ translateY: slideAnim }] }]}>
        <View style={styles.slidePanelContent}>
          <Text style={styles.modalText}>{modalContent}</Text>
          <Button title="Close" color="#6A4C42" onPress={closeSlidePanel} />
        </View>
      </Animated.View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F3EDE2",
  },
  header: {
    paddingVertical: 20,
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#D3C4B4",
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#6A4C42",
  },
  section: {
    marginVertical: 15,
    paddingHorizontal: 15,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#6A4C42",
    marginBottom: 10,
  },
  option: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#D3C4B4",
  },
  optionText: {
    fontSize: 16,
    color: "#6A4C42",
  },
  slidePanel: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#FFF",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    padding: 20,
    elevation: 5,
  },
  slidePanelContent: {
    alignItems: "center",
  },
  modalText: {
    fontSize: 16,
    color: "#333",
    marginBottom: 20,
  },
});

export default SettingsPage;
