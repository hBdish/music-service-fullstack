"use client"
import { Menu} from '@gravity-ui/uikit';
import {useRouter} from "next/navigation";
import styles from './nabar.module.css'

const menuItem = [
  {text: 'Главная', href: '/'},
  {text: 'Список треков', href: '/tracks'},
  {text: 'Список альбомов', href: '/albums'},
]

export default function Navbar() {
  const router = useRouter()

  return (
    <Menu  className={styles.navbar}>
      {menuItem.map((item) => (
        <Menu.Item key={item.href} onClick={() => router.push(item.href)}>
          {item.text}
        </Menu.Item>
      ))}
    </Menu>
  )
}