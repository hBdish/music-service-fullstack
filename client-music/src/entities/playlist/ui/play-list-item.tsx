import styles from './play-list-item.module.css';
import { useNavigate } from 'react-router-dom';
import { HStack, useAppDispatch, VStack } from '@/shared';
import { deletePlaylist, PlayList } from '@/entities';
import { Button } from 'react-bootstrap';

interface PlayListItem {
  playlist: PlayList;
}

const PlayListItem = (props: PlayListItem) => {
  const { playlist } = props;
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  return (
    <div className={styles.card}>
      <VStack max gap={'24'} align={'center'} justify={'center'}>
        {playlist.name}
        <HStack gap={'16'}>
          <Button
            onClick={() => {
              navigate(`/play-lists/${playlist._id}`);
            }}
            variant={'outline-info'}
          >
            {/*<Icon data={CircleInfo} />*/} i
          </Button>
          <Button
            onClick={() => {
              dispatch(deletePlaylist(playlist._id));
            }}
            variant={'outline-danger'}
          >
            {/*<Icon data={TrashBin} />*/}Del
          </Button>
        </HStack>
      </VStack>
    </div>
  );
};

export { PlayListItem };
