import { ReactNode } from 'react';
import { useReducer } from 'react';

import { CartItemType } from '../types/types';
import { CartContext, CartContextType } from './cartContext';
import { cartReducer, defaultCartState } from './reducers/cartReducer';
import { addItemAC, removeItemAC } from './actions/actions';

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

  const addItemHandler = (item: CartItemType) => {dispatchCartAction(addItemAC(item))};
  const removeItemHandler = (id: string) => {dispatchCartAction(removeItemAC(id))};

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
