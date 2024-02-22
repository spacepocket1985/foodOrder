import { CartItemType } from '../../types/types';
import { CartActionsType } from '../actions/actions';

type CartStateType = {
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
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.payload.id
            ? {
                id: item.id,
                name: item.name,
                price: item.price,
                amount: item.amount + action.payload.amount,
              }
            : item
        ),
        totalAmount:
          state.totalAmount + action.payload.price * action.payload.amount,
      };
  }
  return defaultCartState;
};
