import styles from './step-one.module.css';
import { FloatingLabel, Form } from 'react-bootstrap';
import React, { ChangeEvent } from 'react';
import { useActions, useInput } from '@/shared';

const StepOne = () => {
  const name = useInput('');
  const artist = useInput('');
  const text = useInput('');
  const { setName, setText, setArtist } = useActions();

  const textInput = (
    value: string,
    label: string,
    onChange: (e: ChangeEvent<HTMLInputElement>) => void,
    onBlur: () => void,
  ) => {
    return (
      <FloatingLabel label={label}>
        <Form.Control
          onChange={onChange}
          onBlur={onBlur}
          value={value}
          type="text"
          placeholder="track 1"
        />
      </FloatingLabel>
    );
  };

  return (
    <div className={styles.card}>
      {textInput(
        name.value,
        'Название трека',
        (e) => name.onChange(e.target.value),
        () => {
          setName(name.value);
        },
      )}
      {textInput(
        artist.value,
        'Имя испонителя',
        (e) => artist.onChange(e.target.value),
        () => {
          setArtist(artist.value);
        },
      )}
      {textInput(
        text.value,
        'Текст песни',
        (e) => text.onChange(e.target.value),
        () => {
          setText(text.value);
        },
      )}
      {/*<TextInput*/}
      {/*  onBlur={() => {*/}
      {/*    setName(name.value);*/}
      {/*  }}*/}
      {/*  value={name.value}*/}
      {/*  onChange={(e) => name.onChange(e.target.value)}*/}
      {/*  label={'Название трека'}*/}
      {/*/>*/}
      {/*<TextInput*/}
      {/*  onBlur={() => {*/}
      {/*    setArtist(artist.value);*/}
      {/*  }}*/}
      {/*  value={artist.value}*/}
      {/*  onChange={(e) => artist.onChange(e.target.value)}*/}
      {/*  label={'Имя испонителя'}*/}
      {/*/>*/}
      {/*<TextArea*/}
      {/*  onBlur={() => {*/}
      {/*    setText(text.value);*/}
      {/*  }}*/}
      {/*  value={text.value}*/}
      {/*  onChange={(e) => text.onChange(e.target.value)}*/}
      {/*  rows={3}*/}
      {/*  size={'l'}*/}
      {/*  placeholder="Текст песнип"*/}
      {/*/>*/}
    </div>
  );
};

export { StepOne };
