import { StyleSheet } from 'react-native';
import { Image, type ImageSource } from "expo-image";

type Props = {
  imgSource: ImageSource;
  selectedImageJvd?: string;
};

export default function ImageViewer({ imgSource, selectedImageJvd }: Props) {
  const imageSource = selectedImageJvd ? { uri: selectedImageJvd } : imgSource;

  return <Image source={imageSource} style={styles.image} />;
}

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
});
