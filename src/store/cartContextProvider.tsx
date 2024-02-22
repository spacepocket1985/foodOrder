import { ReactNode } from 'react';
import { useReducer } from 'react';

import { CartItemType } from '../types/types';
import { CartContext, CartContextType } from './cartContext';
import { cartReducer, defaultCartState } from './reducers/cartReducer';

type CartContextProviderPropsType = {
  children: ReactNode;
};


export const CartContextProvider = (
  props: CartContextProviderPropsType
): JSX.Element => {
  const { children } = props;

  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemHandler = (item: CartItemType) => {};
  const removeItemHandler = (id: string) => {};

  const cartContext: CartContextType = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
};
