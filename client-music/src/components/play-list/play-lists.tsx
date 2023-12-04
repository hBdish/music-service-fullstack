import React from 'react';
import PlayListItem from "@/components/play-list/components/play-list-item/play-list-item";
import {PlayList} from "@/types/play-list";
import {VStack} from "@/components/stack";
import CreatePlayList from "@/components/play-list/components/create-play-list/create-play-list";

interface PlayLists {
  playlists: PlayList[]
}

const PlayLists = (props: PlayLists) => {
  const {playlists} = props

  return (
    <VStack gap={'16'} max align={"center"}>
      <CreatePlayList/>
      {
        playlists?.map(el => <PlayListItem key={el._id} playlist={el}/>
        )
      }
    </VStack>
  );
};

export default PlayLists;