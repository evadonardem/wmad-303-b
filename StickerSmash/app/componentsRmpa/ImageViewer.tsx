import { StyleSheet } from 'react-native';
import { Image, type ImageSource } from "expo-image";

type Props = {
  imgSource: ImageSource;
  selectedImageRmpa?: string;
};

export default function ImageViewer({ imgSource, selectedImageRmpa }: Props) {
  const imageSource = selectedImageRmpa ? { uri: selectedImageRmpa } : imgSource;

  return <Image source={imageSource} style={styles.image} />;
}

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
});
