import React from 'react';
import { Button } from 'react-bootstrap';
import { FileUpload, VStack } from '@/shared';

interface StepTwo {
  setFile: (file: File) => void;
  className?: string;
}

const StepTwo = (props: StepTwo) => {
  return (
    <VStack gap={'16'} align={'center'} className={props.className}>
      <h5>Загрузите трек</h5>
      <FileUpload setFile={props.setFile} accept={'image/*'}>
        <Button variant={'outline-light'}>Загрузить обложку</Button>
      </FileUpload>
    </VStack>
  );
};

export { StepTwo };
