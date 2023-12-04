import React, {FC, useRef, useState} from 'react';
import {Track} from "@/types/tracks";
import {Button, Icon, Popup} from '@gravity-ui/uikit';
import {CircleInfo, FolderPlus, Pause, Play, TrashBin} from "@gravity-ui/icons";
import styles from "./track-item.module.css";
import {useRouter} from "next/navigation";
import {useActions} from "@/store/hooks/use-actions";
import {usePlayerValue} from "@/store/slice/player/player-selector";
import {HStack, VStack} from "@/components/stack";
import {classNames, Mods} from "@/lib/class-names/class-names";
import {useAppDispatch} from "@/store/hooks/hooks";
import {deleteTrack} from "@/store/slice/track/tracks-service";
import MyAudio from "@/components/player/audio";
import AddInPlayList from "@/components/play-list/components/add-in-play-list/add-in-play-list";
import {usePlaylistValue} from "@/store/slice/play-list/play-list-selector";

interface TrackItem {
  track: Track
  active?: boolean
  activeId?: string
}

const TrackItem: FC<TrackItem> = ({track, active = false, activeId = ''}) => {
  const router = useRouter()
  const {play: playTrack, pause: pauseTrack, setActiveTrack} = useActions()
  const {active: activeTrack, pause} = usePlayerValue()
  const {playlists} = usePlaylistValue()
  const [isFocus, setIsFocus] = useState(false)
  const isActiveTrack = activeTrack?._id !== activeId
  const dispatch = useAppDispatch()
  const player = MyAudio
  const buttonRef = useRef(null);
  const [open, setOpen] = useState(false);


  const play = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()

    if (track._id !== activeTrack?._id) {
      setActiveTrack(track)
      player.play()
      playTrack()
      return
    }

    if (pause) {
      player.play()
      playTrack()
    } else {
      player.pause()
      pauseTrack()
    }
  }


  const delTrack = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()
    dispatch(deleteTrack(track._id))
  }

  const mods: Mods = {
    [styles.isFocused]: isFocus,
    [styles.isActive]: !isActiveTrack
  }

  return (
    <div
      className={classNames(styles.card, mods, [])}
      onMouseEnter={() => setIsFocus(true)}
      onMouseLeave={() => setIsFocus(false)}
    >
      <HStack
      >
        <div className={styles.imgBtn}>
          <img
            className={classNames(styles.img, mods, [])}
            alt={'img'}
            src={`http://localhost:100/${track.picture}`}
          />

          <Button
            className={classNames(styles.playBtn, mods, [])}
            onClick={play}
          >
            <Icon data={(isActiveTrack || pause) ? Play : Pause}/>
          </Button>
        </div>


        <VStack max>
          <span>
            {track.name}
          </span>
          <span className={styles.artistName}>
            {track.artist}
          </span>
        </VStack>

        <HStack max gap={'4'} className={styles.trackBtn}>
          <Button ref={buttonRef} onClick={() => setOpen((prevOpen) => !prevOpen)}>
            <Icon data={FolderPlus}/>
          </Button>
          <Popup anchorRef={buttonRef} open={open} placement="bottom">
            <AddInPlayList playLists={playlists} trackId={track._id}/>
          </Popup>
          <Button onClick={() => {
            router.push(`/tracks/${track._id}`)
          }}
          >
            <Icon data={CircleInfo}/>
          </Button>
          <Button onClick={delTrack}>
            <Icon data={TrashBin}/>
          </Button>


        </HStack>
      </HStack>
    </div>
  );
};

export default TrackItem
