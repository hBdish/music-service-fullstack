import Track from '@/entities/track/ui/track';
import { useEffect } from 'react';
import { fetchTracks, useTracks } from '@/entities';
import { useAppDispatch } from '@/shared';

const TracksPage = () => {
  const dispatch = useAppDispatch();
  const tracks = useTracks();

  useEffect(() => {
    dispatch(fetchTracks());
  }, []);

  return (
    <>
      {tracks.map((track) => (
        <Track key={track._id} track={track} />
      ))}
    </>
  );
};

export { TracksPage };
