import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SafetyInsiderPage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Safety Insider</Text>
      <Text style={styles.content}>Here is the content of Safety Insider Page.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  content: {
    fontSize: 16,
    color: '#555',
    marginTop: 10,
  },
});

export default SafetyInsiderPage;
