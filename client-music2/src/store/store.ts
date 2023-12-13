import {configureStore, ReducersMapObject} from "@reduxjs/toolkit";
import {playerReducer} from "@/store/slice/player/player-slice";
import {tracksReducer} from "@/store/slice/track/tracks-slice";
import {$api} from "@/api/api";
import {StateSchema, ThunkExtraArg} from "@/store/types/types";
import {createTrackReducer} from "@/store/slice/create-track/create-track-slice";
import {playlistReducer} from "@/store/slice/play-list/play-list-slice";

const rootReducers: ReducersMapObject<StateSchema> = {
  player: playerReducer,
  tracks: tracksReducer,
  createTrack: createTrackReducer,
  playlists: playlistReducer
}

const extraArg: ThunkExtraArg = {
  api: $api,
};

export const store = configureStore({
  reducer: rootReducers,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: extraArg
      }
    })
})


// const createAppAsyncThunk = createAsyncThunk.withTypes<{
//   state: StateSchema
//   dispatch: AppDispatch
//   rejectValue: string
//   extra: ThunkExtraArg
// }>() // TODO Разобраться как работает


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch