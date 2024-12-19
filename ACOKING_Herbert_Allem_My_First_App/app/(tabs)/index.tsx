import { View, StyleSheet } from "react-native";
import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';
import { type ImageSource } from 'expo-image';
import { GestureHandlerRootView } from "react-native-gesture-handler";
import * as MediaLibrary from 'expo-media-library';
import { useRef } from 'react';
import { captureRef } from 'react-native-view-shot';

import ButtonHAA from '@/componentsHAA/ButtonHAA';
import ImageViewerHAA from '@/componentsHAA/ImageViewerHAA';
import IconButtonHAA from '@/componentsHAA/IconButtonHAA';
import CircleButtonHAA from '@/componentsHAA/CircleButtonHAA';
import EmojiPickerHAA from '@/componentsHAA/EmojiPickeHAA';
import EmojiListHAA from '@/componentsHAA/EmojiListHAA';
import EmojiStickerHAA from '@/componentsHAA/EmojiStickerHAA';

const PlaceholderImage = require("@/assets/images/background-image.png");

export default function Index() {
  const [selectedImage, setSelectedImage] = useState<string | undefined>(undefined);
  const [showAppOptions, setShowAppOptions] = useState<boolean>(false);
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [pickedEmoji, setPickedEmoji] = useState<ImageSource | undefined>(undefined);
  const [status, requestPermission] = MediaLibrary.usePermissions();
  const imageRef = useRef<View>(null);

  if (status === null) {
    requestPermission();
  }

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
      setShowAppOptions(true);
    } else {
      alert('You did not select any image.');
    }
  };

  const onReset = () => {
    setShowAppOptions(false);
  };

  const onAddSticker = () => {
    setIsModalVisible(true);
  };

  const onModalClose = () => {
    setIsModalVisible(false);
  };

  const onSaveImageAsync = async () => {
    try {
      const localUri = await captureRef(imageRef, {
        height: 440,
        quality: 1,
      });

      await MediaLibrary.saveToLibraryAsync(localUri);
      if (localUri) {
        alert('Saved!');
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <GestureHandlerRootView style={styles.container}>
      <View style={styles.imageContainer}>
        <View ref={imageRef} collapsable={false}>
          <ImageViewerHAA imgSource={PlaceholderImage} selectedImage={selectedImage} />
          {pickedEmoji && <EmojiStickerHAA imageSize={40} stickerSource={pickedEmoji} />}
        </View>
      </View>
      {showAppOptions ? (
        <View style={styles.optionsContainer}>
          <View style={styles.optionsRow}>
            <IconButtonHAA icon="refresh" label="Reset" onPress={onReset} />
            <CircleButtonHAA onPress={onAddSticker} />
            <IconButtonHAA icon="save-alt" label="Save" onPress={onSaveImageAsync} />
          </View>
        </View>
      ) : (
        <View style={styles.footerContainer}>
          <ButtonHAA theme="primary" label="Choose a photo" onPress={pickImageAsync} />
          <ButtonHAA label="Use this photo" onPress={() => setShowAppOptions(true)} />
        </View>
      )}
      <EmojiPickerHAA isVisible={isModalVisible} onClose={onModalClose}>
        <EmojiListHAA onSelect={setPickedEmoji} onCloseModal={onModalClose} />
      </EmojiPickerHAA>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
  },
  imageContainer: {
    flex: 1,
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: 'center',
  },
  optionsContainer: {
    position: 'absolute',
    bottom: 80,
  },
  optionsRow: {
    alignItems: 'center',
    flexDirection: 'row',
  },
});