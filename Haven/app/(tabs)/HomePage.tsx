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
            toValue: 2,
            duration: 1500,
            delay: delay,
            useNativeDriver: true,
          }),
          Animated.timing(animatedValue, {
            toValue: 1,
            duration: 0,
            useNativeDriver: true,
          }),
        ])
      ).start();
    };

    pulseAnimation(pulse1, 0);
    pulseAnimation(pulse2, 750);
  }, []);

  return (
    <View style={styles.container}>
      <View style={[styles.header, styles.shadow]}>
        <View style={styles.headerTextContainer}>
          <Text style={styles.welcomeText}>Welcome!</Text>
          <Text style={styles.userName}>Priyanshi</Text>
          <Text style={styles.greetingText}>Your Shield in Every Step</Text>
        </View>
      </View>

      <View style={[styles.actionContainer, styles.shadow]}>
        <View style={styles.sosContainer}>
          <View style={styles.radiationContainer}>
            <Animated.View
              style={[
                styles.radiationCircle,
                {
                  transform: [{ scale: pulse1 }],
                  opacity: pulse1.interpolate({
                    inputRange: [1, 2],
                    outputRange: [0.5, 0],
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
                    outputRange: [0.5, 0],
                  }),
                },
              ]}
            />
            <TouchableOpacity style={styles.sosButton} onPress={handleSOS}>
              <Text style={styles.sosText}>SOS</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.quickAccessContainer}>
          <TouchableOpacity
            style={styles.quickActionButton}
            onPress={() => navigation.navigate("Report")}
          >
            <Text style={styles.buttonText}>Report Incident</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.quickActionButton}
            onPress={() => navigation.navigate("UploadImage")}
          >
            <Text style={styles.buttonText}>Upload Location</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.quickActionButton}
            onPress={() => navigation.navigate("Contacts")}
          >
            <Text style={styles.buttonText}>Contacts</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.quickActionButton}
            onPress={() => navigation.navigate("Maps")}
          >
            <Text style={styles.buttonText}>Maps</Text>
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView style={[styles.safetyInsider, styles.shadow]}>
        <Text style={styles.sectionTitle}>Safety Insider</Text>
        <TouchableOpacity
          style={styles.insiderItem}
          onPress={() =>
            navigation.navigate("SafetyInsider", {articleTitle: "Heatwave Alert: Tips to Stay Hydrated",})
          }
        >
          <Text style={styles.insiderTitle}>
            Personal Safety
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
            Kidnapping
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
          <Text style={styles.insiderTitle}>Theft</Text>
          <Text style={styles.insiderDate}>Sep 08, 2024 • 3 min read</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#F2F4F3" },
  header: {
    padding: 20,
    backgroundColor: "#8B183F",
    borderRadius: 10,
    marginBottom: 20,
  },
  shadow: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
  },
  headerTextContainer: { alignItems: "flex-start" },
  welcomeText: { fontSize: 20, color: "#F2F4F3" },
  userName: { fontSize: 24, fontWeight: "bold", color: "#F2F4F3" },
  greetingText: { fontSize: 16, color: "#F2F4F3", marginTop: 5 },
  actionContainer: {
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
  },
  sosContainer: { alignItems: "center", marginBottom: 50, marginTop: 20 },
  radiationContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 20,
  },
  radiationCircle: {
    position: "absolute",
    height: 100,
    width: 100,
    borderRadius: 60,
    backgroundColor: "rgba(255, 0, 0, 0.3)",
  },
  sosButton: {
    backgroundColor: "#AB0D0D",
    height: 100,
    width: 100,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  sosText: { color: "#F2F4F3", fontSize: 20, fontWeight: "bold" },
  quickAccessContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  quickActionButton: {
    backgroundColor: "#373F51",
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    width: "45%",
    marginBottom: 10,
  },
  buttonText: { color: "#FFFFFF", fontWeight: "bold" },
  safetyInsider: {
    marginTop: 20,
    padding: 10,
    backgroundColor: "#373F51",
    borderRadius: 10,
    flex: 1,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#F2F4F3",
    marginBottom: 10,
  },
  insiderItem: {
    padding: 10,
    backgroundColor: "#8B183F",
    borderRadius: 10,
    marginBottom: 10,
  },
  insiderTitle: { fontSize: 16, fontWeight: "bold", color: "#F2F4F3" },
  insiderDate: { fontSize: 12, color: "#F2F4F3", marginTop: 5 },
});

export default HomeScreen;
