import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Button} from 'react-native-paper';

interface IProps {
  label: string;
  onPress: () => void;
}

export default function ButtonHome({label, onPress}: IProps) {
  return (
    <View style={styles.buttonContainer}>
      <Button onPress={onPress} mode={'contained'}>
        {label}
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    padding: '5%',
  },
});
