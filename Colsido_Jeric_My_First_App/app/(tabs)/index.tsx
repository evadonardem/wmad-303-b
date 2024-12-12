import { View, StyleSheet } from "react-native";
import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';
import { type ImageSource } from 'expo-image';
import { GestureHandlerRootView } from "react-native-gesture-handler";
import * as MediaLibrary from 'expo-media-library';
import { useRef } from 'react';
import { captureRef } from 'react-native-view-shot';

import ButtonJMC from '@/componentsJMC/ButtonJMC';
import ImageViewerJMC from '@/componentsJMC/ImageViewerJMC';
import IconButtonJMC from '@/componentsJMC/IconButtonJMC';
import CircleButtonJMC from '@/componentsJMC/CircleButtonJMC';
import EmojiPickerJMC from '@/componentsJMC/EmojiPickeJMC';
import EmojiListJMC from '@/componentsJMC/EmojiListJMC';
import EmojiStickerJMC from '@/componentsJMC/EmojiStickerJMC';

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
          <ImageViewerJMC imgSource={PlaceholderImage} selectedImage={selectedImage} />
          {pickedEmoji && <EmojiStickerJMC imageSize={40} stickerSource={pickedEmoji} />}
        </View>
      </View>
      {showAppOptions ? (
        <View style={styles.optionsContainer}>
          <View style={styles.optionsRow}>
            <IconButtonJMC icon="refresh" label="Reset" onPress={onReset} />
            <CircleButtonJMC onPress={onAddSticker} />
            <IconButtonJMC icon="save-alt" label="Save" onPress={onSaveImageAsync} />
          </View>
        </View>
      ) : (
        <View style={styles.footerContainer}>
          <ButtonJMC theme="primary" label="Choose a photo" onPress={pickImageAsync} />
          <ButtonJMC label="Use this photo" onPress={() => setShowAppOptions(true)} />
        </View>
      )}
      <EmojiPickerJMC isVisible={isModalVisible} onClose={onModalClose}>
        <EmojiListJMC onSelect={setPickedEmoji} onCloseModal={onModalClose} />
      </EmojiPickerJMC>
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