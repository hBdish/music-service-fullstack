'use client'
import {createAsyncThunk} from "@reduxjs/toolkit";
import createAppAsyncThunk from "@/store/store";
import {Track} from "@/types/tracks";
import {AxiosInstance} from "axios";
import {Dispatch} from "redux";
import {$api} from "@/api/api";
import {StateSchema, ThunkConfig, ThunkExtraArg} from "@/store/types/types";




export const fetchTracks = createAsyncThunk<
  Track[],
  void,
  ThunkConfig<string>
>('tracks/fetchAllTracks', async (_, thunkApi) => {
  const { extra, rejectWithValue } = thunkApi;

  console.log('fetch')
  try {

    const response = await extra.api.get<Track[]>(`/tracks`);
    //const response = await $api.get<Track[]>(`/tracks`);
    console.log(response)


    if (!response.data) {
      throw new Error();
    }

    return response.data;
  } catch (e) {
    console.log(e);
    return rejectWithValue('error');
  }
});



// export const fetchTracks = createAppAsyncThunk('tracks/fetchAllTracks', async (_, thunkApi) => {
//   const { extra, rejectWithValue } = thunkApi;
//
//   try {
//
//     const response = await extra.api.get<Track[]>(`/tracks`);
//     // const response = await $api.get<Track[]>(`/tracks`);
//
//
//     if (!response.data) {
//       throw new Error();
//     }
//
//     return response.data;
//   } catch (e) {
//     console.log(e);
//     return rejectWithValue('error');
//   }
// })
//
// export const fetchTracks = createAsyncThunk<
//   Track[],
//   void,
//   {
//     state?: StateSchema
//     rejectValue?: string
//     extra: {
//
//       api: AxiosInstance
//     }
//   }
// >('tracks/fetchAllTracks', async (_, thunkApi) => {
//   const { extra, rejectWithValue } = thunkApi;
//
//   console.log('fetch')
//   try {
//
//     //const response = await extra.api.get<Track[]>(`/tracks`);
//     const response = await $api.get<Track[]>(`/tracks`);
//
//
//     if (!response.data) {
//       throw new Error();
//     }
//
//     return response.data;
//   } catch (e) {
//     console.log(e);
//     return rejectWithValue('error');
//   }
// });
//
//
