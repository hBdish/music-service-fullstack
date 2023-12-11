import { AxiosInstance } from 'axios';
import { PlayerSchema, PlayListSchema, TracksSchema } from '@/entities';
import { CreateTrackSchema } from '@/features';

export interface StateSchema {
  player: PlayerSchema;
  tracks: TracksSchema;
  createTrack: CreateTrackSchema;
  playlists: PlayListSchema;
}

export interface ThunkExtraArg {
  api: AxiosInstance;
}

export interface ThunkConfig<T> {
  rejectValue: T;
  extra: ThunkExtraArg;
  state: StateSchema;
}
