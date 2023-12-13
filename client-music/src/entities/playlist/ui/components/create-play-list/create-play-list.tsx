import styles from './create-play-list.module.css';
import { useRef, useState } from 'react';
import {
  classNames,
  useAppDispatch,
  useInput,
  useOutsideEvent,
  VStack,
} from '@/shared';
import { Button } from 'react-bootstrap';
import { cretePlaylist } from '@/entities';

const CreatePlayList = () => {
  const [cardIsFocused, setCardIsFocused] = useState(false);
  const ref = useRef(null);
  const dispatch = useAppDispatch();
  const name = useInput('');

  useOutsideEvent(ref, () => {
    setCardIsFocused(false);
  });

  function changeFocus(focus: boolean) {
    return () => {
      setCardIsFocused(focus);
    };
  }

  const crPlaylist = () => {
    dispatch(cretePlaylist(name.value));
  };

  return (
    <div
      ref={ref}
      className={classNames(
        styles.createCard,
        { [styles.cardIsFocused]: cardIsFocused },
        [],
      )}
    >
      <div style={{ width: '100%', height: '100%' }}>
        {cardIsFocused && (
          <VStack
            className={styles.content}
            gap={'16'}
            max
            align={'center'}
            justify={'center'}
          >
            {/*<Text*/}
            {/*  value={name.value}*/}
            {/*  onChange={(e) => name.onChange(e.target.value)}*/}
            {/*/>*/}
            <Button variant={'outline-light'} onClick={crPlaylist}>
              Создать
            </Button>
          </VStack>
        )}
        {!cardIsFocused && (
          <VStack className={styles.content} max align={'center'}>
            <Button variant={'outline-light'} onClick={changeFocus(true)}>
              {/*<Icon data={Plus} />*/}
              Add
            </Button>
          </VStack>
        )}
      </div>
    </div>
  );
};

export { CreatePlayList };
