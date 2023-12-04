import {playerActions} from '../slice/player/player-slice'
import {createTrackActions} from "../slice/create-track/create-track-slice";
import {playlistSlice} from "../slice/play-list/play-list-slice";

export default {
  ...playerActions,
  ...createTrackActions,
  ...playlistSlice,
}