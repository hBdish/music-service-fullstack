'use client'
import {useEffect} from 'react';
import PlayLists from "@/components/play-list/play-lists";
import {fetchPlaylists} from "@/store/slice/play-list/play-list-service";
import {useAppDispatch} from "@/store/hooks/hooks";
import {usePlaylistValue} from "@/store/slice/play-list/play-list-selector";
import {VStack} from "@/components/stack";
import {Loader} from "@gravity-ui/uikit";
import styles from './play-list-page.module.css'

const PlaylistsPage = () => {
  const dispatch = useAppDispatch()
  const {playlists, isLoading} = usePlaylistValue()

  useEffect(() => {
    dispatch(fetchPlaylists())
  }, [])

  if (isLoading) {
    return (
      <VStack max align={"center"} justify={'center'}>
        <Loader size="l"/>
      </VStack>
    )
  }

  return (
    <VStack className={styles.page}>
      <PlayLists playlists={playlists}/>
    </VStack>

  );
};

export default PlaylistsPage;