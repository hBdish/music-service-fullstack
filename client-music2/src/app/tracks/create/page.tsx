'use client'
import React, {useState} from 'react';
import StepWrapper from "@/components/step-wrapper/step-wrapper";
import StepOne from "@/components/step-wrapper/component/step-one/step-one";
import StepTwo from "@/components/step-wrapper/component/step-two/step-two";
import StepThree from "@/components/step-wrapper/component/step-three/step-three";
import {useAppDispatch} from "@/store/hooks/hooks";
import {createTrack} from "@/store/slice/create-track/create-track-service";
import {useRouter} from "next/navigation";

const Create = () => {
  const [picture, setPicture] = useState(null)
  const [audio, setAudio] = useState(null)
  const dispatch = useAppDispatch()
  const router = useRouter()

  return (
    <StepWrapper
      createTrack={() => {
        dispatch(createTrack({picture, audio}))
        router.push('/tracks')
      }}
      canCreateTrack={!!picture && !!audio}
      stepOne={<StepOne/>}
      stepTwo={<StepTwo setFile={setPicture}/>}
      stepThree={<StepThree setFile={setAudio}/>}
    >
      <h1>Добавьте свой трек</h1>
    </StepWrapper>
  );
};

export default Create;