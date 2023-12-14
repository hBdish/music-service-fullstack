import React, { useEffect } from 'react';
import { TrackList } from '@/widgets';
import { useParams } from 'react-router-dom';
import { fetchPlaylist, useSelectedPlaylist } from '@/entities';
import { useAppDispatch } from '@/shared';

const PlayListInfoPage = () => {
  const { id: playListId } = useParams<{ id: string }>();
  const selectedPlaylist = useSelectedPlaylist();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!playListId) return;

    dispatch(fetchPlaylist(playListId));
  }, []);

  return (
    <TrackList
      playListId={playListId}
      tracks={selectedPlaylist?.tracks || []}
    />
  );
};

export { PlayListInfoPage };
