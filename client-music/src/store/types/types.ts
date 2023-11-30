import {Player} from "@/types/player";
import {Tracks} from "@/types/tracks";
import {AxiosInstance} from "axios";

export interface StateSchema {
  player: Player
  tracks: Tracks
}

export interface ThunkExtraArg {
  api: AxiosInstance;
}

export interface ThunkConfig<T> {
  rejectValue: T;
  extra: ThunkExtraArg;
  state: StateSchema;
}