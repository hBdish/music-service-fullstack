import {playerActions} from '../slice/player/player-slice'
import {createTrackActions} from "@/store/slice/create-track/create-track-slice";

export default {
  ...playerActions,
  ...createTrackActions,
}