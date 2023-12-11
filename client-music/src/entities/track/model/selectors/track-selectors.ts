import { useBuildSelector } from '@/shared/hooks/use-build-selector';
import { StateSchema } from '@/app/store/config/state-schema';

export const [useTracksLoading, getTracksLoading] = useBuildSelector(
  (state: StateSchema) => state.tracks.isLoading,
);

export const [useTracks, getTracks] = useBuildSelector(
  (state: StateSchema) => state.tracks.tracks,
);

export const [useTrack, getTrack] = useBuildSelector(
  (state: StateSchema) => state.tracks.track,
);

export const [useTracksError, getTracksError] = useBuildSelector(
  (state: StateSchema) => state.tracks.error,
);
