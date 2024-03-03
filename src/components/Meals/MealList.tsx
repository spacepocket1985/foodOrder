import { useEffect, useState } from 'react';
import useHttp, { ManageDataType } from '../../hooks/useHttp';
import { DummyMealsType, FireBaseMealsType, FireBaseOrderInfo} from '../../types/types';
import { ErrorMessage } from '../ErrorMessage/ErrorMessage';
import { Spinner } from '../Spinner/Spinner';
import { Card } from '../UI/Card';
import MealItem from './MealItem/MealItem';
import styles from './MealList.module.css';

export const MealList = (): JSX.Element => {
  const [meals, setMeals] = useState<DummyMealsType[]>([]);

  const httpRequestData = useHttp();
  const {
    isLoading,
    isError,
    sendHttpRequest: fetchProducts,
  } = httpRequestData;

  useEffect(() => {
    const manageMeals: ManageDataType<FireBaseMealsType> = (meals: FireBaseMealsType) => {
      const loadedMeals: DummyMealsType[] = [];

      for (const key in meals) {
        loadedMeals.push({
          id: key,
          name: meals[key].name,
          description: meals[key].description,
          price: meals[key].price,
        });
      }

      setMeals(loadedMeals);
    };

    fetchProducts(
      {
        endpoint:
          'https://foodorder-35bc5-default-rtdb.firebaseio.com/meals.json',
      },
      manageMeals as ManageDataType<FireBaseMealsType | FireBaseOrderInfo>
    );
  }, [fetchProducts]);

  const mealList: JSX.Element[] = meals.map((meal) => {
    return <MealItem key={meal.id} meal={meal} />;
  });

  const loading = isLoading ? <Spinner /> : null;

  const error = isError ? <ErrorMessage errorMsg={isError} /> : null;

  const content = !(isLoading || isError) ? (
    <section className={styles.meals}>
      <Card>
        <ul> {mealList}</ul>
      </Card>
    </section>
  ) : null;

  return (
    <>
      {loading}
      {error}
      {content}
    </>
  );
};
