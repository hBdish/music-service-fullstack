import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { Button, Navbar as NavbarBoostrap } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import {
  getRouteCreateTrack,
  getRouteMain,
  getRoutePlaylists,
  getRouteTracks,
  HouseIcon,
  HStack,
  MusicListIcon,
} from '@/shared';

const menuItem = [
  { text: 'Главная', href: getRouteMain(), icons: <HouseIcon /> },
  { text: 'Список треков', href: getRouteTracks(), icons: <MusicListIcon /> },
  { text: 'Плейлисты', href: getRoutePlaylists() },
];

export function Navbar() {
  const navigate = useNavigate();
  return (
    <NavbarBoostrap bg="dark" data-bs-theme="dark">
      <Container>
        <Nav className="me-auto">
          {menuItem.map((el) => (
            <Nav.Link
              key={el.href}
              onClick={() => {
                navigate(el.href);
              }}
            >
              <HStack className={'m'} gap={'4'} max>
                {el.icons}
                {el.text}
              </HStack>
            </Nav.Link>
          ))}
        </Nav>
      </Container>
      <Container className={'justify-content-end'}>
        <Button
          onClick={() => {
            navigate(getRouteCreateTrack());
          }}
          variant={'outline-warning'}
        >
          Добавить трек
        </Button>
      </Container>
    </NavbarBoostrap>
  );
}
