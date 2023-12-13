import {
  getRouteTrack,
  InfoIcon,
  PlusIcon,
  TrashIcon,
  useAppDispatch,
} from '@/shared';
import { useNavigate } from 'react-router-dom';
import React, { useRef, useState } from 'react';
import { AddInPlayList, deleteTrack, usePlaylists } from '@/entities';
import { Button } from 'react-bootstrap';

interface TrackListActions {
  trackId: string;
}

const TrackListActions = (props: TrackListActions) => {
  const { trackId } = props;

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const buttonRef = useRef(null);
  const [open, setOpen] = useState(false);
  const playlists = usePlaylists();

  const delTrack = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    dispatch(deleteTrack(trackId));
  };

  return (
    <>
      {open ? (
        <Button
          ref={buttonRef}
          onClick={() => setOpen((prevOpen) => !prevOpen)}
        >
          <PlusIcon />
        </Button>
      ) : (
        <AddInPlayList playlists={playlists} trackId={trackId} />
      )}

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
    </>
  );
};

export { TrackListActions };
