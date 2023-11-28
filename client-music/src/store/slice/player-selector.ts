import {buildSelector} from "@/store/hooks/build-selector";

export const [useVolumeValue, getVolumeValue] = buildSelector(state => state.player.volume)
export const [useActiveValue, getActiveValue] = buildSelector(state => state.player)