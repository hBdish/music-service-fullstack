import AppRouter from '@/app/providers/router/ui/app-router';
import { Navbar } from '@/widgets';
import { Player } from '@/entities';

const App = () => {
  return (
    <>
      <div className={'app'}>
        <Navbar />
        <AppRouter />
      </div>
      <Player />
    </>
  );
};

export { App };
