import React, {FC} from 'react';
import {Track} from "@/types/tracks";
import TrackItem from "@/components/track-list/components/track-item";
import {VStack} from "@/components/stack";
import styles from './track-list.module.css'
import {Card} from "@gravity-ui/uikit";

interface TrackListProps {
  tracks: Track[]
  playListId?: string
}


const TrackList: FC<TrackListProps> = (props) => {
  const {tracks, playListId} = props

  return (

    <VStack max align={"center"} className={styles.table}>
      <Card
        className={styles.cardBody}
      >
        {tracks.map((el) =>
          <TrackItem playListId={playListId} activeId={el._id} key={el._id} track={el}/>
        )}
      </Card>
    </VStack>

  );
}

export default TrackList;