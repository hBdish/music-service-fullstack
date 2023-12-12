import { FloatingLabel, Form } from 'react-bootstrap';
import React, { ChangeEvent } from 'react';
import { useActions, useInput, VStack } from '@/shared';

interface StepOne {
  className?: string;
}

const StepOne = (props: StepOne) => {
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
      <FloatingLabel className={props.className} label={label}>
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
    <VStack gap={'16'} align={'center'}>
      <h5>Информация о треке</h5>

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
    </VStack>
  );
};

export { StepOne };
