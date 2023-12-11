export interface Comment {
  _id: string;
  username: string;
  text: string;
}

export interface Track {
  _id: string;
  name: string;
  text: string;
  artist: string;
  listeners: number;
  picture: string;
  audio: string;
  comments?: Comment[];
}

export interface TracksSchema {
  tracks: Track[];
  track?: Track;
  error?: string;
  isLoading: boolean;
}
