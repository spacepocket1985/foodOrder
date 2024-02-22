import { CartItemType } from '../../types/types';

export type CartActionsType = ActionAddItemType | ActionRemoveItemType;

type ActionAddItemType = {
  type: 'ADD_ITEM';
  payload: CartItemType;
};

export const addItemAC = (item: CartItemType): ActionAddItemType => {
  return {
    type: 'ADD_ITEM',
    payload: item,
  };
};

type ActionRemoveItemType = {
  type: 'REMOVE_ITEM';
  payload: string;
};

export const removeItemAC = (id: string): ActionRemoveItemType => {
  return {
    type: 'REMOVE_ITEM',
    payload: id,
  };
};
