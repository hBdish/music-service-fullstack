import React, {FC, useState} from 'react';
import {Track} from "@/types/tracks";
import {Button, Icon} from '@gravity-ui/uikit';
import {Pause, Play} from "@gravity-ui/icons";
import styles from "./track-item.module.css";
import {useActions} from "@/store/hooks/use-actions";
import {usePlayerValue} from "@/store/slice/player/player-selector";
import {HStack, VStack} from "@/components/stack";
import {classNames, Mods} from "@/lib/class-names/class-names";
import MyAudio from "@/components/player/audio";
import TrackListActions from "@/components/track-list/components/components/track-list-actions";
import PlayListActions from "@/components/track-list/components/components/play-list-actions";

interface TrackItem {
  track: Track
  activeId?: string
  playListId?: string
}

const TrackItem: FC<TrackItem> = ({track, activeId = '', playListId}) => {
  const {play: playTrack, pause: pauseTrack, setActiveTrack} = useActions()
  const {active: activeTrack, pause} = usePlayerValue()
  const [isFocus, setIsFocus] = useState(false)
  const isActiveTrack = activeTrack?._id !== activeId
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
          {
            typeof playListId === 'undefined' ?
              <TrackListActions trackId={track._id}/> :
              <PlayListActions playListId={playListId} trackId={track._id}/>
          }

        </HStack>
      </HStack>
    </div>
  );
};

export default TrackItem
