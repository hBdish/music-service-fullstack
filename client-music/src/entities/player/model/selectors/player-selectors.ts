import { StateSchema } from '@/app/store/config/state-schema';
import { useBuildSelector } from '@/shared/hooks/use-build-selector';

export const [useTrackPause, getTrackPause] = useBuildSelector(
  (state: StateSchema) => state.player.pause,
);

export const [useActiveTrack, getActiveTrack] = useBuildSelector(
  (state: StateSchema) => state.player.active,
);

export const [useTrackCurrentTime, getTrackCurrentTime] = useBuildSelector(
  (state: StateSchema) => state.player.currentTime,
);

export const [useTrackVolume, getTrackVolume] = useBuildSelector(
  (state: StateSchema) => state.player.volume,
);

export const [useTrackDuration, getTrackDuration] = useBuildSelector(
  (state: StateSchema) => state.player.duration,
);
