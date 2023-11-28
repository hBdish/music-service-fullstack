'use client'
import {PlayerState} from "@/types/player";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Track} from "@/types/tracks";
import {HYDRATE} from "next-redux-wrapper";

const initialState: PlayerState = {
  active: null,
  currentTime: 0,
  duration: 0,
  pause: true,
  volume: 0
}

export const playerSlice = createSlice({
  name: 'playerSlice',
  initialState,
  reducers: {
    pause(state){
      state.pause = true
    },
    play(state){
      state.pause = false
    },
    setVolume(state, {payload}: PayloadAction<number>){
      state.volume = payload
    },
    setCurrentTime(state, {payload}: PayloadAction<number>){
      state.currentTime = payload
    },
    setDuration(state, {payload}: PayloadAction<number>){
      state.duration = payload
    },
    setActiveTrack(state, {payload}: PayloadAction<Track>){
      state.active = payload
      state.duration = 0
      state.currentTime = 0
    }
  },
  extraReducers: (builder) => {
    builder
      // and provide a default case if no other handlers matched
      .addDefaultCase((state, action) => {})
  },
})

export const { actions: playerActions } = playerSlice;
export const { reducer: playerReducer } = playerSlice;