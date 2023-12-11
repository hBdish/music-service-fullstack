import { useBuildSelector } from '@/shared/hooks/use-build-selector';
import { StateSchema } from '@/app/store/config/state-schema';

export const [useCreateTrackArtist, getCreateTrackArtist] = useBuildSelector(
  (state: StateSchema) => state.createTrack.artist,
);

export const [useCreateTrackName, getCreateTrackName] = useBuildSelector(
  (state: StateSchema) => state.createTrack.name,
);

export const [useCreateTrackText, getCreateTrackText] = useBuildSelector(
  (state: StateSchema) => state.createTrack.text,
);
