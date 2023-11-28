'use client'
import React, {useState} from 'react';
import StepWrapper from "@/components/step-wrapper/step-wrapper";
import StepOne from "@/components/step-wrapper/component/step-one/step-one";
import StepTwo from "@/components/step-wrapper/component/step-two/step-two";
import StepThree from "@/components/step-wrapper/component/step-three/step-three";

const Create = () => {
  const [picture, setPicture] = useState(null)
  const [audio, setAudio] = useState(null)

  return (
    <StepWrapper
      stepOne={<StepOne/>}
      stepTwo={<StepTwo setFile={setPicture} />}
      stepThree={<StepThree setFile={setAudio}/>}
    >
        <h1>Добавьте свой трек</h1>
      </StepWrapper>
  );
};

export default Create;