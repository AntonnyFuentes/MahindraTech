import React, {useMemo} from 'react';
import {View, Text, StyleSheet, TouchableHighlight} from 'react-native';

import Colors from '../../../Constants/Colors';
import Fonts from '../../../Constants/Fonts';
import Icons from '../../../Constants/Icons';

import {useAlbumList} from './useAlbumList';
import IconCommon from '../../../components/common/IconCommon';
import {AlbumBackend} from '../../../utils/database/album/albumTypes';

interface IProps {
  album: AlbumBackend;
  userId: number;
  index: number;
}

export default function AlbumBox({album, index, userId}: IProps) {
  const {deleteAlbum, goPhotos} = useAlbumList();

  const isFirst = useMemo(() => index === 0, []);

  const pressDelete = () => {
    deleteAlbum({albumId: album.id, userId});
  };

  const goToPhotos = () => {
    goPhotos({album: album, userId});
  };

  return (
    <View style={[styles.container, isFirst ? styles.firstLine : {}]}>
      <TouchableHighlight
        onPress={goToPhotos}
        underlayColor={Colors.blackOpacity}>
        <Text style={styles.title}>{album.title}</Text>
      </TouchableHighlight>
      <IconCommon
        icon={Icons.trash}
        color={Colors.red60}
        size={15}
        style={{}}
        onPressIcon={pressDelete}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '85%',
    alignSelf: 'flex-end',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingRight: '3%',
    paddingLeft: '5%',
    backgroundColor: Colors.white,
    paddingVertical: '2%',
    borderBottomColor: Colors.grey30,
    borderBottomWidth: 1,
    flexDirection: 'row',
  },
  firstLine: {
    borderTopColor: Colors.grey30,
    borderTopWidth: 1,
  },
  title: {
    marginRight: 8,
    fontFamily: Fonts.OpenSansRegular,
    textAlign: 'right',
  },
});
