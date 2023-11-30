export interface Comment {
  _id: string
  username: string
  text: string
}

export interface Track {
  _id: string
  name: string
  artist: string
  text: string
  listeners: number
  picture: string
  audio: string
  comments?: Comment[]
}


export interface Tracks {
  tracks: Track[]
  error?: string
  isLoading: boolean
}