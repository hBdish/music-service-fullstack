import {PlayerSchema} from "@/types/player";
import {CreateTrackSchema, TracksSchema} from "@/types/tracks";
import {AxiosInstance} from "axios";
import {PlayListSchema} from "@/types/play-list";

export interface StateSchema {
  player: PlayerSchema
  tracks: TracksSchema
  createTrack: CreateTrackSchema,
  playlists: PlayListSchema
}

export interface ThunkExtraArg {
  api: AxiosInstance;
}

export interface ThunkConfig<T> {
  rejectValue: T;
  extra: ThunkExtraArg;
  state: StateSchema;
}