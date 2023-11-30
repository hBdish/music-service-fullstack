'use client'

import React, {useEffect} from 'react';
import {Button, TextInput} from "@gravity-ui/uikit";
import {useRouter} from "next/navigation";
import styles from './track-page.module.css'
import {useAppDispatch} from "@/store/hooks/hooks";
import {fetchTrack} from "@/store/slice/track/tracks-service";
import {useTrackValue} from "@/store/slice/track/tracks-selectors";
import {useInput} from "@/lib/hooks/use-input";
import {$api} from "@/api/api";


const TrackPage = (props: any) => {
  const router = useRouter()
  const dispatch = useAppDispatch()
  const username = useInput('')
  const comment = useInput('')

  const addComment = async () => {
    try {
      const response = await $api.post(
        'http://localhost:100/tracks/comments', {
          username: username.value,
          text: comment.value,
          trackId: track?._id
        }
      )

      window.location.reload()
    } catch (e) {
      console.log(e)
    }

  }

  useEffect(() => {
    dispatch(fetchTrack(props?.params?.id))
  }, []);

  const {track, isLoading} = useTrackValue()

  if (isLoading) {
    return <>Loading</>
  }

  return (
    <div className={styles.main}>
      <Button
        onClick={() => router.push('/tracks')}
        view="outlined"
        size="l"
      >
        К списку треков
      </Button>
      <div className={styles.header}>
        <img
          src={'http://localhost:100/' + track?.picture}
          width={200}
          height={200}
        />
        <div>
          <h1>{track?.name}</h1>
          <h3>Исполнитель - {track?.artist}</h3>
          <h3>Прослушиваний - {track?.listeners}</h3>
        </div>
      </div>
      <h2>Слова</h2>
      <p>{track?.text}</p>
      <h3>Комментарии</h3>
      <div>
        <TextInput
          value={username.value}
          onChange={(e) => {
            username.onChange(e.target.value)
          }}
          label={"Ваше имя"}
        />
        <TextInput
          value={comment.value}
          onChange={(e) => {
            comment.onChange(e.target.value)
          }}
          label={"Ваш комментарий"}
        />
        <Button onClick={addComment} view={'outlined-action'}>
          Отправить
        </Button>
      </div>
      {track?.comments?.map((comment) => {
        return (
          <div key={comment._id}>
            {comment.username}
            {comment.text}
          </div>
        )
      })}
    </div>
  );
};

export default TrackPage;
