import { useEffect } from 'react';
import { fetchTracks, useTracks } from '@/entities';
import { useAppDispatch } from '@/shared';
import { TrackList } from '@/widgets/track-list/track-list';

const TracksPage = () => {
  const dispatch = useAppDispatch();
  const tracks = useTracks();

  useEffect(() => {
    dispatch(fetchTracks());
  }, []);

  return (
    <>
      <TrackList tracks={tracks} />
    </>
  );
};

export { TracksPage };
