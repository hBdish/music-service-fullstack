import {Track} from "@/types/tracks";

export interface PlayList {
  _id: string
  name: string
  tracks: Track[] | []
}

export interface PlayListSchema {
  playlists: PlayList[]
  selectedPlaylist?: PlayList
  error?: string
  isLoading: boolean
}