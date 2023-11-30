'use client'
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {CreateTrack} from "@/types/tracks";

const initialState: CreateTrack = {
  artist: "",
  name: "",
  text: ""
}

export const createTrackSlice = createSlice({
  name: 'createTrackSlice',
  initialState,
  reducers: {
    setArtist(state, {payload}: PayloadAction<string>) {
      state.artist = payload
    },
    setName(state, {payload}: PayloadAction<string>) {
      state.name = payload
    },
    setText(state, {payload}: PayloadAction<string>) {
      state.text = payload
    },
    setPicture(state, {payload}: PayloadAction<boolean>) {
      state.picture = payload
    },
    setAudio(state, {payload}: PayloadAction<boolean>) {
      state.audio = payload
    },
  },
})

export const {actions: createTrackActions} = createTrackSlice;
export const {reducer: createTrackReducer} = createTrackSlice;