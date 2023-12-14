import styles from './add-in-play-list.module.css';

import { PlusIcon, useAppDispatch } from '@/shared';
import { addTrackInPlayList, PlayList } from '@/entities';
import { Dropdown, DropdownButton } from 'react-bootstrap';

interface AddInPlayList {
  trackId: string;
  playlists: PlayList[];
}

const AddInPlayList = ({ trackId, playlists }: AddInPlayList) => {
  const dispatch = useAppDispatch();

  if (playlists?.length === 0) {
    return <div className={styles.popupBody}>Сначала создайте плейлист</div>;
  }

  return (
    <DropdownButton title={<PlusIcon />}>
      {playlists?.map((el) => (
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
  );
};

export { AddInPlayList };
