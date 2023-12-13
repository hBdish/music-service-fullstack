import React, { useState } from 'react';
import { StepWrapper } from '@/widgets';
import { useAppDispatch } from '@/shared';
import { redirect } from 'react-router-dom';
import { createTrack } from '@/features';

const CreateTrackPage = () => {
  const [picture, setPicture] = useState<File | null>(null);
  const [audio, setAudio] = useState<File | null>(null);
  const dispatch = useAppDispatch();

  return (
    <StepWrapper
      canCreateTrack={!!audio && !!picture}
      setAudio={setAudio}
      setPicture={setPicture}
      createTrack={() => {
        dispatch(createTrack({ picture, audio }));
        redirect('/tracks');
      }}
    />
  );
};

export { CreateTrackPage };
