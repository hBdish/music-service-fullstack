"use client"
import React, {ChangeEvent} from 'react';
import FileUpload from "@/components/file-upload/file-upload";
import {Button} from "@gravity-ui/uikit";

interface StepTwo {
  setFile: Function
}

const StepTwo = (props: StepTwo) => {


  return (
    <div>
      <FileUpload setFile={props.setFile} accept={'image/*'}>
        <Button view={'outlined-action'}>
          Загрузить обложку
        </Button>
      </FileUpload>
    </div>
  );
};

export default StepTwo;