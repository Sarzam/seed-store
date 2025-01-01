import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Button,
  Image,
  ActivityIndicator,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Alert,
  Modal,
  FlatList,
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { Camera } from 'expo-camera';
import * as Sharing from 'expo-sharing';

const UploadImagePage = () => {
  const [images, setImages] = useState([]); // For storing multiple images
  const [loading, setLoading] = useState(false); // For showing processing status
  const [results, setResults] = useState([]); // Detected objects
  const [location, setLocation] = useState(''); // User-added location info
  const [predictedLocation, setPredictedLocation] = useState(''); // Predicted location info
  const [cameraPermission, setCameraPermission] = useState(false);
  const [galleryPermission, setGalleryPermission] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false); // For confirmation modal
  const [isCapturing, setIsCapturing] = useState(false); // For periodic capture
  const [userVerified, setUserVerified] = useState(false); // For user verification status
  const [userEmotion, setUserEmotion] = useState(''); // For detecting emotion

  // Request permissions
  const requestPermissions = async () => {
    const cameraStatus = await Camera.requestCameraPermissionsAsync();
    const galleryStatus = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (cameraStatus.status === 'granted') setCameraPermission(true);
    if (galleryStatus.status === 'granted') setGalleryPermission(true);

    if (cameraStatus.status !== 'granted' || galleryStatus.status !== 'granted') {
      Alert.alert('Permissions required', 'Camera and Gallery access are required.');
    }
  };

  const handleImageUpload = async () => {
    if (!galleryPermission && !cameraPermission) {
      Alert.alert('Permission Denied', 'Please grant camera and gallery access.');
      return;
    }
    setIsModalVisible(true); // Show modal for choosing upload option
  };

  const handleChooseFromGallery = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImages((prevImages) => [...prevImages, result.assets[0].uri]);
      processImage(result.assets[0].uri); // Trigger object detection and enhancement
    }
    setIsModalVisible(false); // Close modal
  };

  const handleCaptureFromCamera = async () => {
    if (!cameraPermission) {
      Alert.alert('Permission Denied', 'Please grant camera access.');
      return;
    }

    const result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setImages((prevImages) => [...prevImages, result.assets[0].uri]);
      processImage(result.assets[0].uri); // Trigger object detection and enhancement
    }
    setIsModalVisible(false); // Close modal
  };

  // Simulated Image Enhancement & Object Detection
  const processImage = async (uri) => {
    setLoading(true);

    // Simulated enhancement and detection
    setTimeout(() => {
      setResults(['Tree', 'Building', 'Car']); // Simulated detected objects
      setPredictedLocation('123 Main St, Cityville');
      setLoading(false);
    }, 3000); // Simulated delay for processing
  };

  // Location validation and suggestion
  const handleLocationChange = async (text) => {
    setLocation(text);
    if (text) {
      // Fetch location suggestions using Google Places API (or other API)
      setLocationSuggestions(['Suggested Location 1', 'Suggested Location 2']);
    } else {
      setLocationSuggestions([]);
    }
  };

  const handleSave = () => {
    console.log('Images, results, and location saved to database!');
  };

  const handleShare = async () => {
    if (await Sharing.isAvailableAsync()) {
      Sharing.shareAsync(images[0]); // Share the first image
    } else {
      alert(`Sharing image and predicted location: ${predictedLocation}`);
    }
  };

  useEffect(() => {
    requestPermissions();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Upload Image of Landmark</Text>
      <Button title="Upload Image" onPress={handleImageUpload} />

      <FlatList
        data={images}
        renderItem={({ item, index }) => (
          <View style={styles.previewContainer}>
            <Image source={{ uri: item }} style={styles.imagePreview} />
          </View>
        )}
        horizontal
        keyExtractor={(item, index) => index.toString()}
      />

      {loading && (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#007BFF" />
          <Text style={styles.processingText}>Detecting objects...</Text>
        </View>
      )}

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

      {!loading && predictedLocation && (
        <View style={styles.resultsContainer}>
          <Text style={styles.subTitle}>Predicted Location:</Text>
          <Text style={styles.resultText}>{predictedLocation}</Text>
        </View>
      )}

      {images.length > 0 && !loading && !predictedLocation && (
        <View style={styles.locationContainer}>
          <Text style={styles.subTitle}>Add Location (Optional):</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter location"
            value={location}
            onChangeText={handleLocationChange}
          />
        </View>
      )}

      <View style={styles.actionButtons}>
        <TouchableOpacity style={styles.button} onPress={handleSave}>
          <Text style={styles.buttonText}>Save</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleShare}>
          <Text style={styles.buttonText}>Share</Text>
        </TouchableOpacity>
      </View>

      {/* Modal for selecting image source */}
      <Modal
        visible={isModalVisible}
        onRequestClose={() => setIsModalVisible(false)}
        transparent
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>Choose Image Source</Text>
            <Button title="Choose Photo from Gallery" onPress={handleChooseFromGallery} />
            <Button title="Capture Image from Camera" onPress={handleCaptureFromCamera} />
            <Button title="Cancel" onPress={() => setIsModalVisible(false)} />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default UploadImagePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f9fa',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#007BFF',
  },
  previewContainer: {
    marginRight: 10,
  },
  imagePreview: {
    width: 100,
    height: 100,
    marginBottom: 10,
    borderRadius: 8,
    resizeMode: 'cover',
  },
  loadingContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  processingText: {
    fontSize: 16,
    marginTop: 10,
  },
  resultsContainer: {
    marginTop: 20,
  },
  subTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  resultText: {
    fontSize: 16,
  },
  locationContainer: {
    marginTop: 20,
  },
  input: {
    height: 40,
    borderColor: '#007BFF',
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
    marginTop: 10,
  },
  actionButtons: {
    marginTop: 30,
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: 300,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 8,
    alignItems: 'center',
  },
  modalText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});
