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