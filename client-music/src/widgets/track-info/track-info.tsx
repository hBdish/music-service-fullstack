import React, { useEffect } from 'react';
import { Alert, Button, FloatingLabel, Form } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import {
  $api,
  getRouteTracks,
  useAppDispatch,
  useInput,
  VStack,
} from '@/shared';
import { fetchTrack, useTrack } from '@/entities';

const TrackInfo = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { id: trackId = '' } = useParams<{
    id: string;
  }>();
  const track = useTrack();
  const username = useInput('');
  const comment = useInput('');

  useEffect(() => {
    dispatch(fetchTrack(trackId));
  }, []);

  const addComment = async () => {
    try {
      await $api.post('http://localhost:100/tracks/comments', {
        username: username.value,
        text: comment.value,
        trackId: track?._id,
      });

      window.location.reload(); // TODO убрать бы, но как же лень
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <VStack gap={'16'} max align={'start'}>
      <Button
        onClick={() => navigate(getRouteTracks())}
        variant="outline-light"
      >
        К списку треков
      </Button>
      <VStack max>
        <img
          src={'http://localhost:100/' + track?.picture}
          width={200}
          height={200}
          alt={'img'}
        />
        <VStack>
          <h2>{track?.name}</h2>
          <h4>Исполнитель - {track?.artist}</h4>
          <h4>Прослушиваний - {track?.listeners || 0}</h4>
        </VStack>
      </VStack>
      <VStack>
        <h2>Слова</h2>
        <p>{track?.text}</p>
      </VStack>
      <h3>Комментарии</h3>
      <VStack max gap={'8'} align={'center'}>
        <FloatingLabel label={'Ваше имя'}>
          <Form.Control
            onChange={(e) => {
              username.onChange(e.target.value);
            }}
            value={username.value}
            type="text"
          />
        </FloatingLabel>
        <FloatingLabel label={'Ваш комментарий'}>
          <Form.Control
            onChange={(e) => {
              comment.onChange(e.target.value);
            }}
            value={comment.value}
            type="text"
          />
        </FloatingLabel>

        <Button onClick={addComment} variant={'outline-primary'}>
          Отправить
        </Button>
      </VStack>
      <VStack max>
        {track?.comments?.map((comment) => {
          return (
            <Alert key={comment._id} variant={'light'}>
              <VStack align={'start'} justify={'start'}>
                <span>{comment.username}</span>
                <span>{comment.text}</span>
              </VStack>
            </Alert>
          );
        })}
      </VStack>
    </VStack>
  );
};

export { TrackInfo };
