import {useRef} from 'react';
import {createSlice, PayloadAction, bindActionCreators} from '@reduxjs/toolkit';

import {useAppDispatch} from '../config/hooks';

interface HandlersState {
  loading: boolean;
  errorMessage: string | undefined;
}

export const initialState: HandlersState = {
  loading: false,
  errorMessage: undefined,
};

export const handlersSlice = createSlice({
  name: 'handlers',
  initialState,
  reducers: {
    setErrorMessage: (state, action: PayloadAction<string | undefined>) => {
      state.errorMessage = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  },
});

export function useHandlersActions() {
  const dispatch = useAppDispatch();
  const actions = {
    ...handlersSlice.actions,
  };
  const refActions = useRef(bindActionCreators(actions, dispatch));
  return refActions.current;
}

export default handlersSlice.reducer;
