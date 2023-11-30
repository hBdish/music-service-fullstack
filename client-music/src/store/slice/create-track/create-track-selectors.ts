import {buildSelector} from "@/store/hooks/build-selector";

export const [useCreateTrackValue, getCreateTrackValue] = buildSelector(state => state.createTrack)