import React, { useRef, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Animated,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
  const navigation = useNavigation();
  const pulse1 = useRef(new Animated.Value(1)).current;
  const pulse2 = useRef(new Animated.Value(1)).current;

  const handleSOS = () => {
    console.log("SOS Alert Sent!");
  };

  useEffect(() => {
    const pulseAnimation = (animatedValue, delay = 0) => {
      Animated.loop(
        Animated.sequence([
          Animated.timing(animatedValue, {
            toValue: 2, // Scale up the circle
            duration: 1500,
            delay: delay,
            useNativeDriver: true,
          }),
          Animated.timing(animatedValue, {
            toValue: 1, // Reset to original size
            duration: 0,
            useNativeDriver: true,
          }),
        ])
      ).start();
    };

    pulseAnimation(pulse1, 0); // First pulse starts immediately
    pulseAnimation(pulse2, 750); // Second pulse starts half-way through
  }, []);

  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <View style={styles.headerTextContainer}>
          <Text style={styles.welcomeText}>Welcome!</Text>
          <Text style={styles.userName}>Priyanshi</Text>
          <Text style={styles.greetingText}>How is it going today?</Text>
        </View>
      </View>

      {/* SOS Button with Radiation Effect */}
      <View style={styles.actionContainer}>
        <View style={styles.sosContainer}>
          <View style={styles.radiationContainer}>
            <Animated.View
              style={[
                styles.radiationCircle,
                {
                  transform: [{ scale: pulse1 }],
                  opacity: pulse1.interpolate({
                    inputRange: [1, 2],
                    outputRange: [0.5, 0], // Fade out as it expands
                  }),
                },
              ]}
            />
            <Animated.View
              style={[
                styles.radiationCircle,
                {
                  transform: [{ scale: pulse2 }],
                  opacity: pulse2.interpolate({
                    inputRange: [1, 2],
                    outputRange: [0.5, 0], // Fade out as it expands
                  }),
                },
              ]}
            />
            <TouchableOpacity style={styles.sosButton} onPress={handleSOS}>
              <Text style={styles.sosText}>SOS</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Quick Actions */}
        <View style={styles.quickAccessContainer}>
          <TouchableOpacity style={styles.quickActionButton}>
            <Text style={styles.buttonText}>Report Incident</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.quickActionButton}>
            <Text style={styles.buttonText}>Upload Location</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.quickActionButton}>
            <Text style={styles.buttonText}>Contacts</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.quickActionButton}>
            <Text style={styles.buttonText}>Maps</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Safety Insider Section */}
      <ScrollView style={styles.safetyInsider}>
        <Text style={styles.sectionTitle}>Safety Insider</Text>
        <TouchableOpacity
          style={styles.insiderItem}
          onPress={() =>
            navigation.navigate("SafetyInsider", {
              articleTitle: "Heatwave Alert: Tips to Stay Hydrated",
            })
          }
        >
          <Text style={styles.insiderTitle}>
            Heatwave Alert: Tips to Stay Hydrated
          </Text>
          <Text style={styles.insiderDate}>Sep 10, 2024 • 1 min read</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.insiderItem}
          onPress={() =>
            navigation.navigate("SafetyInsider", {
              articleTitle: "Understanding Emergency Exits",
            })
          }
        >
          <Text style={styles.insiderTitle}>
            Understanding Emergency Exits
          </Text>
          <Text style={styles.insiderDate}>Sep 09, 2024 • 2 min read</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.insiderItem}
          onPress={() =>
            navigation.navigate("SafetyInsider", {
              articleTitle: "Uber Launches a Safety-Cam",
            })
          }
        >
          <Text style={styles.insiderTitle}>Uber Launches a Safety-Cam</Text>
          <Text style={styles.insiderDate}>Sep 08, 2024 • 3 min read</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1, padding: 20, backgroundColor: "#F2F4F3" 
  }, // White Smoke
  header: {
    padding: 20,
    backgroundColor: "#8B183F", // Claret
    borderRadius: 10,
    marginBottom: 20,
    elevation: 5, // Added shadow
  },
  headerTextContainer: { 
    alignItems: "flex-start" 
  },
  welcomeText: { 
    fontSize: 20, color: "#F2F4F3" 
  }, // White Smoke
  userName: { 
    fontSize: 24, fontWeight: "bold", color: "#F2F4F3" 
  }, // White Smoke
  greetingText: { 
    fontSize: 16, color: "#F2F4F3", marginTop: 5 
  }, // White Smoke

  actionContainer: {
    backgroundColor: "#FFFFFF", // White background for SOS & Quick Actions
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
    elevation: 5,
  },
  sosContainer: {
    alignItems: "center",
    marginBottom: 50,
    marginTop:20,
  },
  radiationContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 20,
  },
  radiationCircle: {
    position: "absolute",
    height: 100, // Starting size
    width: 100,
    borderRadius: 60,
    backgroundColor: "rgba(255, 0, 0, 0.3)", // Red with transparency
  },
  sosButton: {
    backgroundColor: "#AB0D0D", // Turkey Red
    height: 100, // Circular size
    width: 100, // Circular size
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    elevation: 6,
  },
  sosText: {
    color: "#F2F4F3",
    fontSize: 20,
    fontWeight: "bold",
  }, // White Smoke

  quickAccessContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  quickActionButton: {
    backgroundColor: "#373F51", // Charcoal
    padding: 10, // Reduced padding
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    width: "45%", // Smaller button
    marginBottom: 10,
    elevation: 4, // Subtle shadow for a modern look
  },
  buttonText: { 
    color: "#FFFFFF", fontWeight: "bold" 
  }, // White text for buttons

  safetyInsider: {
    marginTop: 20,
    padding: 10,
    backgroundColor: "#373F51", // Charcoal
    borderRadius: 10,
    flex: 1,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#F2F4F3",
    marginBottom: 10,
  }, // White Smoke
  insiderItem: {
    padding: 10,
    backgroundColor: "#8B183F", // Claret
    borderRadius: 10,
    marginBottom: 10,
    elevation: 2,
  },
  insiderTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#F2F4F3",
  }, // White Smoke
  insiderDate: {
    fontSize: 12,
    color: "#F2F4F3",
    marginTop: 5,
  }, // White Smoke
});

export default HomeScreen;
