import { FileUpload, VStack } from '@/shared';
import { Button } from 'react-bootstrap';

interface StepThree {
  setFile: (file: File) => void;
}

const StepThree = (props: StepThree) => {
  return (
    <VStack>
      <FileUpload setFile={props.setFile} accept={'audio/*'}>
        <Button variant={'outline-light'}>Загрузите аудио</Button>
      </FileUpload>
    </VStack>
  );
};

export { StepThree };
