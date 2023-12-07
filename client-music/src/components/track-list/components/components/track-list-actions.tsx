import React, {useRef, useState} from 'react';
import {Button, Icon, Popup} from "@gravity-ui/uikit";
import {CircleInfo, FolderPlus, TrashBin} from "@gravity-ui/icons";
import AddInPlayList from "@/components/play-list/components/add-in-play-list/add-in-play-list";
import {useRouter} from "next/navigation";
import {deleteTrack} from "@/store/slice/track/tracks-service";
import {useAppDispatch} from "@/store/hooks/hooks";
import {usePlaylistValue} from "@/store/slice/play-list/play-list-selector";

interface TrackListActions {
  trackId: string

}

const TrackListActions = (props: TrackListActions) => {
  const {trackId} = props

  const dispatch = useAppDispatch()
  const router = useRouter()
  const buttonRef = useRef(null);
  const [open, setOpen] = useState(false);
  const {playlists} = usePlaylistValue()

  const delTrack = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()
    dispatch(deleteTrack(trackId))
  }

  return (
    <>
      <Button ref={buttonRef} onClick={() => setOpen((prevOpen) => !prevOpen)}>
        <Icon data={FolderPlus}/>
      </Button>
      <Popup anchorRef={buttonRef} open={open} placement="bottom">
        <AddInPlayList playLists={playlists} trackId={trackId}/>
      </Popup>
      <Button onClick={() => {
        router.push(`/tracks/${trackId}`)
      }}
      >
        <Icon data={CircleInfo}/>
      </Button>
      <Button onClick={delTrack}>
        <Icon data={TrashBin}/>
      </Button>
    </>
  );
};

export default TrackListActions;