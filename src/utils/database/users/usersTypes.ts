import {AlbumBackend} from '../album/albumTypes';

export type UserBackend = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Adreess;
  phone: string;
  website: string;
  company: Company;
};

export type User = {
  id: number;
  name: string;
  username: string;
  albums: AlbumBackend[];
};

type Company = {
  name: string;
  catchPhrase: string;
  bs: string;
};

type Adreess = {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
};

type Geo = {
  lat: string;
  lng: string;
};

export interface GetUsersResponse {
  users: User[];
  err?: string;
}
