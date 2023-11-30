'use client'
import React from 'react';
import FileUpload from "@/components/file-upload/file-upload";
import {Button} from "@gravity-ui/uikit";

interface StepThree {
  setFile: Function
}

const StepThree = (props: StepThree) => {
  return (
    <div>
      <FileUpload setFile={props.setFile} accept={'audio/*'}>
        <Button view={'outlined-action'}>
          Загрузите аудио
        </Button>
      </FileUpload>
    </div>
  );
};

export default StepThree;