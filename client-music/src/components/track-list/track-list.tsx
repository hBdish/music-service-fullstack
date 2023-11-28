import React, {FC, useMemo} from 'react';
import {Track} from "@/types/tracks";
import {Table, withTableActions} from "@gravity-ui/uikit";
import TrackItem from "@/components/track-list/components/track-item";

interface TrackListProps {
  tracks: Track[]
}

const MyTable = withTableActions(Table);


const columns = [
  {id: 'id'},
  {id: 'text'},
];
const getRowActions = () => {
  return [
    {
      text: 'Print', handler: () => {

      }
    },
    {
      text: 'Remove', handler: () => {
      },
    },
  ];
}

const TrackList: FC<TrackListProps> = (props) => {

  const data = useMemo(() => {
    return props.tracks.map((el) => {
      return {id: el._id, text: <TrackItem track={el}/>}
    })
  }, [props.tracks])

  return (
    <div>
      <MyTable
        data={data}
        columns={columns}
        getRowActions={getRowActions}
      />
    </div>
  );
}

export default TrackList;