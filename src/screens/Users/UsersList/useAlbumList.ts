import {useNavigation} from '@react-navigation/native';

import {useAppSelector} from '../../../config/hooks';
import {useUsersActions} from '../../../store/users.slice';
import {AlbumBackend} from '../../../utils/database/album/albumTypes';
import {MainRoutes} from '../../../navigation/Routes';

interface goPhotosProps {
  album: AlbumBackend;
  userId: number;
}

interface DeleteAlbumProps {
  albumId: number;
  userId: number;
}

export function useAlbumList() {
  const {setUsers, setAlbumSelected, setUserIdSelected} = useUsersActions();
  const navigation = useNavigation();

  const {users} = useAppSelector(state => state.users);

  const deleteAlbum = ({albumId, userId}: DeleteAlbumProps) => {
    const user = users.map(user => {
      if (user.id !== userId) return user;

      const newAlbums = user.albums.filter(a => a.id !== albumId);
      return {
        ...user,
        albums: newAlbums,
      };
    });

    setUsers(user);
  };

  const goPhotos = async ({album, userId}: goPhotosProps) => {
    setAlbumSelected(album);
    setUserIdSelected(userId);
    navigation.navigate(MainRoutes.PHOTOS as never);
  };

  return {deleteAlbum, goPhotos};
}
