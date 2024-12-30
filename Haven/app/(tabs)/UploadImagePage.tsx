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
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { Camera } from 'expo-camera';

const UploadImagePage = () => {
  const [image, setImage] = useState(null); // For storing the uploaded image
  const [loading, setLoading] = useState(false); // For showing processing status
  const [results, setResults] = useState([]); // Detected objects
  const [location, setLocation] = useState(''); // User-added location info
  const [predictedLocation, setPredictedLocation] = useState(''); // Predicted location info
  const [cameraPermission, setCameraPermission] = useState(false);
  const [isCapturing, setIsCapturing] = useState(false); // For periodic capture
  const [galleryPermission, setGalleryPermission] = useState(false);
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
    if (!galleryPermission) {
      Alert.alert('Permission Denied', 'Please grant gallery access.');
      return;
    }
  
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
      setResults(['Tree', 'Building', 'Car']); // Simulated detected objects
      setPredictedLocation('123 Main St, Cityville');
      setLoading(false);
    }, 3000); // Simulated delay for processing
  };

  // Periodic photo capture
  const startPeriodicCapture = async () => {
    if (!cameraPermission) {
      Alert.alert('Please enable camera permissions to use this feature.');
      return;
    }

    setIsCapturing(true);

    const interval = setInterval(async () => {
      if (isCapturing) {
        console.log('Capturing front and rear camera photos...');

        // Simulate front camera capture (User verification)
        console.log('Front camera photo taken for user verification.');
        const verified = await verifyUser(); // Simulated user verification
        setUserVerified(verified);

        // Simulate rear camera capture (Emotion detection)
        console.log('Rear camera photo taken for emotion detection.');
        const emotion = await detectEmotion(); // Simulated emotion detection
        setUserEmotion(emotion);

        // Simulate rear camera capture for object detection
        console.log('Rear camera photo taken for surroundings detection.');
      } else {
        clearInterval(interval);
      }
    }, 5000); // Capture photos every 5 seconds
  };

  const stopPeriodicCapture = () => {
    setIsCapturing(false);
    Alert.alert('Periodic capture stopped.');
  };

  // Simulated user verification (e.g., comparing face or ID)
  const verifyUser = async () => {
    // Simulate user verification logic here
    return true; // Assuming user is verified
  };

  // Simulated emotion detection (e.g., analyzing user facial expressions)
  const detectEmotion = async () => {
    // Simulate emotion detection logic here
    return 'Fear'; // Example emotion detected
  };

  // Save/Contribute Functionality
  const handleSave = () => {
    console.log('Image, results, and location saved to database!');
  };

  // Share Functionality
  const handleShare = () => {
    console.log('Shared with emergency contacts!');
    alert(`Sending the image and predicted location to emergency contacts: ${predictedLocation}`);
  };

  useEffect(() => {
    requestPermissions();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Upload Image of Landmark</Text>
      <Button title="Upload Image" onPress={handleImageUpload} />

      {image && (
        <View style={styles.previewContainer}>
          <Text style={styles.subTitle}>Image Preview</Text>
          <Image source={{ uri: image }} style={styles.imagePreview} />
        </View>
      )}

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

      {userVerified && (
        <Text style={styles.userStatus}>User Verified Successfully</Text>
      )}

      {userEmotion && (
        <Text style={styles.emotionStatus}>Detected Emotion: {userEmotion}</Text>
      )}

      <View style={styles.actionButtons}>
        <Button
          title={isCapturing ? 'Stop Periodic Capture' : 'Start Periodic Capture'}
          onPress={isCapturing ? stopPeriodicCapture : startPeriodicCapture}
          color={isCapturing ? 'red' : 'green'}
        />
      </View>

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
    backgroundColor: '#f8f9fa',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  previewContainer: {
    alignItems: 'center',
    marginVertical: 10,
  },
  imagePreview: {
    width: 200,
    height: 200,
    borderRadius: 10,
  },
  loadingContainer: {
    alignItems: 'center',
    marginVertical: 10,
  },
  processingText: {
    fontSize: 16,
    marginTop: 10,
  },
  resultsContainer: {
    marginVertical: 10,
  },
  subTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  resultText: {
    fontSize: 16,
    marginLeft: 10,
  },
  locationContainer: {
    marginVertical: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginTop: 5,
  },
  actionButtons: {
    marginVertical: 10,
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginVertical: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  userStatus: {
    color: 'green',
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
  },
  emotionStatus: {
    color: 'red',
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
  },
});
