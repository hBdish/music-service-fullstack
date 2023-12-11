import {buildSelector} from "@/store/hooks/build-selector";

export const [usePlaylistValue, getPlaylistValue] = buildSelector(state => state.playlists)