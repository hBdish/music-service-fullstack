import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  getCreateTrackArtist,
  getCreateTrackName,
  getCreateTrackText,
} from '../selectors/create-track-selectors';
import { ThunkConfig } from '@/app/store/config/state-schema';
import { Track } from '@/entities';

export const createTrack = createAsyncThunk<
  Track[],
  {
    picture: any;
    audio: any;
  },
  ThunkConfig<string>
>('createTrack', async (props, thunkApi) => {
  const { extra, rejectWithValue, getState } = thunkApi;
  const name = getCreateTrackName(getState());
  const text = getCreateTrackText(getState());
  const artist = getCreateTrackArtist(getState());
  const formData = new FormData();

  formData.append('name', name);
  formData.append('text', text);
  formData.append('artist', artist);
  formData.append('picture', props.picture);
  formData.append('audio', props.audio);

  try {
    const response = await extra.api.post(`/tracks`, formData);

    if (!response.data) {
      throw new Error();
    }

    return response.data;
  } catch (e) {
    return rejectWithValue('post track error');
  }
});
