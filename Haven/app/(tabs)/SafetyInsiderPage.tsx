import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const safetyTips = {
  weather: [
    "Stay hydrated during hot weather; carry water bottles.",
    "Avoid venturing out during heavy rains due to flooding risks.",
    "Wear light and breathable clothing during humid conditions."
  ],
  kidnapping: [
    "Stay in well-lit and populated areas.",
    "Avoid sharing your live location on public platforms.",
    "Have an emergency contact set up on your phone."
  ],
  theft: [
    "Avoid displaying expensive items like jewelry or gadgets in public.",
    "Keep your bags and belongings close, especially in crowded areas.",
    "Use secure locks for your home and vehicles."
  ]
};

const SafetyInsider = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Safety Insider: Mumbai</Text>
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
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5e4d3', // Light beige background
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#4e3629', // Dark brown header text
  },
  categoryContainer: {
    marginBottom: 20,
    backgroundColor: '#ffffff', // White background for boxes
    borderRadius: 8,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  category: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#5c3a2d', // Dark brown for category title
    borderBottomWidth: 1,
    borderBottomColor: '#d7b299', // Subtle light brown border
    paddingBottom: 5,
  },
  tipsContainer: {
    marginLeft: 10,
  },
  tip: {
    fontSize: 16,
    marginBottom: 8,
    color: '#4e3629', // Dark brown for tips
    lineHeight: 22,
  },
});

export default SafetyInsider;
