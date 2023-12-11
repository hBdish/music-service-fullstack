import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { PlayerSchema } from '..';
import { Track } from '@/entities';

const initialState: PlayerSchema = {
  active: null,
  currentTime: 0,
  duration: 0,
  pause: true,
  volume: 50,
};

export const playerSlice = createSlice({
  name: 'playerSlice',
  initialState,
  reducers: {
    pause(state) {
      state.pause = true;
    },
    play(state) {
      state.pause = false;
    },
    setVolume(state, { payload }: PayloadAction<number>) {
      state.volume = payload;
    },
    setCurrentTime(state, { payload }: PayloadAction<number>) {
      state.currentTime = payload;
    },
    setDuration(state, { payload }: PayloadAction<number>) {
      state.duration = payload;
    },
    setActiveTrack(state, { payload }: PayloadAction<Track>) {
      state.active = payload;
      state.duration = 0;
      state.currentTime = 0;
    },
  },
});

export const { actions: playerActions } = playerSlice;
export const { reducer: playerReducer } = playerSlice;
