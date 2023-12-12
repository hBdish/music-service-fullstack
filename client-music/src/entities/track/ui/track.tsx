import React from 'react';
import { useActiveTrack, useTrackPause, useTracksLoading } from '@/entities';
import { Card, ImgButton, myAudio, useActions, VStack } from '@/shared';
import { Track } from '../model/types/tracks';

interface TrackProps {
  track: Track;
  activeId?: string;
  playListId?: string;
}

const Track = (props: TrackProps) => {
  const { track } = props;
  const player = myAudio;
  const { play: playTrack, pause: pauseTrack, setActiveTrack } = useActions();
  const activeTrack = useActiveTrack();
  const isLoading = useTracksLoading();
  const pause = useTrackPause();

  const play = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();

    if (track._id !== activeTrack?._id) {
      setActiveTrack(track);
      player.play();
      playTrack();
      return;
    }

    if (pause) {
      player.play();
      playTrack();
    } else {
      player.pause();
      pauseTrack();
    }
  };

  if (isLoading || !track) {
    return <div>Loading</div>;
  }

  return (
    <Card>
      <ImgButton
        pause={pause}
        active={activeTrack?._id === track._id}
        onClickPause={play}
        imgSrc={`http://localhost:100/${track.picture}`}
        style={{ marginLeft: '8px' }}
      />
      <VStack max style={{ paddingLeft: '4px' }}>
        <span>{track.name}</span>
        <span>{track.artist}</span>
      </VStack>
    </Card>
  );
};

export default Track;
