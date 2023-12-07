import {HStack, VStack} from "@/components/stack";
import {Button} from "@/lib/mui";

export default function Home() {


  return (
    <VStack gap={'24'} max align={"center"} justify={"center"}>
      <h2>PET PROJECT</h2>
      <HStack gap={'8'}>
        <Button view={"outlined-success"}>TRACKS</Button>
        <Button view={"outlined-success"}>PLAYLISTS</Button>
      </HStack>
    </VStack>
  )
}
