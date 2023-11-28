'use client'

import React from 'react';
import {Track} from "@/types/tracks";
import {Button, TextInput} from "@gravity-ui/uikit";
import {useRouter} from "next/navigation";
import styles from './track-page.module.css'
import {comment} from "postcss";

const TrackPage = () => {
  const router = useRouter()

  const track: Track =  {
      _id: '1',
      name: 'Track 1',
      artist: 'travis',
      text: 'text 1',
      listeners: 0,
      picture: '123',
      audio: '123'
    }

  return (
    <div className={styles.main}>
      <Button onClick={() => router.push('/tracks')} view="outlined" size="l">
        К списку треков
      </Button>
      <div className={styles.header}>
        <img src={track.picture} width={200} height={200}/>
        <div>
          <h1>{track.name}</h1>
          <h3>Исполнитель - {track.artist}</h3>
          <h3>Прослушиваний - {track.listeners}</h3>
        </div>
      </div>
      <h2>Слова</h2>
      <p>{track.text}</p>
      <h3>Комментарии</h3>
      <div>
        <TextInput label={"Ваше имя"}  />
        <TextInput label={"Ваш комментарий"}  />
        <Button view={'outlined-action'}>
          Отправить
        </Button>
      </div>
      {track.comments?.map((comment) => {
        return  (
          <div key={comment._id}>
            {comment.username}
            {comment.username}
          </div>
        )
      })}
    </div>
  );
};

export default TrackPage;