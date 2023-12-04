"use client"

import {Loader, TextInput} from "@gravity-ui/uikit";
import TrackList from "@/components/track-list/track-list";
import {useEffect, useState} from "react";
import {useAppDispatch} from "@/store/hooks/hooks";
import {fetchTracks, searchTracks} from "@/store/slice/track/tracks-service";
import {useTrackValue} from "@/store/slice/track/tracks-selectors";
import {useInput} from "@/lib/hooks/use-input";
import {HStack, VStack} from "@/components/stack";


export default function TracksPage() {
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
          label={"Поиск"}
          style={{maxWidth: '50%'}}
          onChange={(e) => {
            search.onChange(e.target.value)
          }}
          value={search.value}
        />

      </HStack>

      <TrackList tracks={tracks}/>
    </VStack>
  )
}

