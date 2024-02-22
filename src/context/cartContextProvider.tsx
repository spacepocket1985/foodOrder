import { ReactNode } from 'react';
import { CartItemType } from '../types/types';
import { CartContext, CartContextType } from './cartContext';

type CartContextProviderPropsType = {
  children: ReactNode;
};

export const CartContextProvider = (
  props: CartContextProviderPropsType
): JSX.Element => {
  const { children } = props;

  const addItemHandler = (item: CartItemType) => {};
  const removeItemHandler = (id: string) => {};

  const cartContext: CartContextType = {
    items: [],
    totalAmount: 0,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
};
