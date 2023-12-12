import React from 'react';
import { VStack } from '@/shared';
import Track from '@/entities/track/ui/track';
import styles from './track-list.module.css';

interface TrackListProps {
  tracks: Track[];
  activeId?: string;
  playListId?: string;
}

const TrackList = (props: TrackListProps) => {
  const { tracks, playListId, activeId } = props;

  return (
    <VStack max align={'center'} className={styles.table}>
      <div className={styles.cardBody}>
        {tracks.map((track) => (
          <Track
            playListId={playListId}
            activeId={activeId}
            key={track._id}
            track={track}
          />
        ))}
      </div>
    </VStack>
  );
};
export { TrackList };
