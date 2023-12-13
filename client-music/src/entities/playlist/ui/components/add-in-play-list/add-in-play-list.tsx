import { useEffect } from 'react';

import styles from './add-in-play-list.module.css';

import { useAppDispatch } from '@/shared';
import { addTrackInPlayList, fetchPlaylists, PlayList } from '@/entities';
import { Dropdown, DropdownButton } from 'react-bootstrap';

interface AddInPlayList {
  trackId: string;
  playLists: PlayList[];
}

const AddInPlayList = ({ trackId, playLists = [] }: AddInPlayList) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchPlaylists());
  }, []);

  if (playLists?.length === 0) {
    return <div className={styles.popupBody}>Сначала создайте плейлист</div>;
  }

  return (
    <div className={styles.popupBody}>
      <DropdownButton title={'Drop small'}>
        {playLists?.map((el) => (
          <Dropdown.Item
            onClick={() => {
              dispatch(addTrackInPlayList({ trackId, playListId: el._id }));
            }}
            key={el._id}
            eventKey={el._id}
          >
            {el.name}
          </Dropdown.Item>
        ))}
      </DropdownButton>
    </div>
  );
};

export { AddInPlayList };
