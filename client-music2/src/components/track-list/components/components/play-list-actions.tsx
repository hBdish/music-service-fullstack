import React from 'react';
import {useAppDispatch} from "@/store/hooks/hooks";
import {Button, Icon} from "@gravity-ui/uikit";
import {TrashBin} from "@gravity-ui/icons";
import {deleteTrackFromPlayList} from "@/store/slice/play-list/play-list-service";

interface PlayListActions {
  trackId: string
  playListId: string
}

const PlayListActions = (props: PlayListActions) => {
  const {trackId, playListId} = props
  const dispatch = useAppDispatch()

  const delTrackFromPlayList = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()

    dispatch(deleteTrackFromPlayList({
      trackId, playListId
    }))
  }


  return (
    <>
      <Button onClick={delTrackFromPlayList}>
        <Icon data={TrashBin}/>
      </Button>
    </>
  );
};

export default PlayListActions;