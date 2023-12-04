import {PlayList} from '@/types/play-list';
import React from 'react';
import {Button, Card, Icon} from "@gravity-ui/uikit";
import styles from './play-list-item.module.css'
import {CircleInfo, TrashBin} from "@gravity-ui/icons";
import {HStack, VStack} from "@/components/stack";
import {useRouter} from "next/navigation";

interface PlayListItem {
  playlist: PlayList
}

const PlayListItem = (props: PlayListItem) => {
  const {playlist} = props
  const router = useRouter()

  return (
    <Card className={styles.card}>
      <VStack max gap={'24'} align={"center"} justify={"center"}>
        {playlist.name}
        <HStack gap={'16'}>
          <Button onClick={() => {
            router.push(`/play-lists/${playlist._id}`)
          }} view={'outlined-info'}>
            <Icon data={CircleInfo}/>
          </Button>
          <Button view={'outlined-danger'}>
            <Icon data={TrashBin}/>
          </Button>
        </HStack>
      </VStack>

    </Card>
  );
};

export default PlayListItem;