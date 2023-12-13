import styles from './create-play-list.module.css';
import { useRef, useState } from 'react';
import {
  classNames,
  PlusIcon,
  useAppDispatch,
  useInput,
  useOutsideEvent,
  VStack,
} from '@/shared';
import { Button, FloatingLabel, Form } from 'react-bootstrap';
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
      <>
        {cardIsFocused && (
          <VStack
            className={styles.content}
            gap={'16'}
            max
            align={'center'}
            justify={'center'}
          >
            <FloatingLabel controlId="floatingInput" label="Название">
              <Form.Control
                value={name.value}
                onChange={(e) => name.onChange(e.target.value)}
                type="text"
                placeholder="name@example.com"
              />
            </FloatingLabel>
            <Button variant={'outline-light'} onClick={crPlaylist}>
              Создать
            </Button>
          </VStack>
        )}
        {!cardIsFocused && (
          <VStack
            className={styles.content}
            max
            align={'center'}
            justify={'center'}
          >
            <Button variant={'outline-light'} onClick={changeFocus(true)}>
              <PlusIcon />
            </Button>
          </VStack>
        )}
      </>
    </div>
  );
};

export { CreatePlayList };
