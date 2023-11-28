import React, {FC, useMemo} from 'react';
import {Track} from "@/types/tracks";
import {Table, withTableActions} from "@gravity-ui/uikit";
import TrackItem from "@/components/track-list/components/track-item";

interface TrackListProps {
  tracks: Track[]
}

const columns = [
  {id: 'tracks'},
];

const TrackList: FC<TrackListProps> = (props) => {

  const data = useMemo(() => {
    return props.tracks.map((el) => {
      return { tracks: <TrackItem track={el}/>}
    })
  }, [props.tracks])

  return (
    <div>
      <Table
        data={data}
        columns={columns}
      />
    </div>
  );
}

export default TrackList;