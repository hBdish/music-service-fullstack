import React from 'react';
import FileUpload from "@/components/file-upload/file-upload";
import {Button} from "@gravity-ui/uikit";
import {VStack} from "@/components/stack";

interface StepThree {
  setFile: Function
}

const StepThree = (props: StepThree) => {
  return (
    <VStack>
      <FileUpload setFile={props.setFile} accept={'audio/*'}>
        <Button view={'outlined-action'}>
          Загрузите аудио
        </Button>
      </FileUpload>
    </VStack>
  );
};

export default StepThree;