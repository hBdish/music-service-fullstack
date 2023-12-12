import { HStack, useAppDispatch, VStack } from '@/shared';
import { fetchPlaylists, usePlaylistLoading } from '@/entities';
import { useEffect } from 'react';
import { StepWrapper } from '@/widgets';

const PlayListsPage = () => {
  const isLoading = usePlaylistLoading();
  const dispatch = useAppDispatch();
  // const search = useInput('');

  useEffect(() => {
    dispatch(fetchPlaylists());
  }, []);

  if (isLoading) {
    return <div>Loading</div>;
  }

  return (
    <VStack max align={'start'}>
      <HStack style={{ height: '60px' }} max justify={'center'} align={'start'}>
        <h2>Плейлисты</h2>
      </HStack>
      <StepWrapper createTrack={() => {}} />
      {/*<TrackList tracks={tracks} />*/}
    </VStack>
  );
};

export { PlayListsPage };
