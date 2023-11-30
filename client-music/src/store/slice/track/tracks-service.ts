'use client'
import {createAsyncThunk} from "@reduxjs/toolkit";
import {Track} from "@/types/tracks";
import {ThunkConfig} from "@/store/types/types";


export const fetchTracks = createAsyncThunk<
  Track[],
  void,
  ThunkConfig<string>
>('tracks/fetchAllTracks', async (_, thunkApi) => {
  const {extra, rejectWithValue} = thunkApi;

  try {
    const response = await extra.api.get<Track[]>(`/tracks`);

    if (!response.data) {
      throw new Error();
    }

    return response.data;
  } catch (e) {
    console.log(e);
    return rejectWithValue('fetch tracks error');
  }
});

export const searchTracks = createAsyncThunk<
  Track[],
  string,
  ThunkConfig<string>
>('tracks/searchTracks', async (query, thunkApi) => {
  const {extra, rejectWithValue} = thunkApi;

  try {
    const response = await extra.api.get<Track[]>(`/tracks/search/?query=${query}`);

    if (!response.data) {
      throw new Error();
    }

    return response.data;
  } catch (e) {
    console.log(e);
    return rejectWithValue('fetch tracks error');
  }
});


export const fetchTrack = createAsyncThunk<
  Track,
  number,
  ThunkConfig<string>
>('tracks/fetchTrack', async (id, thunkApi) => {
  const {extra, rejectWithValue} = thunkApi;

  try {
    const response = await extra.api.get<Track>(`/tracks/` + id);

    if (!response.data) {
      throw new Error();
    }

    return response.data;
  } catch (e) {
    console.log(e);
    return rejectWithValue('fetch track error');
  }
});