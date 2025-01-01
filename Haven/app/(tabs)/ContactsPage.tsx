import React from 'react';
import { FlatList, TouchableOpacity, Text, View, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ContactListPage = () => {
  const navigation = useNavigation();

  // Dummy contact data
  const contacts = [
    { id: '1', name: 'John Doe', phone: '1234567890', email: 'john@example.com' },
    { id: '2', name: 'Jane Smith', phone: '9876543210', email: 'jane@example.com' },
    { id: '3', name: 'Alice Johnson', phone: '5556789123', email: 'alice@example.com' },
  ];

  const handleContactPress = (contact) => {
    navigation.navigate('ContactDets', { contact }); // Pass contact data to details page
  };

  return (
    <FlatList
      data={contacts}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity style={styles.contactItem} onPress={() => handleContactPress(item)}>
          <Text style={styles.contactName}>{item.name}</Text>
          <Text style={styles.contactPhone}>{item.phone}</Text>
        </TouchableOpacity>
      )}
      contentContainerStyle={styles.listContainer}
    />
  );
};

const styles = StyleSheet.create({
  listContainer: {
    padding: 16,
  },
  contactItem: {
    padding: 16,
    marginBottom: 10,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    elevation: 1,
  },
  contactName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  contactPhone: {
    fontSize: 14,
    color: '#555',
  },
});

export default ContactListPage;
