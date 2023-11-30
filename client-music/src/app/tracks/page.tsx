"use client"

import {Button, Icon, TextInput} from "@gravity-ui/uikit";
import {Gear} from "@gravity-ui/icons";
import {useRouter} from "next/navigation";
import TrackList from "@/components/track-list/track-list";
import {useEffect, useState} from "react";
import {useAppDispatch} from "@/store/hooks/hooks";
import {fetchTracks, searchTracks} from "@/store/slice/track/tracks-service";
import {useTrackValue} from "@/store/slice/track/tracks-selectors";
import {useInput} from "@/lib/hooks/use-input";

export default function Tracks() {
  const router = useRouter()
  const dispatch = useAppDispatch()
  const {tracks, isLoading} = useTrackValue()
  const search = useInput('')
  const [timer, setTimer] = useState(null)

  useEffect(() => {
    dispatch(fetchTracks())
  }, [])

  useEffect(() => {

    if (timer) {
      clearTimeout(timer)
    }
    setTimeout(() => {
      dispatch(searchTracks(search.value))
    }, 700)

  }, [search.value]);

  return (
    <div>
      Список треков
      <Button onClick={() => router.push('/tracks/create')} view="outlined" size="l">
        <Icon data={Gear} size={18}/>
        Загрузить
      </Button>
      <TextInput onChange={(e) => {
        search.onChange(e.target.value)
      }} value={search.value}/>
      <TrackList tracks={tracks}/>
    </div>
  )
}

