import {Player} from "@/types/player";
import {Track, Tracks} from "@/types/tracks";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {fetchTracks} from "@/store/slice/track/tracks-service";

const initialState: Tracks = {
  tracks: [],
  error: undefined,
  isLoading: false
}

export const tracksSlice = createSlice({
  name: 'tracksSlice',
  initialState,
  reducers: {
    play(state){
      console.log(state.tracks)
      console.log('state.tracks')
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTracks.pending, (state) => {
        state.error = undefined
        state.isLoading = true
      })
      .addCase(fetchTracks.fulfilled, (state, action) => {
        state.isLoading = false
        state.tracks = action.payload
      })
      .addCase(fetchTracks.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload
      })
    },
})

export const { actions: tracksActions } = tracksSlice;
export const { reducer: tracksReducer } = tracksSlice;