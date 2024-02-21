import './App.css';
import { Header } from './components/Layout/Header';
import { Meals } from './components/Meals/Meals';

function App(): JSX.Element {
  return (
    <>
      <Header />
      <main>
        <Meals />
      </main>
    </>
  );
}

export default App;
