import React, {useState, useMemo} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';

import Colors from '../../../Constants/Colors';
import Icons from '../../../Constants/Icons';

import AlbumBox from './AlbumBox';
import IconCommon from '../../../components/common/IconCommon';
import {User} from '../../../utils/database/users/usersTypes';

interface IProps {
  user: User;
}

export default function UserBox({user}: IProps) {
  const [showAlbums, setShowAlbums] = useState<boolean>(false);

  const setShowAlbum = () => {
    setShowAlbums(!showAlbums);
  };

  const iconShowAlbum = useMemo(() => {
    return showAlbums ? Icons.caretUp : Icons.caretDown;
  }, [showAlbums]);

  return (
    <View style={styles.container}>
      <View style={styles.nameContainer}>
        <Text>{user.name}</Text>
        <IconCommon
          icon={iconShowAlbum}
          color={Colors.black}
          size={20}
          style={{}}
          onPressIcon={setShowAlbum}
        />
      </View>
      {showAlbums && (
        <FlatList
          data={user.albums}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item, index}) => (
            <AlbumBox album={item} index={index} userId={user.id} />
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: '3%',
  },
  nameContainer: {
    width: '100%',
    height: 50,
    alignItems: 'center',
    paddingHorizontal: '4%',
    backgroundColor: Colors.white,
    shadowColor: Colors.black,
    shadowOffset: {width: 2, height: 2},
    shadowRadius: 3,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
