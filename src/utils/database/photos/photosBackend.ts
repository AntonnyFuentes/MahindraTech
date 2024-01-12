import axios from 'axios';
import {PhotosBackend, GetPhotosResponse} from './photosTypes';
import {BASE_URL} from '@env';

export async function getPhotosAlbumId(
  albumId: number,
): Promise<GetPhotosResponse> {
  try {
    const url = BASE_URL + `photos?albumId=${albumId}`;

    const {data, status} = await axios.get(url);

    if (!data) throw new Error('Data Not Found');
    if (status !== 200) throw new Error('Something wrong happend, try later');

    const photos = [...data] as PhotosBackend[];

    return {
      photos,
    };
  } catch (error) {
    return {
      photos: [],
      err: error as string,
    };
  }
}

export async function getAllPhotosUser(
  albumsIds: number[],
): Promise<GetPhotosResponse> {
  try {
    const url = BASE_URL + `photos`;

    const {data, status} = await axios.get(url);

    if (!data)
      return {
        photos: [],
      };
    if (status !== 200) throw new Error('Something wrong happend, try later');

    const photos = [...data] as PhotosBackend[];
    const filteredPhotos = photos.filter(photo =>
      albumsIds.find(album => album === photo.albumId),
    );

    return {
      photos: filteredPhotos,
    };
  } catch (error) {
    return {
      photos: [],
      err: error as string,
    };
  }
}
