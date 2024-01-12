import React from 'react';
import {Modal, StyleSheet, Text, View} from 'react-native';

import Icons from '../../Constants/Icons';
import Colors from '../../Constants/Colors';

import IconCommon from '../common/IconCommon';

interface IProps {
  modalVisible: boolean;
  setModalVisible: (e: boolean) => void;
  errorMessage?: string;
}

export default function ToastErrorMessage({
  modalVisible,
  errorMessage = '',
  setModalVisible,
}: IProps) {
  return (
    <Modal
      animationType="slide"
      visible={modalVisible}
      transparent={true}
      onRequestClose={() => setModalVisible(!modalVisible)}>
      <View style={styles.modalView}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <IconCommon
            icon={Icons.markXCircle}
            size={20}
            color={Colors.red70}
            onPressIcon={() => {}}
            style={{}}
            disabledIcon
          />
          <Text style={styles.modalText}>{errorMessage}</Text>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalView: {
    margin: 10,
    marginTop: '200%',
    backgroundColor: Colors.black,
    borderRadius: 20,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    height: '5%',
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  modalText: {
    fontWeight: 'bold',
    marginLeft: 13,
    color: Colors.white,
    fontSize: 12.5,
  },
});
