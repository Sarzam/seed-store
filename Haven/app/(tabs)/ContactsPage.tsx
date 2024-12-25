import React from 'react';
import { View, Text, Button, FlatList, StyleSheet, Alert } from 'react-native';

const EmergencyContacts = () => {
  // Predefined static contacts
  const contacts = [
    { id: '1', name: 'John Doe', phone: '+1234567890' },
    { id: '2', name: 'Jane Smith', phone: '+0987654321' },
    { id: '3', name: 'Alice Johnson', phone: '+1122334455' },
  ];

  // Function to send an alert to all contacts
  const sendAlert = () => {
    Alert.alert(
      'Alert Sent',
      `Alerts have been sent to the following numbers:\n${contacts
        .map((contact) => `${contact.name} (${contact.phone})`)
        .join('\n')}`
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Emergency Contacts</Text>

      {/* List of Static Contacts */}
      <FlatList
        data={contacts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.contactItem}>
            <Text style={styles.contactText}>
              {item.name} ({item.phone})
            </Text>
          </View>
        )}
      />

      {/* Button to Send Alerts */}
      <View style={styles.alertButtonContainer}>
        <Button title="Send Alert to All Contacts" onPress={sendAlert} color="red" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  contactItem: {
    padding: 10,
    marginVertical: 5,
    backgroundColor: '#f9f9f9',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  contactText: {
    fontSize: 16,
  },
  alertButtonContainer: {
    marginTop: 20,
  },
});

export default EmergencyContacts;

