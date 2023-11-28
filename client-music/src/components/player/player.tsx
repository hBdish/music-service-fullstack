'use client'
import React, {useEffect} from 'react';
import {Pause, Play} from "@gravity-ui/icons";
import {Icon} from "@gravity-ui/uikit";
import {Volume} from '@gravity-ui/icons';
import styles from './player.module.css'
import TrackProgress from "@/components/player/track-progress/track-progress";
import {buildSelector} from "@/store/hooks/build-selector";
import {useActiveValue, useVolumeValue} from "@/store/slice/player-selector";
import {useActions} from "@/store/hooks/use-actions";

const Player = () => {
  const {pause} = useActiveValue()


  const {pause: setPause, play: setPlay} = useActions()

  const onPlay = () => {
    if (pause) {
      setPlay()
    } else {
      setPause()
    }

  }

  return (
    <div className={styles.player}>
      <button onClick={onPlay}>
        <Icon  data={pause ? Play : Pause}/>
      </button>
      <div className={styles.naming}>
          <span>
            {'track.name'}
          </span>
        <span className={styles.artistName}>
            {'track.artist'}
          </span>
      </div>
      <TrackProgress left={0} right={100} onChange={() => {}}/>
      <Icon data={Volume} className={styles.volume} />
      <TrackProgress left={0} right={100} onChange={() => {}}/>
    </div>
  );
};

export default Player;