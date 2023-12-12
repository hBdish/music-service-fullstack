import React, { ChangeEvent, useEffect } from 'react';
import {
  HStack,
  myAudio,
  PauseIcon,
  PlayIcon,
  useActions,
  VolumeIcon,
} from '@/shared';
import styles from './player.module.css';
import { Button } from 'react-bootstrap';
import TrackProgress from './components/track-progress/track-progress';
import TrackVolume from './components/track-volume/track-volume';
import {
  useActiveTrack,
  useTrackCurrentTime,
  useTrackDuration,
  useTrackPause,
  useTrackVolume,
} from '@/entities';

const Player = () => {
  const player = myAudio;
  const {
    setDuration,
    setCurrentTime,
    setVolume,
    pause: setPause,
    play: setPlay,
  } = useActions();

  const volume = useTrackVolume();
  const active = useActiveTrack();
  const pause = useTrackPause();
  const currentTime = useTrackCurrentTime();
  const duration = useTrackDuration();

  useEffect(() => {
    setAudio();
  }, [active]);

  const setAudio = () => {
    if (active) {
      player.setSrc(`http://localhost:100/${active.audio}`);
      player.setVolume(volume / 100);

      player.getAudio().onloadedmetadata = () => {
        setDuration(Math.ceil(player.getAudio().duration));
      };

      player.getAudio().ontimeupdate = () => {
        setCurrentTime(Math.ceil(player.getAudio().currentTime));
      };

      player.play();
    }
  };

  const onPlay = () => {
    if (pause) {
      setPlay();
      player.play();
    } else {
      setPause();
      player.pause();
    }
  };

  const changeVolume = (e: ChangeEvent<HTMLInputElement>) => {
    setVolume(Number(e.target.value));
    player.setVolume(Number(e.target.value) / 100);
  };

  const changeCurrentTime = (e: ChangeEvent<HTMLInputElement>) => {
    const currentTime = Number(e.target.value);

    setCurrentTime(currentTime);
    player.setCurrentTime(currentTime);
  };

  if (!active) {
    return null;
  }

  return (
    <HStack className={styles.player} justify={'between'}>
      <HStack gap={'8'}>
        <Button onClick={onPlay}>{pause ? <PlayIcon /> : <PauseIcon />}</Button>
        <div className={styles.naming}>
          <span className={'class="b-marquee__text"'}>{active?.name}</span>
          <span className={styles.artistName}>{active?.artist}</span>
        </div>
        <TrackProgress
          left={currentTime}
          right={duration}
          onChange={changeCurrentTime}
        />
      </HStack>
      <HStack gap={'8'}>
        <VolumeIcon />

        <TrackVolume left={volume} right={100} onChange={changeVolume} />
      </HStack>
    </HStack>
  );
};

export { Player };
