export type AlbumBackend = {
  userId: number;
  id: number;
  title: string;
};

export interface GetAlbumsResponse {
  albums: AlbumBackend[];
  err?: string;
}
