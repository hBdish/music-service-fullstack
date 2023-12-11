import React from 'react';
import { Button } from 'react-bootstrap';
import { HStack, VStack } from '@/shared';

const MainPage = () => {
  return (
    <VStack gap={'24'} max align={'center'} justify={'center'}>
      <h2>PET PROJECT</h2>
      <HStack gap={'8'}>
        <Button variant="dark">TRACKS</Button>
        <Button variant="dark">PLAYLISTS</Button>
      </HStack>
    </VStack>
  );
};

export { MainPage };
