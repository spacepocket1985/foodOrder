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
    case 'REMOVE_ITEM':
      const itemInCart = state.items.find((item) => item.id === action.payload);
      if (!itemInCart) {
        return defaultCartState;
      }
      const updateItems =
        itemInCart?.amount === 1
          ? state.items.filter((item) => item.id !== action.payload)
          : state.items.map((item) =>
              item.id !== action.payload
                ? item
                : { ...item, amount: item.amount - 1 }
            );
      return {
        ...state,
        items: updateItems,
        totalAmount: state.totalAmount - itemInCart.price,
      };

      case 'CLEAR-CART' : return defaultCartState

    default:
      return defaultCartState;
  }
};
