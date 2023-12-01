import React, {FC, useState} from 'react';
import {Track} from "@/types/tracks";
import {Button, Icon} from '@gravity-ui/uikit';
import {CircleInfo, Pause, Play, TrashBin} from "@gravity-ui/icons";
import styles from "./track-item.module.css";
import {useRouter} from "next/navigation";
import {useActions} from "@/store/hooks/use-actions";
import {usePlayerValue} from "@/store/slice/player/player-selector";
import {$api} from "@/api/api";
import {HStack, VStack} from "@/components/stack";
import {classNames, Mods} from "@/lib/class-names/class-names";

interface TrackItem {
  track: Track
  active?: boolean
  activeId?: string
}

const TrackItem: FC<TrackItem> = ({track, active = false, activeId = ''}) => {
  const router = useRouter()
  const {play: playTrack, pause: pauseTrack, setActiveTrack} = useActions()
  const {active: activeTrack} = usePlayerValue()
  const [isFocus, setIsFocus] = useState(false)
  const isActiveTrack = activeTrack?._id !== activeId


  const play = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()
    if (track !== activeTrack) {
      setActiveTrack(track)
    }

    playTrack()
  }

  const deleteTrack = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()

    try {
      const response = await $api.delete('http://localhost:100/tracks/' + track._id)
      window.location.reload()
    } catch (e) {
      console.log(e)
    }
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
            <Icon data={isActiveTrack ? Play : Pause}/>
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
          <Button onClick={deleteTrack}>
            <Icon data={TrashBin}/>
          </Button>

        </HStack>

      </HStack>

      {/*</Card>*/}
    </div>
  );
};

export default TrackItem
