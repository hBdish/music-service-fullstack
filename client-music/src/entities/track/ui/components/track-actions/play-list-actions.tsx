import { deleteTrackFromPlayList } from '@/entities';
import React from 'react';
import { HStack, TrashIcon, useAppDispatch } from '@/shared';
import { Button } from 'react-bootstrap';

interface PlayListActions {
  trackId: string;
  playListId: string;
}

const PlayListActions = (props: PlayListActions) => {
  const { trackId, playListId } = props;
  const dispatch = useAppDispatch();

  const delTrackFromPlayList = async (
    e: React.MouseEvent<HTMLButtonElement>,
  ) => {
    e.stopPropagation();

    dispatch(
      deleteTrackFromPlayList({
        trackId,
        playListId,
      }),
    );
  };

  return (
    <HStack max justify={'end'} style={{ paddingRight: '8px' }}>
      <Button variant={'outline-danger'} onClick={delTrackFromPlayList}>
        <TrashIcon />
      </Button>
    </HStack>
  );
};

export { PlayListActions };
