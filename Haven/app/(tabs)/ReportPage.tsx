import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Alert,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons"; // For icons
import { Menu, MenuItem, MenuDivider } from "react-native-material-menu"; // For menu implementation

const IncidentReporting = () => {
  const [incidentDescription, setIncidentDescription] = useState("");
  const [incidentLocation, setIncidentLocation] = useState("");
  const [contactPreference, setContactPreference] = useState("");
  const [reports, setReports] = useState([]); // State to store all submitted reports
  const [menuVisible, setMenuVisible] = useState(null); // To control which menu is visible
  const currentUser = "user123"; // Simulating the current logged-in user

  const handleSubmit = () => {
    if (!incidentDescription || !incidentLocation) {
      Alert.alert("Error", "Please fill in all the required fields.");
      return;
    }

    // Add the new report to the reports state
    const newReport = {
      id: reports.length + 1,
      description: incidentDescription,
      location: incidentLocation,
      contact: contactPreference,
      submittedBy: currentUser, // Track who submitted the report
      time: new Date().toLocaleString(), // Add timestamp for the report
    };
    setReports([newReport, ...reports]);

    // Clear the input fields
    setIncidentDescription("");
    setIncidentLocation("");
    setContactPreference("");

    Alert.alert(
      "Thank You",
      "Your incident report has been submitted successfully and is now visible to all users."
    );
  };

  const handleDelete = (reportId) => {
    // Filter out the report to delete
    const updatedReports = reports.filter((report) => report.id !== reportId);
    setReports(updatedReports);
  };

  const handleReport = (reportId) => {
    Alert.alert("Report Flagged", "This report has been flagged for review.");
  };

  const toggleMenu = (id) => {
    setMenuVisible((prev) => (prev === id ? null : id));
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Report an Incident</Text>

      {/* Form Section */}
      <Text style={styles.label}>Incident Description *</Text>
      <TextInput
        style={styles.textArea}
        placeholder="Describe the incident in detail..."
        value={incidentDescription}
        onChangeText={(text) => setIncidentDescription(text)}
        multiline
      />

      <Text style={styles.label}>Incident Location *</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter the location of the incident..."
        value={incidentLocation}
        onChangeText={(text) => setIncidentLocation(text)}
      />

      <Text style={styles.label}>Contact Preference (Optional)</Text>
      <TextInput
        style={styles.input}
        placeholder="Provide your email or phone (optional)..."
        value={contactPreference}
        onChangeText={(text) => setContactPreference(text)}
      />

      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitButtonText}>Submit Report</Text>
      </TouchableOpacity>

      {/* Report List Section */}
      {reports.length > 0 && (
        <>
          <Text style={styles.reportsHeader}>Recent Reports</Text>
          {reports.map((report) => (
            <View key={report.id} style={styles.reportCard}>
              <View style={styles.reportHeader}>
                <Text style={styles.reportTitle}>Anonymous</Text>

                {/* Three Dots Menu */}
                <Menu
                  visible={menuVisible === report.id}
                  anchor={
                    <TouchableOpacity onPress={() => toggleMenu(report.id)}>
                      <MaterialIcons name="more-vert" size={24} color="#333" />
                    </TouchableOpacity>
                  }
                  onRequestClose={() => setMenuVisible(null)}
                >
                  {/* Options */}
                  <MenuItem onPress={() => handleReport(report.id)}>
                    Report
                  </MenuItem>
                  {report.submittedBy === currentUser && (
                    <MenuItem onPress={() => handleDelete(report.id)}>
                      Delete
                    </MenuItem>
                  )}
                </Menu>
              </View>
              <Text style={styles.reportText}>
                <Text style={styles.reportLabel}>Description: </Text>
                {report.description}
              </Text>
              <Text style={styles.reportText}>
                <Text style={styles.reportLabel}>Location: </Text>
                {report.location}
              </Text>
              {report.contact ? (
                <Text style={styles.reportText}>
                  <Text style={styles.reportLabel}>Contact: </Text>
                  {report.contact}
                </Text>
              ) : null}
              <Text style={styles.reportTimestamp}>
                Submitted on: {report.time}
              </Text>
            </View>
          ))}
        </>
      )}
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: "white", // Charcoal for the app background
  },
  header: {
    fontSize: 28,
    fontWeight: "bold",
    color: "black", // White Smoke for header text
    textAlign: "center",
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: "500",
    color: "black", // White Smoke for input labels
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: "#8B183F", // Claret for the border
    borderRadius: 8,
    padding: 12,
    fontSize: 15,
    backgroundColor: "#F2F4F3", // White background for input boxes
    color: "#08090A", // Black text inside input
    marginBottom: 15,
  },
  textArea: {
    borderWidth: 1,
    borderColor: "#8B183F", // Claret for the border
    borderRadius: 8,
    padding: 12,
    fontSize: 15,
    backgroundColor: "#F2F4F3", // White background for text area
    color: "#08090A", // Black text inside text area
    marginBottom: 15,
    height: 100,
    textAlignVertical: "top",
  },
  submitButton: {
    backgroundColor: "#AB0D0D", // Tomato Red for buttons
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 20,
  },
  submitButtonText: {
    color: "#F2F4F3", // White Smoke for button text
    fontSize: 18,
    fontWeight: "bold",
  },
  reportsHeader: {
    fontSize: 22,
    fontWeight: "bold",
    color: "black", // White Smoke for section headers
    marginTop: 30,
    marginBottom: 15,
    textAlign: "center",
  },
  reportCard: {
    backgroundColor: "#373F51", // Claret for report cards
    borderRadius: 8,
    padding: 15,
    marginBottom: 15,
    shadowColor: "#000", // Shadow for cards
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  reportHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  reportTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#F2F4F3", // White Smoke for card titles
  },
  reportText: {
    fontSize: 15,
    color: "#F2F4F3", // White Smoke for card content
    marginBottom: 5,
  },
  reportLabel: {
    fontWeight: "bold",
    color: "#F2F4F3", // White Smoke for labels inside cards
  },
  reportTimestamp: {
    fontSize: 12,
    color: "#F2F4F3", // White Smoke for timestamps
    marginTop: 10,
    textAlign: "right",
  },
});

export default IncidentReporting;