import {
  CreatePlayList,
  PlayListItem,
  usePlaylistLoading,
  usePlaylists,
} from '@/entities';
import { VStack } from '@/shared';

interface PlayLists {}

const PlayLists = () => {
  const isLoading = usePlaylistLoading();
  const playlists = usePlaylists();

  if (isLoading) {
    return <>Loading</>;
  }

  return (
    <VStack gap={'16'} max align={'center'}>
      <CreatePlayList />
      {Array.isArray(playlists) ? (
        playlists?.map((el) => <PlayListItem key={el._id} playlist={el} />)
      ) : (
        <></>
      )}
    </VStack>
  );
};

export { PlayLists };
