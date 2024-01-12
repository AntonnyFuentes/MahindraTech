import React from 'react';
import {StyleSheet, Dimensions, Image} from 'react-native';

const width = Dimensions.get('screen').width;

interface IProps {
  source: string;
}

export default function PhotosList({source}: IProps) {
  return (
    <Image
      style={styles.photoContainer}
      source={{
        uri: source,
      }}
    />
  );
}

const styles = StyleSheet.create({
  photoContainer: {
    width: width * 0.33,
    height: width * 0.33,
  },
});
