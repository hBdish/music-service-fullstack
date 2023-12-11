export enum AppRoutes {
  MAIN = '/',
  TRACKS = 'tracks',
  PLAYLISTS = 'playlists',

  // // last
  // NOT_FOUND = 'not_found',
}

export const getRouteMain = () => AppRoutes.MAIN;
export const getRouteTracks = () => '/' + AppRoutes.TRACKS;
export const getRoutePlaylists = () => '/' + AppRoutes.PLAYLISTS;
export const getRouteTracksItem = (id: string) => `/${AppRoutes.TRACKS}/${id}`;
export const getRoutePlaylistsItem = (id: string) =>
  `/${AppRoutes.PLAYLISTS}/${id}`;
