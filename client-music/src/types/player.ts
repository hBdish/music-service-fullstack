import {Track} from "@/types/tracks";

export interface Player {
  active: null | Track
  volume: number
  duration: number
  currentTime: number
  pause: boolean
}