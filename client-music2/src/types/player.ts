import {Track} from "@/types/tracks";

export interface PlayerSchema {
  active: null | Track
  volume: number
  duration: number
  currentTime: number
  pause: boolean
}