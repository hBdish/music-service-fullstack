import AppRouter from '@/app/providers/router/ui/app-router';
import { Navbar } from '@/widgets';

const App = () => {
  return (
    <>
      <Navbar />
      <AppRouter />
    </>
  );
};

export { App };
