import {buildSelector} from "@/store/hooks/build-selector";

export const [useTrackValue, getTrackValue] = buildSelector(state => state.tracks)