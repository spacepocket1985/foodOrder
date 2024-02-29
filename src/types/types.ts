export type DummyMealsType = {
  id: string;
  name: string;
  description?: string;
  price: number;
};

export type CartItemType = {
  id: string;
  name: string;
  price: number;
  amount: number;
};

export type FireBaseDataType = {
  [key: string]: {
    description: string;
    name: string;
    price: number;
  };
};

export type FireBaseMealType = {
  description: string;
  name: string;
  price: number;
};

export type FireBaseMealsType = {
  [key: string]: FireBaseMealType;
};
