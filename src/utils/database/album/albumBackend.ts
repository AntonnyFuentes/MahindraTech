import axios from 'axios';
import {AlbumBackend, GetAlbumsResponse} from './albumTypes';
import {BASE_URL} from '@env';

export async function getAlbumsBckend(): Promise<GetAlbumsResponse> {
  try {
    const url = BASE_URL + `albums`;

    const {data, status} = await axios.get(url);

    if (!data)
      return {
        albums: [],
      };
    if (status !== 200) throw new Error('Something wrong happend, try later');

    const albums = [...data] as AlbumBackend[];

    return {
      albums,
    };
  } catch (error) {
    return {
      albums: [],
      err: error as string,
    };
  }
}
