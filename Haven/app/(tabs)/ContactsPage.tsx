import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Alert,
  Modal,
  TextInput,
} from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Icon from "react-native-vector-icons/MaterialIcons";

const Stack = createStackNavigator();

const EmergencyContacts = ({ navigation }) => {
  const [contacts, setContacts] = useState([
    { id: "1", name: "Priyanshi", phone: "+91 XXXXXXXX", location: "8km away" },
    { id: "2", name: "Misbah", phone: "+91 XXXXXXXX", location: "12km away" },
    { id: "3", name: "Vishwa", phone: "+91 XXXXXXXX", location: "15km away" },
  ]);
  const [modalVisible, setModalVisible] = useState(false);
  const [newContact, setNewContact] = useState({
    name: "",
    phone: "",
    location: "",
  });

  const deleteContact = (id) => {
    setContacts((prevContacts) => prevContacts.filter((contact) => contact.id !== id));
    Alert.alert("Deleted", "Contact has been deleted!");
  };

  const addContact = () => {
    if (!newContact.name || !newContact.phone || !newContact.location) {
      Alert.alert("Error", "Please fill all fields.");
      return;
    }
    setContacts((prevContacts) => [
      ...prevContacts,
      { id: Math.random().toString(), ...newContact },
    ]);
    setNewContact({ name: "", phone: "", location: "" });
    setModalVisible(false);
    Alert.alert("Success", "Contact added successfully!");
  };

  return (
    <View style={styles.container}>

      <FlatList
        data={contacts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.contactItem}
            onPress={() =>
              navigation.navigate("ContactDetails", {
                contact: item,
                deleteContact,
              })
            }
          >
            <Text style={styles.contactText}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />

      <TouchableOpacity
        style={styles.addContactButton}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.addContactButtonText}>Add Contact</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.alertAllButton}
        onPress={() => Alert.alert("Alert", "Alert sent to all contacts!")}
      >
        <Text style={styles.alertAllButtonText}>Send Alert to All Contacts</Text>
      </TouchableOpacity>

      <Modal
        visible={modalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalHeader}>Add Contact</Text>
            <TextInput
              style={styles.input}
              placeholder="Name"
              value={newContact.name}
              onChangeText={(text) => setNewContact({ ...newContact, name: text })}
            />
            <TextInput
              style={styles.input}
              placeholder="Phone Number"
              keyboardType="phone-pad"
              value={newContact.phone}
              onChangeText={(text) => setNewContact({ ...newContact, phone: text })}
            />
            <TextInput
              style={styles.input}
              placeholder="Location"
              value={newContact.location}
              onChangeText={(text) => setNewContact({ ...newContact, location: text })}
            />
            <View style={styles.modalButtonsContainer}>
              <TouchableOpacity style={styles.modalButton} onPress={addContact}>
                <Text style={styles.modalButtonText}>Save</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.modalButton, styles.modalCancelButton]}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.modalButtonText}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const ContactDetails = ({ route, navigation }) => {
  const { contact, deleteContact } = route.params;

  return (
    <View style={styles.detailContainer}>
      <View style={styles.headerContainer}>
        <Icon name="person" size={60} color="#333" />
        <View style={styles.contactInfo}>
          <Text style={styles.contactName}>{contact.name}</Text>
          <Text style={styles.contactPhone}>{contact.phone}</Text>
          <Text style={styles.contactLocation}>{contact.location}</Text>
        </View>
      </View>

      <Text style={styles.detailText}>
        Image clicked 5 seconds ago, detected to be at location X.
      </Text>
      <Text style={styles.detailText}>Last updated Data radius: 50km</Text>
      <Text style={styles.detailText}>Current Status: Offline</Text>

      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.sendAlertButton}>
          <Text style={styles.sendAlertText}>Send Alert</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={styles.closeButton}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.closeButtonText}>Close</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.deleteButton}
        onPress={() => {
          deleteContact(contact.id);
          navigation.goBack();
        }}
      >
        <Text style={styles.deleteButtonText}>Delete Contact</Text>
      </TouchableOpacity>
    </View>
  );
};

export default function App() {
  return (
    
      <Stack.Navigator>
        <Stack.Screen
          name="EmergencyContacts"
          component={EmergencyContacts}
          options={{
            headerStyle:{
              backgroundColor: '#373F51',
            },
            headerTintColor: '#fff',
            headerTitle: 'Emergency Contacts',
            headerTitleStyle: {fontWeight: 'bold',marginLeft: 90},
          }}
        />
        <Stack.Screen
          name="ContactDetails"
          component={ContactDetails}
          options={{
            headerStyle:{
              backgroundColor: '#373F51',
            },
            headerTintColor: '#fff',
            headerTitle: 'Contact Details',
            headerTitleStyle: {fontWeight: 'bold',marginLeft: 80},
          }}
        />
      </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f8f8f8",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  contactItem: {
    padding: 15,
    backgroundColor: "#fff",
    borderRadius: 5,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 2,
  },
  contactText: {
    fontSize: 18,
  },
  addContactButton: {
    padding: 15,
    backgroundColor: "#373F51",
    borderRadius: 5,
    marginBottom: 10,
  },
  addContactButtonText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 16,
  },
  alertAllButton: {
    padding: 15,
    backgroundColor: "#8B183F",
    borderRadius: 5,
  },
  alertAllButtonText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 16,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalContent: {
    width: "80%",
    backgroundColor: "#fff",
    borderRadius: 5,
    padding: 20,
    alignItems: "center",
  },
  modalHeader: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  modalButtonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  modalButton: {
    flex: 1,
    padding: 10,
    margin: 5,
    backgroundColor: "#007BFF",
    borderRadius: 5,
  },
  modalButtonText: {
    color: "#fff",
    textAlign: "center",
  },
  modalCancelButton: {
    backgroundColor: "#FF6347",
  },
  detailContainer: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f8f8f8",
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  contactInfo: {
    marginLeft: 10,
  },
  contactName: {
    fontSize: 24,
    fontWeight: "bold",
  },
  contactPhone: {
    fontSize: 18,
    color: "#333",
  },
  contactLocation: {
    fontSize: 16,
    color: "#777",
  },
  detailText: {
    fontSize: 16,
    marginVertical: 5,
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 20,
  },
  sendAlertButton: {
    padding: 10,
    backgroundColor: "#8B183F",
    borderRadius: 5,
    flex: 1,
  },
  sendAlertText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 16,
  },
  micButton: {
    backgroundColor: "#373F51",
    padding: 10,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  deleteButton: {
    padding: 10,
    backgroundColor: "#AB0D0D",
    borderRadius: 5,
    marginVertical: 20,
    marginTop:330,
  },
  deleteButtonText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 16,
  },
  closeButton: {
    padding: 10,
    backgroundColor: "#373F51",
    borderRadius: 5,
  },
  closeButtonText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 16,
  },
});
