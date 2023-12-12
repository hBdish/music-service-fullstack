import { playerActions } from '@/entities';
import { createTrackActions } from '@/features';

export default {
  ...playerActions,
  ...createTrackActions,
};
