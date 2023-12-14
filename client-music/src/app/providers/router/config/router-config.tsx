import {
  AppRoutes,
  AppRoutesProps,
  getRouteCreateTrack,
  getRouteMain,
  getRoutePlaylists,
  getRoutePlaylistsItem,
  getRouteTrack,
  getRouteTracks,
} from '@/shared';
import { TracksPage } from '@/pages/tracks';
import { PlayListsPage } from '@/pages/play-lists';
import { MainPage } from '@/pages/main-page';
import { CreateTrackPage } from '@/pages/create-track-page/create-track-page';
import { PlayListInfoPage } from '@/pages/playlist-info';
import { TrackInfoPage } from '@/pages/track-info';

export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
  [AppRoutes.MAIN]: {
    path: getRouteMain(),
    element: <MainPage />,
  },

  [AppRoutes.TRACK]: {
    path: getRouteTrack(':id'),
    element: <TrackInfoPage />,
  },
  [AppRoutes.TRACKS]: {
    path: getRouteTracks(),
    element: <TracksPage />,
  },
  [AppRoutes.CREATE_TRACK]: {
    path: getRouteCreateTrack(),
    element: <CreateTrackPage />,
  },

  [AppRoutes.PLAYLISTS]: {
    path: getRoutePlaylists(),
    element: <PlayListsPage />,
  },
  [AppRoutes.PLAYLIST]: {
    path: getRoutePlaylistsItem(':id'),
    element: <PlayListInfoPage />,
  },
};
