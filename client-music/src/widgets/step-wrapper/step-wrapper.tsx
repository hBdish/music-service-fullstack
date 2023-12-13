import { FC, useState } from 'react';
import { Button, Pagination } from 'react-bootstrap';
import { StepOne } from '@/widgets/step-wrapper/component/step-one/step-one';
import { StepTwo } from '@/widgets/step-wrapper/component/step-two/step-two';
import { StepThree } from '@/widgets/step-wrapper/component/step-three/step-three';
import { HStack, LeftIcon, RightIcon, VStack } from '@/shared';
import styles from './step-wrapper.module.css';

interface StepWrapper {
  setPicture: (file: File) => void;
  setAudio: (file: File) => void;
  createTrack: () => void;
  canCreateTrack?: boolean;
}

const StepWrapper: FC<StepWrapper> = (props) => {
  const { canCreateTrack = false, createTrack } = props;
  const [step, setStep] = useState(1);

  const render = () => {
    switch (step) {
      case 1:
        return <StepOne className={styles.content} />;
      case 2:
        return (
          <StepTwo className={styles.content} setFile={props.setPicture} />
        );
      case 3:
        return (
          <StepThree className={styles.content} setFile={props.setAudio} />
        );
    }
  };

  const next = () => {
    setStep((prevState) => {
      if (prevState === 3) return prevState;

      return ++prevState;
    });
  };

  const back = () => {
    setStep((prevState) => {
      if (prevState === 1) return prevState;

      return --prevState;
    });
  };

  const items = [];
  for (let number = 1; number <= 3; number++) {
    items.push(
      <Pagination.Item
        key={number}
        onClick={() => {
          setStep(number);
        }}
        active={number === step}
      >
        {number}
      </Pagination.Item>,
    );
  }

  return (
    <HStack max>
      <Button variant={'dark'} onClick={back}>
        <LeftIcon />
      </Button>
      <VStack max align={'center'} justify={'between'}>
        {render()}
        <VStack align={'center'} gap={'24'}>
          <Button onClick={createTrack} disabled={!canCreateTrack}>
            Добавить трек
          </Button>
          <Pagination className={styles.radioButton} size="lg">
            {items}
          </Pagination>
        </VStack>
      </VStack>
      <Button variant={'dark'} onClick={next}>
        <RightIcon />
      </Button>
    </HStack>
  );
};

export { StepWrapper };
