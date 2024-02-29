import { useEffect, useState } from 'react';
import useHttp from '../../hooks/useHttp';
import { DummyMealsType, FireBaseMealsType } from '../../types/types';
import { Card } from '../UI/Card';
import MealItem from './MealItem/MealItem';
import styles from './MealList.module.css';


export const MealList = (): JSX.Element => {
  const [meals, setMeals] = useState<DummyMealsType[]>([]);

  const httpRequestData = useHttp();
  const { isLoading, error, sendHttpRequest: fetchProducts } = httpRequestData;

  useEffect(() => {
    const manageMeals = (meals: FireBaseMealsType ) => {

      const loadedMeals:DummyMealsType [] = [];

      for (const key in meals) {
        
        loadedMeals.push({
          id: key,
          name: meals[key].name,
          description:meals[key].description,
          price: meals[key].price
        });
      }

      setMeals(loadedMeals);
    };

    fetchProducts(
      {
        endpoint: 'https://foodorder-35bc5-default-rtdb.firebaseio.com/meals.json',
      },
      manageMeals 
    );
  }, [fetchProducts]);

  const mealList: JSX.Element[] = meals.map((meal) => {
    return <MealItem key={meal.id} meal={meal} />;
  });

  return (
    <section className={styles.meals}>
      <Card>
        <ul> {mealList}</ul>
      </Card>
    </section>
  );
};
