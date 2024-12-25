import React from 'react';
import { View, Text, Button } from 'react-native';

const UploadImagePage = () => {
  const handleImageUpload = () => {
    // Logic for uploading the image (could integrate with camera or file picker)
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Upload Image of Landmark</Text>
      <Button title="Upload Image" onPress={handleImageUpload} />
    </View>
  );
};

export default UploadImagePage;
