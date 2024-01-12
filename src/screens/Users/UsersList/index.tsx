import React from 'react';
import {View, StyleSheet, FlatList} from 'react-native';

import Colors from '../../../Constants/Colors';

import UserBox from './UserBox';
import {useAppSelector} from '../../../config/hooks';

export default function UsersList() {
  const {users} = useAppSelector(state => state.users);

  return (
    <View style={styles.container}>
      <FlatList
        data={users}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={{marginHorizontal: '3%'}}
        renderItem={({item, index}) => <UserBox user={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.grey10,
  },
});
