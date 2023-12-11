import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';

import { StateSchema, ThunkExtraArg } from './state-schema';
import { $api } from '@/shared';
import { playerReducer, playlistReducer, tracksReducer } from '@/entities';
import { createTrackReducer } from '@/features';

const rootReducers: ReducersMapObject<StateSchema> = {
  player: playerReducer,
  tracks: tracksReducer,
  createTrack: createTrackReducer,
  playlists: playlistReducer,
};

const extraArg: ThunkExtraArg = {
  api: $api,
};

export const store = configureStore({
  reducer: rootReducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: extraArg,
      },
    }),
});

// const createAppAsyncThunk = createAsyncThunk.withTypes<{
//   state: StateSchema
//   dispatch: AppDispatch
//   rejectValue: string
//   extra: ThunkExtraArg
// }>() // TODO Разобраться как работает

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
