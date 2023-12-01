"use client"
import {useRouter} from "next/navigation";
import {ActionBar} from "@gravity-ui/navigation";
import {Button, Icon} from "@gravity-ui/uikit";
import {Gear, House, MusicNote} from "@gravity-ui/icons";
import {HStack} from "@/components/stack";

const menuItem = [
  {text: 'Главная', href: '/', icons: House},
  {text: 'Список треков', href: '/tracks', icons: MusicNote},
  {text: 'Список альбомов', href: '/albums'},
]

export default function Navbar() {
  const router = useRouter()

  return (

    <ActionBar aria-label="Actions bar">
      <ActionBar.Section>
        <ActionBar.Group>
          <ActionBar.Item>
            <HStack gap={'8'}>
              {menuItem.map((item) => (
                <Button
                  key={item.href}
                  onClick={() => router.push(item.href)}
                >
                  {item.icons && <Icon data={item.icons}/>}
                  {item.text}
                </Button>
              ))}
            </HStack>

          </ActionBar.Item>
        </ActionBar.Group>

        <ActionBar.Group pull="right">
          <ActionBar.Item>
            <Button
              onClick={() => router.push('/tracks/create')}
              view="outlined-action"

            >
              <Icon data={Gear}/>
              Загрузить трек
            </Button>
          </ActionBar.Item>
        </ActionBar.Group>
      </ActionBar.Section>
    </ActionBar>
  )
}