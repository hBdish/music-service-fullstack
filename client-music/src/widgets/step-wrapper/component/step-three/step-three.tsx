import { FileUpload, VStack } from '@/shared';
import { Button } from 'react-bootstrap';
import React from 'react';

interface StepThree {
  setFile: (file: File) => void;
  className?: string;
}

const StepThree = (props: StepThree) => {
  return (
    <VStack gap={'16'} align={'center'} className={props.className}>
      <h5>Загрузите трек</h5>
      <FileUpload setFile={props.setFile} accept={'audio/*'}>
        <Button variant={'outline-light'}>Загрузите аудио</Button>
      </FileUpload>
    </VStack>
  );
};

export { StepThree };
