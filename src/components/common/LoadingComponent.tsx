import React from 'react';
import {View, StyleSheet, ActivityIndicator} from 'react-native';

import Colors from '../../Constants/Colors';

export default function LoadingComponent() {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="small" color={Colors.black} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
});
