'use client'
import React, {ChangeEvent, useEffect} from 'react';
import {Pause, Play} from "@gravity-ui/icons";
import {Button, Icon} from "@gravity-ui/uikit";
import {Volume} from '@gravity-ui/icons';
import styles from './player.module.css'
import TrackProgress from "@/components/player/track-progress/track-progress";
import {usePlayerValue, useVolumeValue} from "@/store/slice/player/player-selector";
import {useActions} from "@/store/hooks/use-actions";

let audio: HTMLAudioElement

const Player = () => {
  const {active, pause, volume, currentTime, duration} = usePlayerValue()

  const {setDuration, setCurrentTime ,setVolume ,pause: setPause, play: setPlay} = useActions()

  const setAudio = () => {
    if (active) {

      audio.src = `http://localhost:100/${active.audio}`
      audio.volume = volume / 100

      audio.onloadedmetadata = () => {
        setDuration(Math.ceil(audio.duration))
      }

      audio.ontimeupdate = () => {
        setCurrentTime(Math.ceil(audio.currentTime))
      }

      audio.play()
    }
  }

  useEffect(() => {
    if (!audio) {
      audio = new Audio()
    }
      setAudio()

  },[active])



  const onPlay = () => {
    if (pause) {
      setPlay()
      audio?.play()
    } else {
      setPause()
      audio?.pause()
    }
  }

  const changeVolume = (e: ChangeEvent<HTMLInputElement>) => {
    setVolume(Number(e.target.value))
    audio.volume = Number(e.target.value) / 100
  }

  const changeCurrentTime = (e: ChangeEvent<HTMLInputElement>) => {
    setCurrentTime(Number(e.target.value))
    audio.currentTime = Number(e.target.value)
  }

  if (!active) {
    return null
  }

  return (
    <div className={styles.player}>
      <Button onClick={onPlay}>
        <Icon  data={pause ? Play : Pause}/>
      </Button>
      <div className={styles.naming}>
          <span>
            {active?.name}
          </span>
        <span className={styles.artistName}>
            {active?.artist}
          </span>
      </div>
      <TrackProgress left={currentTime} right={duration} onChange={changeCurrentTime}/>
      <Icon data={Volume} className={styles.volume} />
      <TrackProgress left={volume} right={100} onChange={changeVolume}/>
    </div>
  );
};

export default Player;