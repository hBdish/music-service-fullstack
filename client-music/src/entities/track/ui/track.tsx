import React, { useEffect } from 'react';
import { useAppDispatch } from '@/shared/hooks/use-app-store';
import { fetchTrack, useTrack, useTracksLoading } from '@/entities';

const Track = () => {
  const MOCK_ID = '65775a8cf63ba1696d2b2650';
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchTrack(MOCK_ID));
  }, []);

  const track = useTrack();
  const isLoading = useTracksLoading();

  if (isLoading || !track) {
    return <div>Loading</div>;
  }

  return <div>{track.name}</div>;
};

export default Track;
