import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

const safetyTips = {
  personalSafety: [
    "Carry a pepper spray or a personal alarm for safety.",
    "Trust your instincts; leave any place where you feel unsafe.",
    "Share your travel details with a trusted friend or family member.",
    "Avoid using headphones in unfamiliar areas, so you remain aware of your surroundings.",
  ],
  kidnapping: [
    "Stay in well-lit and populated areas.",
    "Avoid sharing your live location on public platforms.",
    "Have an emergency contact set up on your phone.",
  ],
  theft: [
    "Be aware of your surroundings, especially in crowded areas.",
    "Avoid storing all your valuables in one place; spread them out.",
    "In case of theft, immediately report it to the police and block any stolen credit or debit cards.",
    "Back up important data on your devices to prevent loss during theft.",
  ],
};

// Assuming the user's state is Maharashtra
const userState = "Maharashtra";

// Emergency numbers
const emergencyNumbers = {
  Maharashtra: {
    police: "100",
    ambulance: "108",
  },
  Gujarat: {
    police: "100",
    ambulance: "108",
  },
  Karnataka: {
    police: "100",
    ambulance: "108",
  },
  // Add more states and their numbers here as needed
};

const SafetyInsider = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        {Object.entries(safetyTips).map(([category, tips]) => (
          <View key={category} style={styles.categoryContainer}>
            <Text style={styles.category}>{category.toUpperCase()}</Text>
            <View style={styles.tipsContainer}>
              {Array.isArray(tips) &&
                tips.map((tip, index) => (
                  <Text key={index} style={styles.tip}>
                    • {tip}
                  </Text>
                ))}
            </View>
          </View>
        ))}

        {/* Emergency Numbers Section */}
        <View style={[styles.emergencySection, { marginTop: 15 }]}>
          <Text style={styles.emergencyHeader}>Emergency Numbers</Text>
          <Text style={styles.stateName}>{userState}</Text>

          <View style={styles.numbersContainer}>
            <View style={styles.numberBox}>
              <Text style={styles.numberTitle}>Ambulance</Text>
              <Text style={styles.numberValue}>
                {emergencyNumbers[userState].ambulance}
              </Text>
            </View>
            <View style={styles.numberBox}>
              <Text style={styles.numberTitle}>Police</Text>
              <Text style={styles.numberValue}>
                {emergencyNumbers[userState].police}
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#373F51", // Deep grayish blue for the background
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    color: "white", // Bold dark red for the header text
  },
  categoryContainer: {
    marginBottom: 15, // Reduced margin between tips sections
    backgroundColor: "#ffffff", // White background for boxes
    borderRadius: 8,
    padding: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  category: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#8B183F", // Dark pinkish red for category title
    borderBottomWidth: 1,
    borderBottomColor: "#AB0D0D", // Dark red for the bottom border
    paddingBottom: 5,
  },
  tipsContainer: {
    marginLeft: 10,
  },
  tip: {
    fontSize: 16,
    marginBottom: 8,
    color: "#373F51", // Deep grayish blue for tip text
    lineHeight: 22,
  },
  emergencySection: {
    padding: 20,
    backgroundColor: "#f9f9f9",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
    alignItems: "center", // Center the content
  },
  emergencyHeader: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#AB0D0D", // Dark red for emergency section header
    marginBottom: 10,
  },
  stateName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#8B183F", // Dark pinkish red for the state name
    marginBottom: 15,
  },
  numbersContainer: {
    flexDirection: "row", // Align boxes side by side
    justifyContent: "space-between",
    width: "100%",
  },
  numberBox: {
    flex: 1,
    backgroundColor: "#AB0D0D", // Retained dark red background for the boxes
    padding: 15,
    marginHorizontal: 5, // Add spacing between boxes
    borderRadius: 8,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  numberTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
    color: "white", // White for number titles
  },
  numberValue: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white", // White for emergency numbers
  },
});

export default SafetyInsider;
