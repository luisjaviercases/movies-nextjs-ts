import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { BASE_API_REDUCER_KEY, baseApi } from '@/services/query/baseApi';

const rootReducer = combineReducers({ [BASE_API_REDUCER_KEY]: baseApi.reducer });

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([baseApi.middleware]),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
