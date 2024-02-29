import { DummyMealsType } from '../../types/types';

type FireBaseDataType = {
  [key: string]: {
    description: string;
    name: string;
    price: number;
  };
};

export const FireBaseService = () => {
  const _apiBase =
    'https://foodorder-35bc5-default-rtdb.firebaseio.com/meals.json';

  const getMeals = async (): Promise<Array<FireBaseDataType>> => {
    const response = await fetch(_apiBase);

    if (!response.ok) {
      throw new Error(`Could not fetch, status: ${response.status}`);
    }
    const responseData: Promise<Array<FireBaseDataType>> =
      await response.json();
    return  responseData.map(_transformMeal);
  };

  const _transformMeal = (meal: FireBaseDataType) => {
    for (let key in meal)
      return {
        id: key,
        name: meal[key].name,
        description: meal[key].description,
        price: meal[key].price,
      };
  };

  return { getMeals };
};
