'use client'

import React, {useEffect, useState} from 'react';
import {List} from "@gravity-ui/uikit";
import styles from './add-in-play-list.module.css'
import {useAppDispatch} from "@/store/hooks/hooks";
import {addTrackInPlayList, fetchPlaylists} from "@/store/slice/play-list/play-list-service";
import {PlayList} from "@/types/play-list";

interface AddInPlayList {
  trackId: string
  playLists: PlayList[]
}

const AddInPlayList = ({trackId, playLists = []}: AddInPlayList) => {
  const dispatch = useAppDispatch()
  const [items, setItems] = useState<{ name: string; id: string; }[]>()


  useEffect(() => {
    dispatch(fetchPlaylists())
  }, [])

  useEffect(() => {
    if ('map' in playLists) {
      setItems(playLists.map(el => {
        return {
          name: el?.name || '',
          id: el._id
        }
      }))
    }
  }, [playLists])

  if (playLists?.length === 0) {
    return (
      <div className={styles.popupBody}>
        Сначала создайте плейлист
      </div>
    );
  }

  return (
    <div className={styles.popupBody}>
      <List
        onItemClick={(el) => {
          dispatch(addTrackInPlayList({trackId, playListId: el.id}))

        }}
        items={items || []}
        renderItem={(item) => {
          return (
            <div className={'select'}>
              <div className={'select-text'}>{item.name}</div>
            </div>
          )
        }}
        itemsHeight={160}
        filterable={false}
      />
    </div>
  );
};

export default AddInPlayList;