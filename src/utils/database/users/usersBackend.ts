import axios from 'axios';

import {getAlbumsBckend} from '../album/albumBackend';
import {User, UserBackend, GetUsersResponse} from './usersTypes';
import {BASE_URL} from '@env';

export async function getUsersBckend(): Promise<GetUsersResponse> {
  try {
    const url = BASE_URL + `users`;

    const {data, status} = await axios.get(url);

    if (!data) throw new Error('Data Not Found');
    if (status !== 200) throw new Error('Something wrong happend, try later');

    const usersBackend = [...data] as UserBackend[];

    const {albums, err} = await getAlbumsBckend();

    const users: User[] = usersBackend.map(user => {
      const albumsUser = albums.filter(album => {
        return album.userId === user.id;
      });
      return {
        ...user,
        albums: albumsUser,
      };
    });

    if (err) throw new Error('Data Not Found');

    return {
      users,
    };
  } catch (error) {
    return {
      users: [],
      err: error as string,
    };
  }
}
