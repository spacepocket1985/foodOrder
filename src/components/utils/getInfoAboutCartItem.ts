import { CartStateType } from '../../store/reducers/cartReducer';
import { CartItemType } from '../../types/types';

export const getInfoAboutCartItem = (
  state: CartStateType,
  newItem: CartItemType
): { itemIndex: number; itemAmount: number } => {
  const itemIndex = state.items.findIndex((item) => item.id === newItem.id);
  const itemAmount =
    itemIndex === -1 ? 0 : state.items[itemIndex].amount + newItem.amount;

  return { itemIndex, itemAmount };
};
