import { createRoot } from 'react-dom/client';
import { App } from '@/app/app';
import { BrowserRouter } from 'react-router-dom';
import '@/app/styles/index.css';
import { StoreProvider } from './app/store/ui/store-provider';

const container = document.getElementById('root');

if (!container) {
  throw new Error(
    'Контейнер root не найден. НЕ удалось вмонтировать реакт приложение',
  );
}

const root = createRoot(container);

root.render(
  <BrowserRouter>
    <StoreProvider>
      <App />
    </StoreProvider>
  </BrowserRouter>,
);
