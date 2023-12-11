import { HStack, VStack } from '@/shared';
import { InputGroup } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';

const PlayListsPage = () => {
  return (
    <VStack>
      <HStack style={{ paddingTop: '8px' }} max justify={'center'}>
        <h2>Список треков</h2>
      </HStack>

      <HStack
        style={{ paddingTop: '8px' }}
        gap={'16'}
        max
        align={'center'}
        justify={'center'}
      >
        <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
          <Form.Control
            placeholder="Username"
            aria-label="Username"
            aria-describedby="basic-addon1"
            // value={search.value}
            onChange={(e) => {
              // search.onChange(e.target.value);
            }}
          />
        </InputGroup>
      </HStack>

      {/*<TrackList tracks={tracks} />*/}
    </VStack>
  );
};

export { PlayListsPage };
