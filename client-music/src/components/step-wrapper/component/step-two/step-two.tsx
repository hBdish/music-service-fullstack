import React from 'react';
import FileUpload from "@/components/file-upload/file-upload";
import {Button} from "@gravity-ui/uikit";
import {VStack} from "@/components/stack";

interface StepTwo {
  setFile: Function
}

const StepTwo = (props: StepTwo) => {


  return (
    <VStack>
      <FileUpload setFile={props.setFile} accept={'image/*'}>
        <Button view={'outlined-action'}>
          Загрузить обложку
        </Button>
      </FileUpload>
    </VStack>
  );
};

export default StepTwo;