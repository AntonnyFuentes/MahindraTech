import {useRef} from 'react';
import {createSlice, PayloadAction, bindActionCreators} from '@reduxjs/toolkit';

import {useAppDispatch} from '../config/hooks';
import {User} from '../utils/database/users/usersTypes';
import {AlbumBackend} from '../utils/database/album/albumTypes';

interface UsersState {
  users: User[];
  userIdSelected: number;
  albumSelected: AlbumBackend;
}

export const initialState: UsersState = {
  users: [],
  userIdSelected: 0,
  albumSelected: {
    id: 0,
    title: '',
    userId: 0,
  },
};

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setUsers: (state, action: PayloadAction<User[]>) => {
      state.users = action.payload;
    },
    setAlbumSelected: (state, action: PayloadAction<AlbumBackend>) => {
      state.albumSelected = action.payload;
    },
    setUserIdSelected: (state, action: PayloadAction<number>) => {
      state.userIdSelected = action.payload;
    },
  },
});

export function useUsersActions() {
  const dispatch = useAppDispatch();
  const actions = {
    ...usersSlice.actions,
  };
  const refActions = useRef(bindActionCreators(actions, dispatch));
  return refActions.current;
}

export default usersSlice.reducer;
