import React, {FC, useState} from 'react';
import {Track} from "@/types/tracks";
import {Button, Icon} from '@gravity-ui/uikit';
import {CircleInfo, Pause, Play, TrashBin} from "@gravity-ui/icons";
import styles from "./track-item.module.css";
import {useRouter} from "next/navigation";
import {useActions} from "@/store/hooks/use-actions";
import {usePlayerValue} from "@/store/slice/player/player-selector";
import {HStack, VStack} from "@/components/stack";
import {classNames, Mods} from "@/lib/class-names/class-names";
import {useAppDispatch} from "@/store/hooks/hooks";
import {deleteTrack} from "@/store/slice/track/tracks-service";
import MyAudio from "@/components/player/audio";

interface TrackItem {
  track: Track
  active?: boolean
  activeId?: string
}

const TrackItem: FC<TrackItem> = ({track, active = false, activeId = ''}) => {
  const router = useRouter()
  const {play: playTrack, pause: pauseTrack, setActiveTrack} = useActions()
  const {active: activeTrack, pause} = usePlayerValue()
  const [isFocus, setIsFocus] = useState(false)
  const isActiveTrack = activeTrack?._id !== activeId
  const dispatch = useAppDispatch()
  const player = MyAudio

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

        <HStack max gap={'8'} className={styles.trackBtn}>
          <Button onClick={() => {
            router.push(`/tracks/${track._id}`)
          }}>
            <Icon data={CircleInfo}/>
          </Button>
          <Button onClick={delTrack}>
            <Icon data={TrashBin}/>
          </Button>

        </HStack>

      </HStack>

      {/*</Card>*/}
    </div>
  );
};

export default TrackItem
