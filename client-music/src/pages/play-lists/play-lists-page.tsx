import { HStack, useInput, VStack } from '@/shared';
import { fetchPlaylists, usePlaylistLoading } from '@/entities';
import { useEffect } from 'react';
import { useAppDispatch } from '@/shared/hooks/use-app-store';

const PlayListsPage = () => {
  const isLoading = usePlaylistLoading();
  const dispatch = useAppDispatch();
  const search = useInput('');

  useEffect(() => {
    dispatch(fetchPlaylists());
  }, []);

  if (isLoading) {
    return <div>Loading</div>;
  }

  return (
    <VStack>
      <HStack max justify={'center'}>
        <h2>Плейлисты</h2>
      </HStack>

      {/*<TrackList tracks={tracks} />*/}
    </VStack>
  );
};

export { PlayListsPage };
