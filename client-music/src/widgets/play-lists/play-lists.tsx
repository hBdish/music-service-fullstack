import { CreatePlayList, PlayList, PlayListItem } from '@/entities';
import { VStack } from '@/shared';

interface PlayLists {
  playlists: PlayList[];
}

const PlayLists = (props: PlayLists) => {
  const { playlists } = props;

  return (
    <VStack gap={'16'} max align={'center'}>
      <CreatePlayList />
      {playlists?.map((el) => <PlayListItem key={el._id} playlist={el} />)}
    </VStack>
  );
};

export { PlayLists };
