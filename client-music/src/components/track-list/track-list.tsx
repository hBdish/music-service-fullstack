import React, {FC} from 'react';
import {Track} from "@/types/tracks";
import TrackItem from "@/components/track-list/components/track-item";
import {VStack} from "@/components/stack";
import style from './track-list.module.css'

interface TrackListProps {
  tracks: Track[]
}


const TrackList: FC<TrackListProps> = (props) => {

  return (
    <VStack gap={'24'} className={style.table}>
      {props.tracks.map((el) =>
        <TrackItem key={el._id} track={el}/>
      )}
    </VStack>
  );
}

export default TrackList;