import {PlayList} from '@/types/play-list';
import React from 'react';
import {Card} from "@gravity-ui/uikit";
import styles from './play-list-item.module.css'

interface PlayListItem {
  playlist: PlayList
}

const PlayListItem = (props: PlayListItem) => {
  const {playlist} = props
  return (
    <Card className={styles.card}>
      {playlist.name}
    </Card>
  );
};

export default PlayListItem;