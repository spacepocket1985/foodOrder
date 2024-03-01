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

export type FireBaseOrderInfo = {
  name: string;
};

export type UserDataType = {
  name: string;
  city: string;
  address: string;
};

export type FireBaseUserOrderType = {
  [key: string]: { user: UserDataType; meals: CartItemType[] };
};
