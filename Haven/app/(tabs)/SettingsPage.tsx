import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Switch,
  TouchableOpacity,
  Alert,
  TextInput,
  Modal,
  FlatList,
} from "react-native";

const SettingsPage = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isNotificationsEnabled, setIsNotificationsEnabled] = useState(true);
  const [feedbackModalVisible, setFeedbackModalVisible] = useState(false);
  const [feedbackHistoryVisible, setFeedbackHistoryVisible] = useState(false);
  const [starRating, setStarRating] = useState(0);
  const [suggestion, setSuggestion] = useState("");
  const [feedbackHistory, setFeedbackHistory] = useState([]);

  const toggleDarkMode = () => setIsDarkMode((prevState) => !prevState);
  const toggleNotifications = () =>
    setIsNotificationsEnabled((prevState) => !prevState);

  const handleLocationUpdateInterval = () => {
    Alert.alert(
      "Set Location Update Interval",
      "Choose the time interval for sending location updates to your emergency contacts.",
      [
        { text: "5 minutes", onPress: () => console.log("5 minutes selected") },
        { text: "15 minutes", onPress: () => console.log("15 minutes selected") },
        { text: "30 minutes", onPress: () => console.log("30 minutes selected") },
        { text: "Cancel", style: "cancel" },
      ]
    );
  };

  const handleLogout = () => {
    Alert.alert("Logout", "Are you sure you want to logout?", [
      { text: "Cancel", style: "cancel" },
      { text: "Logout", onPress: () => console.log("Logged out") },
    ]);
  };

  const handleDeleteProfile = () => {
    Alert.alert(
      "Delete Profile",
      "Are you sure you want to delete your profile? This action cannot be undone.",
      [
        { text: "Cancel", style: "cancel" },
        { text: "Delete", onPress: () => console.log("Profile deleted") },
      ]
    );
  };

  const handleFeedbackSubmit = () => {
    if (starRating === 0 || suggestion.trim() === "") {
      Alert.alert("Error", "Please provide a rating and suggestion.");
      return;
    }

    const newFeedback = {
      id: feedbackHistory.length + 1,
      rating: starRating,
      suggestion,
    };
    setFeedbackHistory((prevHistory) => [...prevHistory, newFeedback]);
    setStarRating(0);
    setSuggestion("");
    setFeedbackModalVisible(false);
    Alert.alert("Thank You", "Your feedback has been submitted.");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Settings</Text>

      {/* Notifications Toggle */}
      <View style={styles.settingItem}>
        <Text style={styles.settingText}>Enable Notifications</Text>
        <Switch
          value={isNotificationsEnabled}
          onValueChange={toggleNotifications}
          trackColor={{ false: "#D3D3D3", true: "#8B4513" }}
          thumbColor={isNotificationsEnabled ? "#FFF" : "#8B4513"}
        />
      </View>

      {/* Location Update Interval */}
      <TouchableOpacity
        style={styles.actionButton}
        onPress={handleLocationUpdateInterval}
      >
        <Text style={styles.buttonText}>Set Location Update Interval</Text>
      </TouchableOpacity>

      {/* Feedback Option */}
      <TouchableOpacity
        style={styles.actionButton}
        onPress={() => setFeedbackModalVisible(true)}
      >
        <Text style={styles.buttonText}>Give Feedback</Text>
      </TouchableOpacity>

      {/* Feedback History */}
      <TouchableOpacity
        style={styles.actionButton}
        onPress={() => setFeedbackHistoryVisible(true)}
      >
        <Text style={styles.buttonText}>View Feedback History</Text>
      </TouchableOpacity>

      {/* Logout */}
      <TouchableOpacity style={styles.actionButton} onPress={handleLogout}>
        <Text style={styles.buttonText}>Logout</Text>
      </TouchableOpacity>

      {/* Delete Profile */}
      <TouchableOpacity
        style={[styles.actionButton, styles.deleteButton]}
        onPress={handleDeleteProfile}
      >
        <Text style={[styles.buttonText, styles.deleteText]}>Delete Profile</Text>
      </TouchableOpacity>

      {/* Footer Links */}
      <View style={styles.footerLinksContainer}>
        <TouchableOpacity onPress={() => alert("Privacy Policy")}>
          <Text style={styles.footerLink}>Privacy Policy</Text>
        </TouchableOpacity>
        <Text style={styles.footerLinkDivider}> | </Text>
        <TouchableOpacity onPress={() => alert("Terms and Conditions")}>
          <Text style={styles.footerLink}>Terms and Conditions</Text>
        </TouchableOpacity>
      </View>

      {/* Feedback Modal */}
      <Modal
        visible={feedbackModalVisible}
        animationType="slide"
        onRequestClose={() => setFeedbackModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <Text style={styles.modalHeader}>Give Feedback</Text>
          <Text style={styles.modalText}>Rate the App:</Text>
          <View style={styles.starContainer}>
            {[1, 2, 3, 4, 5].map((star) => (
              <TouchableOpacity
                key={star}
                onPress={() => setStarRating(star)}
              >
                <Text
                  style={[
                    styles.star,
                    starRating >= star ? styles.starSelected : null,
                  ]}
                >
                  ★
                </Text>
              </TouchableOpacity>
            ))}
          </View>
          <TextInput
            style={styles.input}
            placeholder="Leave your suggestion here..."
            value={suggestion}
            onChangeText={setSuggestion}
          />
          <TouchableOpacity
            style={styles.actionButton}
            onPress={handleFeedbackSubmit}
          >
            <Text style={styles.buttonText}>Submit Feedback</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.actionButton, styles.closeButton]}
            onPress={() => setFeedbackModalVisible(false)}
          >
            <Text style={styles.buttonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </Modal>

      {/* Feedback History Modal */}
      <Modal
        visible={feedbackHistoryVisible}
        animationType="slide"
        onRequestClose={() => setFeedbackHistoryVisible(false)}
      >
        <View style={styles.modalContainer}>
          <Text style={styles.modalHeader}>Feedback History</Text>
          <FlatList
            data={feedbackHistory}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <View style={styles.feedbackItem}>
                <Text style={styles.feedbackText}>
                  Rating: {"★".repeat(item.rating)}
                </Text>
                <Text style={styles.feedbackText}>Suggestion: {item.suggestion}</Text>
              </View>
            )}
          />
          <TouchableOpacity
            style={[styles.actionButton, styles.closeButton]}
            onPress={() => setFeedbackHistoryVisible(false)}
          >
            <Text style={styles.buttonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#FAF3E0",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    color: "#8B4513",
    marginBottom: 20,
  },
  settingItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#D3D3D3",
  },
  actionButton: {
    backgroundColor: "#8B4513",
    paddingVertical: 12,
    marginTop: 20,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  deleteButton: {
    backgroundColor: "#A52A2A",
  },
  deleteText: {
    color: "#FFF",
  },
  footerLinksContainer: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  footerLink: {
    fontSize: 14,
    color: "#007BFF",
    textDecorationLine: "underline",
  },
  footerLinkDivider: {
    fontSize: 14,
    color: "#666",
    marginHorizontal: 5,
  },
  modalContainer: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    backgroundColor: "#FAF3E0",
  },
  modalHeader: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    color: "#8B4513",
  },
  modalText: {
    fontSize: 18,
    marginBottom: 10,
    color: "#4F4F4F",
  },
  starContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 20,
  },
  star: {
    fontSize: 32,
    color: "#D3D3D3",
    marginHorizontal: 5,
  },
  starSelected: {
    color: "#FFD700",
  },
  input: {
    height: 100,
    borderColor: "#D3D3D3",
    borderWidth: 1,
    borderRadius: 8,
    padding: 10, 
    marginBottom: 20, 
    textAlignVertical: "top", 
    backgroundColor: "#FFF", 
  }, 
  feedbackItem: { 
    padding: 15, 
    borderBottomWidth: 1, 
    borderBottomColor: "#D3D3D3", 
  }, 
  feedbackText: { 
    fontSize: 16, 
    color: "#4F4F4F", 
  }, closeButton: { 
    backgroundColor: "#8B4513", 
    marginTop: 10, 
  }, 
});

export default SettingsPage;