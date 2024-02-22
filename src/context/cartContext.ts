import React from 'react';
import { CartItemType } from '../types/types';

export type CartContextType = {
  items: Array<CartItemType>;
  totalAmount: number;
  addItem: (item: CartItemType) => void;
  removeItem: (id: string) => void;
};

export const CartContext = React.createContext<CartContextType>({
  items: [],
  totalAmount: 0,
  addItem: (item: CartItemType) => {},
  removeItem: (id: string) => {},
});
