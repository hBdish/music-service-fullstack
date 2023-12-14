'use client';

import { createAsyncThunk } from '@reduxjs/toolkit';
import { PlayList } from '..';
import { ThunkConfig } from '@/app/store/config/state-schema';

export const fetchPlaylists = createAsyncThunk<
  PlayList[],
  void,
  ThunkConfig<string>
>('playlist/fetchAllPlaylists', async (_, thunkApi) => {
  const { extra, rejectWithValue } = thunkApi;

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

export const fetchPlaylist = createAsyncThunk<
  PlayList,
  string,
  ThunkConfig<string>
>('playlist/fetchPlaylist', async (id, thunkApi) => {
  const { extra, rejectWithValue } = thunkApi;

  try {
    const response = await extra.api.get<PlayList>(`/play-lists/${id}`);
    console.log(response.data);
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
  const { extra, rejectWithValue, dispatch } = thunkApi;

  try {
    const response = await extra.api.post<PlayList>(`/play-lists`, {
      name,
    });

    if (!response.data) {
      throw new Error();
    }

    dispatch(fetchPlaylists());

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
  const { extra, rejectWithValue, dispatch } = thunkApi;

  try {
    const response = await extra.api.delete<string>(`/play-lists/${id}`);

    if (!response.data) {
      throw new Error();
    }

    dispatch(fetchPlaylists());

    return response.data;
  } catch (e) {
    console.log(e);
    return rejectWithValue('fetch playlists error');
  }
});

export const addTrackInPlayList = createAsyncThunk<
  PlayList,
  {
    trackId: string;
    playListId: string;
  },
  ThunkConfig<string>
>('playlist/addTrackInPlayList', async (props, thunkApi) => {
  const { extra, rejectWithValue } = thunkApi;
  const { trackId, playListId } = props;

  try {
    const response = await extra.api.patch<PlayList>(`/play-lists`, {
      trackId,
      playListId,
    });

    if (!response.data) {
      throw new Error();
    }

    return response.data;
  } catch (e) {
    console.log(e);
    return rejectWithValue('fetch playlists error');
  }
});

export const deleteTrackFromPlayList = createAsyncThunk<
  PlayList,
  {
    trackId: string;
    playListId: string;
  },
  ThunkConfig<string>
>('playlist/fetchAllPlaylists', async (props, thunkApi) => {
  const { extra, rejectWithValue } = thunkApi;
  const { trackId, playListId } = props;

  try {
    const response = await extra.api.delete<PlayList>(`/play-lists`, {
      data: {
        trackId,
        playListId,
      },
    });

    if (!response.data) {
      throw new Error();
    }

    return response.data;
  } catch (e) {
    console.log(e);
    return rejectWithValue('fetch playlists error');
  }
});
