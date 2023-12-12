import React from 'react';
import { Button } from 'react-bootstrap';
import { FileUpload, VStack } from '@/shared';

interface StepTwo {
  setFile: (file: File) => void;
}

const StepTwo = (props: StepTwo) => {
  return (
    <VStack>
      <FileUpload setFile={props.setFile} accept={'image/*'}>
        <Button variant={'outline-light'}>Загрузить обложку</Button>
      </FileUpload>
    </VStack>
  );
};

export { StepTwo };
