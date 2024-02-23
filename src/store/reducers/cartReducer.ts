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
      const itemIndex = getInfoAboutCartItem(state, action.payload).itemIndex;
      const newItems =
        itemIndex === -1
          ? [action.payload, ...state.items]
          : [
              ...state.items.map((item) =>
                item.id !== action.payload.id
                  ? item
                  : {
                      ...action.payload,
                      amount: getInfoAboutCartItem(state, action.payload)
                        .itemAmount,
                    }
              ),
            ];
      return {
        ...state,
        items: newItems,

        totalAmount:
          state.totalAmount + action.payload.price * action.payload.amount,
      };
  }

  return defaultCartState;
};
