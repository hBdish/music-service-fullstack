import { useBuildSelector } from '@/shared/hooks/use-build-selector';
import { StateSchema } from '@/app/store/config/state-schema';

export const [usePlaylistLoading, getPlaylistLoading] = useBuildSelector(
  (state: StateSchema) => state.playlists.isLoading,
);

export const [usePlaylists, getPlaylists] = useBuildSelector(
  (state: StateSchema) => state.playlists.playlists,
);

export const [useSelectedPlaylist, getSelectedPlaylist] = useBuildSelector(
  (state: StateSchema) => state.playlists.selectedPlaylist,
);

export const [usePlaylistError, getPlaylistError] = useBuildSelector(
  (state: StateSchema) => state.playlists.error,
);
