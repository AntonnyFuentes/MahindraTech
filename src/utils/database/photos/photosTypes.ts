export type PhotosBackend = {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
};

export interface GetPhotosResponse {
  photos: PhotosBackend[];
  err?: string;
}
