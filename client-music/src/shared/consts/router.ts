export enum AppRoutes {
  MAIN = '/',
  TRACKS = 'tracks',
  PLAYLISTS = 'playlists',
  CREATE_TRACK = 'create-track',

  // // last
  // NOT_FOUND = 'not_found',
}

export const getRouteMain = () => AppRoutes.MAIN;
export const getRouteTracks = () => '/' + AppRoutes.TRACKS;
export const getRouteCreateTrack = () =>
  '/' + AppRoutes.TRACKS + '/' + AppRoutes.CREATE_TRACK;
export const getRoutePlaylists = () => '/' + AppRoutes.PLAYLISTS;
export const getRouteTracksItem = (id: string) => `/${AppRoutes.TRACKS}/${id}`;
export const getRoutePlaylistsItem = (id: string) =>
  `/${AppRoutes.PLAYLISTS}/${id}`;
