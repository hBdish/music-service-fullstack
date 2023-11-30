import {Player} from "@/types/player";
import {CreateTrack, Tracks} from "@/types/tracks";
import {AxiosInstance} from "axios";

export interface StateSchema {
  player: Player
  tracks: Tracks
  createTrack: CreateTrack,
}

export interface ThunkExtraArg {
  api: AxiosInstance;
}

export interface ThunkConfig<T> {
  rejectValue: T;
  extra: ThunkExtraArg;
  state: StateSchema;
}