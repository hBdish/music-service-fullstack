import React, {FC} from 'react';
import {Track} from "@/types/tracks";
import TrackItem from "@/components/track-list/components/track-item";
import {VStack} from "@/components/stack";
import styles from './track-list.module.css'
import {Card} from "@gravity-ui/uikit";

interface TrackListProps {
  tracks: Track[]
}


const TrackList: FC<TrackListProps> = (props) => {

  return (

    <VStack max align={"center"} className={styles.table}>
      <Card
        className={styles.cardBody}
      >
        {props.tracks.map((el) =>
          <TrackItem activeId={el._id} key={el._id} track={el}/>
        )}
      </Card>
    </VStack>

  );
}

export default TrackList;