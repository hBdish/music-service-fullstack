import React, {FC} from 'react';
import {Track} from "@/types/tracks";
import {Card, Icon} from '@gravity-ui/uikit';
import {Pause, Play, TrashBin} from "@gravity-ui/icons";
import styles from "./track-item.module.css";
import {useRouter} from "next/navigation";

interface TrackItem {
  track: Track
  active?: boolean
}

const TrackItem: FC<TrackItem> = ({track, active = false}) => {
  const router = useRouter()

  return (
    <Card className={styles.card} type={"action"} onClick={() => {
      router.push(`/tracks/${track._id}`)
    }}>
      <img
        alt={'img'}
        src={'https://imgholder.ru/70x70/8493a8/adb9ca&text=IMAGE+HOLDER&font=kelson'}
        width={70}
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
        <button onClick={(e) => e.stopPropagation()}>
          <Icon data={TrashBin}/>
        </button>
      </div>
      <div className={styles.controll}>
        <button onClick={(e) => e.stopPropagation()}>
          <Icon data={!active ? Play : Pause}/>
        </button>
        {!active && <div>02:20/03:01</div>}
      </div>
    </Card>
  );
};

export default TrackItem
