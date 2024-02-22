import { useState } from 'react';

import { Cart } from './components/Cart/Cart';
import { Header } from './components/Layout/Header';
import { Meals } from './components/Meals/Meals';

import './App.css';
import { CartContextProvider } from './context/cartContextProvider';

function App(): JSX.Element {
  const [cartIsVisible, setCartIsVisible] = useState(false);

  const showCartHandler = (): void => {
    setCartIsVisible(true);
  };

  const hideCartHandler = (): void => {
    setCartIsVisible(false);
  };

  return (
    <CartContextProvider>
      <Header onShowCart={showCartHandler}/>
      {cartIsVisible && <Cart onHideCart = {hideCartHandler}/>}
      <main>
        <Meals />
      </main>
    </CartContextProvider>
  );
}

export default App;
