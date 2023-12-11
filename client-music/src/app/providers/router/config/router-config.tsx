import {
  AppRoutes,
  AppRoutesProps,
  getRouteMain,
  getRoutePlaylists,
  getRouteTracks,
} from '@/shared';
import { TracksPage } from '@/pages/tracks';
import { PlayListsPage } from '@/pages/play-lists';
import { MainPage } from '@/pages/main-page';

export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
  [AppRoutes.MAIN]: {
    path: getRouteMain(),
    element: <MainPage />,
  },
  [AppRoutes.TRACKS]: {
    path: getRouteTracks(),
    element: <TracksPage />,
  },
  [AppRoutes.PLAYLISTS]: {
    path: getRoutePlaylists(),
    element: <PlayListsPage />,
  },
};
