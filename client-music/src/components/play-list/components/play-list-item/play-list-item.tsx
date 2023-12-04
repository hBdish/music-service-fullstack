import {PlayList} from '@/types/play-list';
import React from 'react';

interface PlayListItem {
  playlist: PlayList
}

const PlayListItem = (props: PlayListItem) => {
  const {playlist} = props
  return (
    <div>
      {playlist.name}
    </div>
  );
};

export default PlayListItem;