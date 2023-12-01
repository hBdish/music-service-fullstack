"use client"

import {Button, Icon, Loader, TextInput} from "@gravity-ui/uikit";
import {Gear} from "@gravity-ui/icons";
import {useRouter} from "next/navigation";
import TrackList from "@/components/track-list/track-list";
import {useEffect, useState} from "react";
import {useAppDispatch} from "@/store/hooks/hooks";
import {fetchTracks, searchTracks} from "@/store/slice/track/tracks-service";
import {useTrackValue} from "@/store/slice/track/tracks-selectors";
import {useInput} from "@/lib/hooks/use-input";
import {HStack, VStack} from "@/components/stack";


export default function Tracks() {
  const router = useRouter()
  const dispatch = useAppDispatch()
  const {tracks, isLoading} = useTrackValue()
  const search = useInput('')
  const [timer] = useState(null)


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

  }, [search.value, dispatch]);

  if (isLoading || !tracks) {
    return (
      <VStack max align={"center"} justify={'center'}>
        <Loader size="l"/>
      </VStack>
    )
  }

  return (
    <VStack>
      <HStack style={{paddingTop: '8px'}} max justify={"center"}>
        <h2>Список треков</h2>
      </HStack>

      <HStack style={{paddingTop: '8px'}} gap={'16'} max align={"center"} justify={"center"}>
        <TextInput
          onChange={(e) => {
            search.onChange(e.target.value)
          }}
          value={search.value}
        />
        <Button
          onClick={() => router.push('/tracks/create')}
          view="outlined"
          size="l"
        >
          <Icon data={Gear} size={18}/>
          Загрузить
        </Button>
      </HStack>

      <TrackList tracks={tracks}/>
    </VStack>
  )
}

