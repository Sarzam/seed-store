import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Button,
  Image,
  ActivityIndicator,
  StyleSheet,
  TouchableOpacity,
  Alert,
  Modal,
  FlatList,
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { Camera } from 'expo-camera';
import * as Sharing from 'expo-sharing';

const UploadImagePage = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState([]);
  const [predictedLocation, setPredictedLocation] = useState('');
  const [cameraPermission, setCameraPermission] = useState(false);
  const [galleryPermission, setGalleryPermission] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    requestPermissions();
  }, []);

  const requestPermissions = async () => {
    const cameraStatus = await Camera.requestCameraPermissionsAsync();
    const galleryStatus = await ImagePicker.requestMediaLibraryPermissionsAsync();

    setCameraPermission(cameraStatus.status === 'granted');
    setGalleryPermission(galleryStatus.status === 'granted');

    if (!cameraPermission || !galleryPermission) {
      Alert.alert('Permissions Required', 'Please allow camera and gallery access.');
    }
  };

  const handleImageUpload = () => {
    if (!cameraPermission && !galleryPermission) {
      Alert.alert('Permission Denied', 'Grant camera and gallery access.');
      return;
    }
    setIsModalVisible(true);
  };

  const handleChooseFromGallery = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsMultipleSelection: true,
      quality: 1,
    });

    if (!result.canceled) {
      const selectedImages = result.assets.map((asset) => asset.uri);
      setImages((prevImages) => [...prevImages, ...selectedImages]);
      selectedImages.forEach((uri) => processImage(uri));
    }
    setIsModalVisible(false);
  };

  const handleCaptureFromCamera = async () => {
    const result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setImages((prevImages) => [...prevImages, result.assets[0].uri]);
      processImage(result.assets[0].uri);
    }
    setIsModalVisible(false);
  };

  const processImage = async (uri) => {
    setLoading(true);
    setTimeout(() => {
      setResults(['Tree', 'Building', 'Car']);
      setPredictedLocation('123 Main St, Cityville');
      setLoading(false);
    }, 2000);
  };

  const handleRemoveImage = (index) => {
    setImages((prevImages) => prevImages.filter((_, i) => i !== index));
  };

  const handleClearAllImages = () => {
    setImages([]);
    setResults([]);
    setPredictedLocation('');
  };

  const handleSave = () => {
    console.log('Images, results, and location saved to database!');
  };

  const handleShare = async () => {
    if (await Sharing.isAvailableAsync()) {
      Sharing.shareAsync(images[0]);
    } else {
      alert(`Sharing image and predicted location: ${predictedLocation}`);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Landmark Image Uploader</Text>
      <TouchableOpacity style={styles.uploadButton} onPress={handleImageUpload}>
        <Text style={styles.uploadButtonText}>Upload Image</Text>
      </TouchableOpacity>

      <FlatList
        data={images}
        renderItem={({ item, index }) => (
          <View style={styles.imageContainer}>
            <Image source={{ uri: item }} style={styles.imagePreview} />
            <TouchableOpacity
              style={styles.removeButton}
              onPress={() => handleRemoveImage(index)}
            >
              <Text style={styles.removeButtonText}>x</Text>
            </TouchableOpacity>
          </View>
        )}
        horizontal
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={styles.imageList}
      />

      {images.length > 0 && (
        <TouchableOpacity style={styles.clearButton} onPress={handleClearAllImages}>
          <Text style={styles.clearButtonText}>Clear All</Text>
        </TouchableOpacity>
      )}

      {loading && (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#007BFF" />
          <Text style={styles.loadingText}>Processing Image...</Text>
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

      <View style={styles.actionButtons}>
        <TouchableOpacity style={styles.actionButton} onPress={handleSave}>
          <Text style={styles.actionButtonText}>Save</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton} onPress={handleShare}>
          <Text style={styles.actionButtonText}>Share</Text>
        </TouchableOpacity>
      </View>

      <Modal visible={isModalVisible} transparent animationType="fade">
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Select Image Source</Text>
            <TouchableOpacity onPress={handleChooseFromGallery}>
              <Text style={styles.modalOption}>Choose from Gallery</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleCaptureFromCamera}>
              <Text style={styles.modalOption}>Capture with Camera</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setIsModalVisible(false)}>
              <Text style={styles.modalOption}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1, padding: 20, backgroundColor: '#f5f5f5' 
  },
  title: { 
    fontSize: 24, fontWeight: 'bold', marginBottom: 20, color: '#333' 
  },
  uploadButton: { 
    padding: 15, 
    backgroundColor: '#373F51', 
    borderRadius: 5, 
    alignItems: 'center' 
  },
  uploadButtonText: { 
    color: '#fff', fontSize: 16 
  },
  imageContainer: { 
    position: 'relative', margin: 10 
  },
  imagePreview: { 
    width: 100, height: 100, borderRadius: 8 
  },
  removeButton: {
    position: 'absolute',
    top: 5,
    right: 5,
    backgroundColor: '#AB0D0D',
    borderRadius: 15,
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  removeButtonText: { 
    color: '#fff', 
    fontSize: 14 
  },
  clearButton: { 
    padding: 10, 
    backgroundColor: '#AB0D0D', 
    alignItems: 'center', 
    borderRadius: 5 
  },
  clearButtonText: { 
    color: '#fff', 
    fontSize: 14 
  },
  loadingContainer: { 
    alignItems: 'center', 
    marginTop: 20 
  },
  loadingText: { 
    fontSize: 16, 
    marginTop: 10 
  },
  resultsContainer: { 
    marginTop: 20 
  },
  subTitle: { 
    fontSize: 18, 
    fontWeight: 'bold', 
    marginBottom: 10 
  },
  resultText: { 
    fontSize: 16 
  },
  actionButtons: { 
    marginTop: 20, 
    flexDirection: 'row', 
    justifyContent: 'space-between' 
  },
  actionButton: { 
    flex: 1, 
    margin: 5, 
    padding: 10, 
    backgroundColor: '#373F51', 
    alignItems: 'center', 
    borderRadius: 5 
  },
  actionButtonText: { 
    color: '#fff', fontSize: 16 
  },
  modalOverlay: { 
    flex: 1, 
    backgroundColor: 'rgba(0, 0, 0, 0.5)', 
    justifyContent: 'center', 
    alignItems: 'center' 
  },
  modalContent: { 
    width: 300, 
    padding: 20, 
    backgroundColor: '#fff', 
    borderRadius: 8, 
    alignItems: 'center' },
  modalTitle: {
     fontSize: 18, 
     fontWeight: 'bold', 
     marginBottom: 20 },
  modalOption: { 
    fontSize: 16, 
    paddingVertical: 10 
  },
});

export default UploadImagePage;
