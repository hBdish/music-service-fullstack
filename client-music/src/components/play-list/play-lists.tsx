import React from 'react';
import PlayListItem from "@/components/play-list/components/play-list-item/play-list-item";
import {PlayList} from "@/types/play-list";

interface PlayLists {
  playlists: PlayList[]
}

const PlayLists = (props: PlayLists) => {
  const {playlists} = props

  return (
    <div>
      {
        playlists?.map(el => <PlayListItem key={el._id} playlist={el}/>
        )
      }
    </div>
  );
};

export default PlayLists;