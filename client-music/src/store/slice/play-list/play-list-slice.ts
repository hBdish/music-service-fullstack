import {createSlice} from "@reduxjs/toolkit";
import {PlayListSchema} from "@/types/play-list";
import {fetchPlaylists} from "@/store/slice/play-list/play-list-service";

const initialState: PlayListSchema = {
  isLoading: false,
  error: undefined,
  playlists: [],
}

export const playlistSlice = createSlice({
  name: 'playlistSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPlaylists.pending, (state) => {
        state.error = undefined
        state.isLoading = true
      })
      .addCase(fetchPlaylists.fulfilled, (state, action) => {
        state.isLoading = false
        state.playlists = action.payload
      })
      .addCase(fetchPlaylists.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload
      })
  },
})

export const {actions: playlistActions} = playlistSlice;
export const {reducer: playlistReducer} = playlistSlice;