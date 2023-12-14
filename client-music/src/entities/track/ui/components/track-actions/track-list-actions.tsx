import {
  getRouteTrack,
  HStack,
  InfoIcon,
  TrashIcon,
  useAppDispatch,
} from '@/shared';
import { useNavigate } from 'react-router-dom';
import React, { useEffect } from 'react';
import {
  AddInPlayList,
  deleteTrack,
  fetchPlaylists,
  usePlaylists,
} from '@/entities';
import { Button } from 'react-bootstrap';

interface TrackListActions {
  trackId: string;
}

const TrackListActions = (props: TrackListActions) => {
  const { trackId } = props;

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const playlists = usePlaylists();

  useEffect(() => {
    dispatch(fetchPlaylists());
  }, []);

  const delTrack = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    dispatch(deleteTrack(trackId));
  };

  return (
    <HStack max gap={'4'} justify={'end'} style={{ paddingRight: '8px' }}>
      <AddInPlayList playlists={playlists} trackId={trackId} />
      <Button
        onClick={() => {
          navigate(getRouteTrack(trackId));
        }}
      >
        <InfoIcon />
      </Button>
      <Button onClick={delTrack}>
        <TrashIcon />
      </Button>
    </HStack>
  );
};

export { TrackListActions };
