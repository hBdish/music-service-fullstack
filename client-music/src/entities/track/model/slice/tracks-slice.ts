import { createSlice } from '@reduxjs/toolkit';
import { fetchTrack, fetchTracks, searchTracks } from '../service';
import { TracksSchema } from '..';

const initialState: TracksSchema = {
  tracks: [],
  track: undefined,
  error: undefined,
  isLoading: false,
};

export const tracksSlice = createSlice({
  name: 'tracksSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTracks.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(fetchTracks.fulfilled, (state, action) => {
        state.isLoading = false;
        state.tracks = action.payload;
      })
      .addCase(fetchTracks.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(searchTracks.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(searchTracks.fulfilled, (state, action) => {
        state.isLoading = false;
        state.tracks = action.payload;
      })
      .addCase(searchTracks.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(fetchTrack.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(fetchTrack.fulfilled, (state, action) => {
        state.isLoading = false;
        state.track = action.payload;
      })
      .addCase(fetchTrack.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { actions: tracksActions } = tracksSlice;
export const { reducer: tracksReducer } = tracksSlice;
