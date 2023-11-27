"use client"
import {Button} from '@gravity-ui/uikit';
import {useRouter} from "next/navigation";

const menuItem = [
  {text: 'Главная', href: '/'},
  {text: 'Список треков', href: '/tracks'},
  {text: 'Список альбомов', href: '/albums'},
]

export default function Navbar() {
  const router = useRouter()

  return (
    <div>
      {menuItem.map((item) => (
        <Button view={"action"} key={item.href} onClick={() => router.push(item.href)}>
          {item.text}
        </Button>
      ))}
    </div>
  )
}