'use client'

import {useEffect} from 'react';
import {useAppDispatch} from "@/store/hooks/hooks";
import {fetchPlaylist} from "@/store/slice/play-list/play-list-service";
import TrackList from "@/components/track-list/track-list";
import {usePlaylistValue} from "@/store/slice/play-list/play-list-selector";

const PlaylistPage = (props: any) => {
  const dispatch = useAppDispatch()
  const {selectedPlaylist} = usePlaylistValue()

  useEffect(() => {
    dispatch(fetchPlaylist(props?.params?.id))
  }, []);

  return (
    <TrackList tracks={selectedPlaylist?.tracks || []}/>
  );
};

export default PlaylistPage;