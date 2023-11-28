"use client"

import {Button, Icon, Table, withTableActions} from "@gravity-ui/uikit";
import {Gear} from "@gravity-ui/icons";
import {useRouter} from "next/navigation";
import {Comment, Track} from "@/types/tracks";
import TrackList from "@/components/track-list/track-list";
import {buildSelector} from "@/store/hooks/build-selector";

const tracks: Track[] = [
  {
    _id: '1',
    name: 'Track 1',
    artist: 'travis',
    text: 'text 1',
    listeners: 0,
    picture: '123',
    audio: '123'
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

