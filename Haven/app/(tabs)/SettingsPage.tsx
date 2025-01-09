import React, { useState } from "react";
import { 
  View, 
  Text, 
  StyleSheet, 
  TouchableOpacity, 
  ScrollView, 
  Switch, 
  Animated, 
  Button 
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import Slider from '@react-native-community/slider';
import { useNavigation } from '@react-navigation/native';

const SettingsPage = () => {
  const navigation = useNavigation();  // Initialize navigation

  const [isContactAccessAllowed, setIsContactAccessAllowed] = useState(false);
  const [isLocationShared, setIsLocationShared] = useState(false);
  const [isCameraEnabled, setIsCameraEnabled] = useState(false);
  const [isMicrophoneEnabled, setIsMicrophoneEnabled] = useState(false);
  const [isGalleryAccessAllowed, setIsGalleryAccessAllowed] = useState(false);
  const [fontSize, setFontSize] = useState(16);
  const [slideAnim, setSlideAnim] = useState(new Animated.Value(1000)); // Initial position (offscreen)
  const [modalVisible, setModalVisible] = useState(false);
  const [option1Enabled, setOption1Enabled] = useState(false);
  const [option2Enabled, setOption2Enabled] = useState(false);
  const [option3Enabled, setOption3Enabled] = useState(false);

  const toggleContactAccess = () => setIsContactAccessAllowed(!isContactAccessAllowed);
  const toggleLocationSharing = () => setIsLocationShared(!isLocationShared);
  const toggleCamera = () => setIsCameraEnabled(!isCameraEnabled);
  const toggleMicrophone = () => setIsMicrophoneEnabled(!isMicrophoneEnabled);
  const toggleGalleryAccess = () => setIsGalleryAccessAllowed(!isGalleryAccessAllowed);

  const toggleOption1 = () => setOption1Enabled(!option1Enabled);
  const toggleOption2 = () => setOption2Enabled(!option2Enabled);
  const toggleOption3 = () => setOption3Enabled(!option3Enabled);

  const openSlidePanel = () => {
    Animated.timing(slideAnim, {
      toValue: 0, 
      duration: 300,
      useNativeDriver: true,
    }).start();
    setModalVisible(true);
  };

  const closeSlidePanel = () => {
    Animated.timing(slideAnim, {
      toValue: 1000, 
      duration: 300,
      useNativeDriver: true,
    }).start();
    setModalVisible(false);
  };

  return (
    <ScrollView style={styles.container}>


      {/* Profile Settings */}
      {/* <View style={styles.section}>
        <Text style={[styles.sectionTitle, { fontSize }]}>Profile Settings</Text>
        <TouchableOpacity 
          style={styles.option} 
        >
          <Text style={[styles.optionText, { fontSize }]}>Edit Profile</Text>
          <MaterialIcons name="arrow-forward-ios" size={20} color="#6A4C42" />
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.option} 
          onPress={openSlidePanel} // Open the slide panel when clicked
        >
          <Text style={[styles.optionText, { fontSize }]}>Allow Contact Access</Text>
          <MaterialIcons name="arrow-forward-ios" size={20} color="#6A4C42" />
        </TouchableOpacity>
      </View> */}

      {/* Permissions */}
      <View style={styles.section}>
        <Text style={[styles.sectionTitle, { fontSize }]}>Permissions</Text>
        <View style={styles.option}>
          <Text style={[styles.optionText, { fontSize }]}>Allow Contact Access</Text>
          <Switch
            value={isContactAccessAllowed}
            onValueChange={toggleContactAccess}
            trackColor={{ false: "#DDD", true: "#A0522D" }}
            thumbColor={isContactAccessAllowed ? "#FFF" : "#8B4513"}
          />
        </View>
      </View>
      <View style={styles.section}>
        <Text style={[styles.sectionTitle, { fontSize }]}>Permissions</Text>
        <View style={styles.option}>
          <Text style={[styles.optionText, { fontSize }]}>Enable Camera</Text>
          <Switch
            value={isCameraEnabled}
            onValueChange={toggleCamera}
            trackColor={{ false: "#DDD", true: "#A0522D" }}
            thumbColor={isCameraEnabled ? "#FFF" : "#8B4513"}
          />
        </View>
        <View style={styles.option}>
          <Text style={[styles.optionText, { fontSize }]}>Enable Microphone</Text>
          <Switch
            value={isMicrophoneEnabled}
            onValueChange={toggleMicrophone}
            trackColor={{ false: "#DDD", true: "#A0522D" }}
            thumbColor={isMicrophoneEnabled ? "#FFF" : "#8B4513"}
          />
        </View>
        <View style={styles.option}>
          <Text style={[styles.optionText, { fontSize }]}>Allow Gallery Access</Text>
          <Switch
            value={isGalleryAccessAllowed}
            onValueChange={toggleGalleryAccess}
            trackColor={{ false: "#DDD", true: "#A0522D" }}
            thumbColor={isGalleryAccessAllowed ? "#FFF" : "#8B4513"}
          />
        </View>
      </View>

      {/* Font Size */}
      <View style={styles.section}>
        <Text style={[styles.sectionTitle, { fontSize }]}>Font Size</Text>
        <View style={styles.sliderContainer}>
          <Slider
            style={{ width: "100%", height: 40 }}
            minimumValue={12}
            maximumValue={24}
            step={1}
            value={fontSize}
            onValueChange={(value) => setFontSize(value)}
            minimumTrackTintColor="#A0522D"
            maximumTrackTintColor="#D3C4B4"
          />
          <Text style={[styles.optionText, { fontSize }]}>Current Font Size: {fontSize}</Text>
        </View>
      </View>

      {/* Location Settings */}
      <View style={styles.section}>
        <Text style={[styles.sectionTitle, { fontSize }]}>Location Settings</Text>
        <View style={styles.option}>
          <Text style={[styles.optionText, { fontSize }]}>Share Live Location</Text>
          <Switch
            value={isLocationShared}
            onValueChange={toggleLocationSharing}
            trackColor={{ false: "#DDD", true: "#A0522D" }}
            thumbColor={isLocationShared ? "#FFF" : "#8B4513"}
          />
        </View>
      </View>

      {/* Slide Panel (Sliding from right) */}
      {modalVisible && (
        <Animated.View style={[styles.slidePanel, { transform: [{ translateX: slideAnim }] }]}>
          <View style={styles.slidePanelContent}>
            <Text style={styles.modalText}>Choose Contact Access Option:</Text>
            
            <View style={styles.option}>
              <Text style={styles.optionText}>Allow All Contacts</Text>
              <Switch
                value={option1Enabled}
                onValueChange={toggleOption1}
                trackColor={{ false: "#DDD", true: "#A0522D" }}
                thumbColor={option1Enabled ? "#FFF" : "#8B4513"}
              />
            </View>
            <View style={styles.option}>
              <Text style={styles.optionText}>Allow Limited Contacts</Text>
              <Switch
                value={option2Enabled}
                onValueChange={toggleOption2}
                trackColor={{ false: "#DDD", true: "#A0522D" }}
                thumbColor={option2Enabled ? "#FFF" : "#8B4513"}
              />
            </View>
            <View style={styles.option}>
              <Text style={styles.optionText}>Don't Allow Contacts</Text>
              <Switch
                value={option3Enabled}
                onValueChange={toggleOption3}
                trackColor={{ false: "#DDD", true: "#A0522D" }}
                thumbColor={option3Enabled ? "#FFF" : "#8B4513"}
              />
            </View>
            
            <Button title="Close" color="#6A4C42" onPress={closeSlidePanel} />
          </View>
        </Animated.View>
      )}
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
  sliderContainer: {
    alignItems: "center",
  },
  slidePanel: {
    position: "absolute",
    top: 0,
    right: 0,
    height: "100%",
    backgroundColor: "#FFF",
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    padding: 20,
    elevation: 5,
    width: 300,  // Set width for the slide-in panel
  },
  slidePanelContent: {
    alignItems: "flex-start",
  },
  modalText: {
    fontSize: 16,
    color: "#333",
    marginBottom: 20,
  },
});
export default SettingsPage;