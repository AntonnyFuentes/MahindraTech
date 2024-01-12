import {useState, useEffect} from 'react';

import {useAppSelector} from '../../config/hooks';
import {useHandlersActions} from '../../store/handlers.slice';
import {PhotosBackend} from '../../utils/database/photos/photosTypes';
import {
  getPhotosAlbumId,
  getAllPhotosUser,
} from '../../utils/database/photos/photosBackend';

export function usePhotoList() {
  const {setErrorMessage, setLoading} = useHandlersActions();

  const {albumSelected, userIdSelected, users} = useAppSelector(
    state => state.users,
  );

  const [photos, setPhotos] = useState<PhotosBackend[]>([]);
  const [albumTitle, setAlbumTitle] = useState<string>('');

  const getAlbumPhotos = async () => {
    setLoading(true);
    setAlbumTitle(albumSelected.title);

    const {photos, err} = await getPhotosAlbumId(albumSelected.id);

    if (err) {
      setLoading(false);
      setErrorMessage(err);
      return;
    }

    setLoading(false);
    setPhotos(photos);
  };

  const getAllPhotos = async () => {
    setLoading(true);
    setAlbumTitle('All Photos');

    const user = users.find(user => user.id === userIdSelected);
    const albumsIds = user?.albums.map(album => album.id) ?? [];

    const {photos, err} = await getAllPhotosUser(albumsIds);

    if (err) {
      setLoading(false);
      setErrorMessage(err);
      return;
    }

    setLoading(false);
    setPhotos(photos);
  };

  useEffect(() => {
    getAlbumPhotos();
  }, [albumSelected]);

  return {albumTitle, photos, getAllPhotos, getAlbumPhotos};
}
