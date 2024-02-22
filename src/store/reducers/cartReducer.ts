import { getInfoAboutCartItem } from '../../components/utils/getInfoAboutCartItem';
import { CartItemType } from '../../types/types';
import { CartActionsType } from '../actions/actions';

export type CartStateType = {
  items: Array<CartItemType>;
  totalAmount: number;
};

export const defaultCartState: CartStateType = {
  items: [],
  totalAmount: 0,
};

export const cartReducer = (
  state: CartStateType,
  action: CartActionsType
): CartStateType => {
  switch (action.type) {
    case 'ADD_ITEM':
      const temp = getInfoAboutCartItem(state, action.payload).itemIndex;
      const newArr = temp === -1
        ? [action.payload, ...state.items]
        : [...state.items, state.items[temp]={...state.items[temp],amount:555555}];
      return {
        ...state,
        items: newArr,
        
        totalAmount:
          state.totalAmount + action.payload.price * action.payload.amount,
      };
  }
  return defaultCartState;
};
