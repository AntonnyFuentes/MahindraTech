import {configureStore} from '@reduxjs/toolkit';
import usersReducer from '../store/users.slice';
import handlersReducer from '../store/handlers.slice';

const store = configureStore({
  reducer: {
    users: usersReducer,
    handlers: handlersReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
