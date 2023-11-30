"use client"

import {Button, Icon} from "@gravity-ui/uikit";
import {Gear} from "@gravity-ui/icons";
import {useRouter} from "next/navigation";
import { Track} from "@/types/tracks";
import TrackList from "@/components/track-list/track-list";
import {useEffect} from "react";
import {useAppDispatch} from "@/store/hooks/hooks";
import {fetchTracks} from "@/store/slice/track/tracks-service";
import {$api} from "@/api/api";


const tracks: Track[] = [
  {
    _id: '1',
    name: 'Track 1',
    artist: 'travis',
    text: 'text 1',
    listeners: 0,
    picture: '123',
    audio: 'http://localhost:100/audio/173c5946-151d-409f-966a-50a999583c75.mp3'
  },
  {
    _id: '2',
    name: 'Track 2',
    artist: 'Kanye',
    text: 'text 3',
    listeners: 0,
    picture: '123',
    audio: '123'
  },
  {
    _id: '3',
    name: 'Track 3',
    artist: 'Taylor',
    text: 'text 3',
    listeners: 0,
    picture: '123',
    audio: '123'
  }
]


export default function Tracks() {
  const router = useRouter()
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchTracks())
  }, [dispatch])

  return (
    <div>
      Список треков
      <Button onClick={() => router.push('/tracks/create')} view="outlined" size="l">
        <Icon data={Gear} size={18} />
        Загрузить
      </Button>
      <TrackList tracks={tracks}/>
    </div>
  )
}

