import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';


export default function FAQsScreen() {
  return (
    <View style={styles.screen}>
      <Text>FAQs Screen</Text>
    </View>
  );
}
const styles=StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
      }
    })