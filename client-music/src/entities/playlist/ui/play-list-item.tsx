import styles from './play-list-item.module.css';
import { useNavigate } from 'react-router-dom';
import {
  getRoutePlaylistsItem,
  HStack,
  InfoIcon,
  TrashIcon,
  useAppDispatch,
} from '@/shared';
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
      <HStack max gap={'8'} align={'center'} justify={'between'}>
        <span className={styles.name}>{playlist.name}</span>
        <HStack max gap={'8'} justify={'end'}>
          <Button
            onClick={() => {
              navigate(getRoutePlaylistsItem(playlist._id));
            }}
            variant={'outline-info'}
          >
            <InfoIcon />
          </Button>
          <Button
            onClick={() => {
              dispatch(deletePlaylist(playlist._id));
            }}
            variant={'outline-danger'}
          >
            <TrashIcon />
          </Button>
        </HStack>
      </HStack>
    </div>
  );
};

export { PlayListItem };
