'use client'
import {createAsyncThunk} from "@reduxjs/toolkit";
import {ThunkConfig} from "@/store/types/types";
import {Track} from "@/types/tracks";
import {getCreateTrackValue} from "@/store/slice/create-track/create-track-selectors";

export const createTrack = createAsyncThunk<
  Track[],
  {
    picture: any,
    audio: any
  },
  ThunkConfig<string>
>('createTrack', async (props, thunkApi) => {
  const {extra, rejectWithValue, getState} = thunkApi;
  const {name, artist, text} = getCreateTrackValue(getState())
  const formData = new FormData()

  formData.append('name', name)
  formData.append('text', text)
  formData.append('artist', artist)
  formData.append('picture', props.picture)
  formData.append('audio', props.audio)

  try {
    const response = await extra.api.post(
      `/tracks`,
      formData,
    );

    if (!response.data) {
      throw new Error();
    }

    return response.data;
  } catch (e) {

    return rejectWithValue('post track error');
  }
});