import React, { useState } from 'react';
import {
  View,
  Text,
  Button,
  Image,
  ActivityIndicator,
  StyleSheet,
  TouchableOpacity,
  TextInput
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';

const UploadImagePage = () => {
  const [image, setImage] = useState(null); // For storing the uploaded image
  const [loading, setLoading] = useState(false); // For showing processing status
  const [results, setResults] = useState([]); // Detected objects
  const [location, setLocation] = useState(''); // User-added location info
  const [predictedLocation, setPredictedLocation] = useState(''); // Predicted location info

  // Handle Image Upload
  const handleImageUpload = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
      processImage(result.assets[0].uri); // Trigger object detection and enhancement
    }
  };

  // Simulated Image Enhancement & Object Detection
  const processImage = async (uri) => {
    setLoading(true);
    
    // Simulated enhancement and detection
    setTimeout(() => {
      // Simulated enhancement: assume the image was enhanced
      setResults(['Tree', 'Building', 'Car']); // Simulated detected objects
      
      // Simulate comparison to predict location based on detected objects
      setPredictedLocation('123 Main St, Cityville');
      setLoading(false);
    }, 3000); // Simulated delay for processing
  };

  // Save/Contribute Functionality
  const handleSave = () => {
    console.log('Image, results, and location saved to database!');
  };

  // Share Functionality
  const handleShare = () => {
    console.log('Shared with emergency contacts!');
    // Simulated sharing with emergency contacts
    alert(`Sending the image and predicted location to emergency contacts: ${predictedLocation}`);
  };

  return (
    <View style={styles.container}>
      {/* Upload Section */}
      <Text style={styles.title}>Upload Image of Landmark</Text>
      <Button title="Upload Image" onPress={handleImageUpload} />

      {/* Preview Area */}
      {image && (
        <View style={styles.previewContainer}>
          <Text style={styles.subTitle}>Image Preview</Text>
          <Image source={{ uri: image }} style={styles.imagePreview} />
        </View>
      )}

      {/* Processing Status */}
      {loading && (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#007BFF" />
          <Text style={styles.processingText}>Detecting objects...</Text>
        </View>
      )}

      {/* Results Section */}
      {!loading && results.length > 0 && (
        <View style={styles.resultsContainer}>
          <Text style={styles.subTitle}>Detected Objects:</Text>
          {results.map((item, index) => (
            <Text key={index} style={styles.resultText}>
              - {item}
            </Text>
          ))}
        </View>
      )}

      {/* Predicted Location */}
      {!loading && predictedLocation && (
        <View style={styles.resultsContainer}>
          <Text style={styles.subTitle}>Predicted Location:</Text>
          <Text style={styles.resultText}>{predictedLocation}</Text>
        </View>
      )}

      {/* Location Feature */}
      {image && !loading && !predictedLocation && (
        <View style={styles.locationContainer}>
          <Text style={styles.subTitle}>Add Location (Optional):</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter location"
            value={location}
            onChangeText={(text) => setLocation(text)}
          />
        </View>
      )}

      {/* Action Buttons */}
      {image && !loading && (
        <View style={styles.actionButtons}>
          <TouchableOpacity style={styles.button} onPress={handleSave}>
            <Text style={styles.buttonText}>Open in Maps</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={handleShare}>
            <Text style={styles.buttonText}>Share with Contact</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default UploadImagePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f9f9f9',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
  },
  previewContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  subTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 10,
  },
  imagePreview: {
    width: 300,
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
  },
  loadingContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  processingText: {
    fontSize: 16,
    color: '#555',
    marginTop: 10,
  },
  resultsContainer: {
    marginTop: 20,
    paddingHorizontal: 10,
  },
  resultText: {
    fontSize: 14,
    color: '#333',
  },
  locationContainer: {
    marginTop: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginTop: 10,
  },
  actionButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 30,
  },
  button: {
    backgroundColor: '#007BFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
