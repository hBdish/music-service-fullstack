import { Track } from '@/entities';

export interface PlayerSchema {
  active: null | Track;
  volume: number;
  duration: number;
  currentTime: number;
  pause: boolean;
}
