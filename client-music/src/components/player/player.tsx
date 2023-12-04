'use client'
import React, {ChangeEvent, useEffect} from 'react';
import {Pause, Play, Volume} from "@gravity-ui/icons";
import {Button, Icon} from "@gravity-ui/uikit";
import styles from './player.module.css'
import TrackProgress from "@/components/player/track-progress/track-progress";
import {usePlayerValue} from "@/store/slice/player/player-selector";
import {useActions} from "@/store/hooks/use-actions";
import MyAudio from "@/components/player/audio";


const Player = () => {
  const {active, pause, volume, currentTime, duration} = usePlayerValue()
  const {setDuration, setCurrentTime, setVolume, pause: setPause, play: setPlay} = useActions()
  const player = MyAudio
  const setAudio = () => {
    if (active) {

      player.setSrc(`http://localhost:100/${active.audio}`)
      player.setVolume(volume / 100)

      player.getAudio().onloadedmetadata = () => {
        setDuration(Math.ceil(player.getAudio().duration))
      }

      player.getAudio().ontimeupdate = () => {
        setCurrentTime(Math.ceil(player.getAudio().currentTime))
      }

      player.play()
    }
  }

  useEffect(() => {
    setAudio()

  }, [active])


  const onPlay = () => {
    if (pause) {
      setPlay()
      player.play()
    } else {
      setPause()
      player.pause()
    }
  }

  const changeVolume = (e: ChangeEvent<HTMLInputElement>) => {
    setVolume(Number(e.target.value))
    player.setVolume(Number(e.target.value) / 100)
  }

  const changeCurrentTime = (e: ChangeEvent<HTMLInputElement>) => {
    const currentTime = Number(e.target.value)

    setCurrentTime(currentTime)
    player.setCurrentTime(currentTime)
  }

  if (!active) {
    return null
  }

  return (
    <div className={styles.player}>
      <Button onClick={onPlay}>
        <Icon data={pause ? Play : Pause}/>
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
      <Icon data={Volume} className={styles.volume}/>
      <TrackProgress left={volume} right={100} onChange={changeVolume}/>
    </div>
  );
};

export default Player;