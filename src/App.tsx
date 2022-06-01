import { Header } from './components/Header';
import { StoresProvider } from './components/hooks/useStores';
import { HomePage } from './pages/HomePage';

export function App() {
  return (
    <StoresProvider>
      <Header />
      <HomePage />
    </StoresProvider>
  );
}
