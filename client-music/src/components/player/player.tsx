'use client'
import React from 'react';
import {Pause, Play} from "@gravity-ui/icons";
import {Icon} from "@gravity-ui/uikit";
import {Volume} from '@gravity-ui/icons';
import styles from './player.module.css'
import TrackProgress from "@/components/player/track-progress/track-progress";

const Player = () => {
  const active = false

  return (
    <div className={styles.player}>
      <Icon data={!active ? Play : Pause}/>
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