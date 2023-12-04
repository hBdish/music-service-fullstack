'use client'

import {createAsyncThunk} from "@reduxjs/toolkit";
import {ThunkConfig} from "@/store/types/types";
import {PlayList} from "@/types/play-list";

export const fetchPlaylists = createAsyncThunk<
  PlayList[],
  void,
  ThunkConfig<string>
>('playlist/fetchAllPlaylists', async (_, thunkApi) => {
  const {extra, rejectWithValue} = thunkApi;

  try {
    const response = await extra.api.get<PlayList[]>(`/play-lists`);

    if (!response.data) {
      throw new Error();
    }

    return response.data;
  } catch (e) {
    console.log(e);
    return rejectWithValue('fetch playlists error');
  }
});


export const cretePlaylist = createAsyncThunk<
  PlayList,
  string,
  ThunkConfig<string>
>('playlist/cretePlayList', async (name, thunkApi) => {
  const {extra, rejectWithValue, dispatch} = thunkApi;

  try {
    const response = await extra.api.post<PlayList>(`/play-lists`, {
      name
    });

    if (!response.data) {
      throw new Error();
    }

    dispatch(fetchPlaylists())

    return response.data;
  } catch (e) {
    console.log(e);
    return rejectWithValue('fetch playlists error');
  }

});

export const deletePlaylist = createAsyncThunk<
  string,
  string,
  ThunkConfig<string>
>('playlist/deletePlaylist', async (id, thunkApi) => {
  const {extra, rejectWithValue, dispatch} = thunkApi;

  try {
    const response = await extra.api.delete<string>(`/play-lists/${id}`);

    if (!response.data) {
      throw new Error();
    }

    dispatch(fetchPlaylists())

    return response.data;
  } catch (e) {
    console.log(e);
    return rejectWithValue('fetch playlists error');
  }

});