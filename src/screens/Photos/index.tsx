import React from 'react';
import {StyleSheet, SafeAreaView, FlatList} from 'react-native';

import Colors from '../../Constants/Colors';
import Fonts from '../../Constants/Fonts';

import Header from './Header';
import PhotosList from './PhotosList';
import ErrorMessage from '../../components/common/ErrorMessage';
import LoadingComponent from '../../components/common/LoadingComponent';
import {useAppSelector} from '../../config/hooks';
import {useHandlersActions} from '../../store/handlers.slice';
import {usePhotoList} from './usePhotosList';

export default function PhotosComponent() {
  const {albumTitle, photos, getAlbumPhotos, getAllPhotos} = usePhotoList();
  const {setErrorMessage} = useHandlersActions();

  const {loading, errorMessage} = useAppSelector(state => state.handlers);

  const onPressStar = (showAll: boolean) => {
    if (showAll) {
      getAllPhotos();
    } else {
      getAlbumPhotos();
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header title={albumTitle} onPressStar={onPressStar} />
      {loading ? (
        <LoadingComponent />
      ) : (
        <FlatList
          data={photos}
          keyExtractor={(item, index) => index.toString()}
          contentContainerStyle={{alignItems: 'center'}}
          renderItem={({item, index}) => <PhotosList source={item.url} />}
          numColumns={3}
        />
      )}
      <ErrorMessage err={errorMessage} setErr={setErrorMessage} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.grey10,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: '4%',
    paddingVertical: '3.5%',
    backgroundColor: Colors.white,
    borderColor: Colors.grey30,
    borderWidth: 1,
  },
  albumTitle: {
    fontSize: 19,
    fontFamily: Fonts.OpenSansBold,
  },
});
