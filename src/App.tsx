import { useState } from 'react';

import { Cart } from './components/Cart/Cart';
import { Header } from './components/Layout/Header';
import { Meals } from './components/Meals/Meals';

import './App.css';

function App(): JSX.Element {
  const [cartIsVisible, setCartIsVisible] = useState(false);

  const showCartHandler = (): void => {
    setCartIsVisible(true);
  };

  const hideCartHandler = (): void => {
    setCartIsVisible(false);
  };

  return (
    <>
      <Header onShowCart={showCartHandler}/>
      {cartIsVisible && <Cart onHideCart = {hideCartHandler}/>}
      <main>
        <Meals />
      </main>
    </>
  );
}

export default App;
