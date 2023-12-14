import React, { useState } from 'react';
import { StepWrapper } from '@/widgets';
import { getRouteTracks, useAppDispatch } from '@/shared';
import { useNavigate } from 'react-router-dom';
import { createTrack } from '@/features';

const CreateTrackPage = () => {
  const [picture, setPicture] = useState<File | null>(null);
  const [audio, setAudio] = useState<File | null>(null);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  return (
    <StepWrapper
      canCreateTrack={!!audio && !!picture}
      setAudio={setAudio}
      setPicture={setPicture}
      createTrack={() => {
        dispatch(createTrack({ picture, audio }));
        navigate(getRouteTracks());
      }}
    />
  );
};

export { CreateTrackPage };
