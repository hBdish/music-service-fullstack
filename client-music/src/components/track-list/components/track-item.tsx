import React, {FC} from 'react';
import {Track} from "@/types/tracks";
import {Button, Card, Icon, useActionHandlers} from '@gravity-ui/uikit';
import {Pause, Play, TrashBin} from "@gravity-ui/icons";
import styles from "./track-item.module.css";
import {useRouter} from "next/navigation";
import {useActions} from "@/store/hooks/use-actions";
import {usePlayerValue} from "@/store/slice/player/player-selector";

interface TrackItem {
  track: Track
  active?: boolean
}

const TrackItem: FC<TrackItem> = ({track, active = false}) => {
  const router = useRouter()
  const { play: playTrack, pause: pauseTrack, setActiveTrack} = useActions()
  const {active: activeTrack} = usePlayerValue()
  const play = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()
    if (track !== activeTrack) {
      setActiveTrack(track)
    }

    playTrack()
  }

  return (
    <Card className={styles.card} type={"action"} onClick={() => {
      router.push(`/tracks/${track._id}`)
    }}>
      <img
        alt={'img'}
        src={`http://localhost:100/${track.picture}`}
        width={120}
        height={70}
      />
      <div className={styles.center}>
        <div className={styles.naming}>
          <span>
            {track.name}
          </span>
            <span className={styles.artistName}>
            {track.artist}
          </span>
        </div>
        <Button onClick={(e) => e.stopPropagation()}>
          <Icon data={TrashBin}/>
        </Button>
      </div>
      <div className={styles.controll}>
        <Button onClick={play}>
          <Icon data={!active ? Play : Pause}/>
        </Button>
        {!active && <div>02:20/03:01</div>}
      </div>
    </Card>
  );
};

export default TrackItem
