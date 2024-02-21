import { DummyMealsType } from '../../types/types';
import { Card } from '../UI/Card';
import MealItem from './MealItem/MealItem';
import styles from './MealList.module.css';

const DUMMY_MEALS: Array<DummyMealsType> = [
  {
    id: 'm1',
    name: 'Ролл "Наоми"',
    description:
      'Сыр Филадельфия, куриное филе, масаго, помидор, огурец, кунжут',
    price: 11.99,
  },
  {
    id: 'm2',
    name: 'Спайс в лососе',
    description: 'Рис, лосось, соус спайс',
    price: 3.99,
  },
  {
    id: 'm3',
    name: 'Суши с угрем',
    description: 'Угорь копченый, соус унаги, кунжут',
    price: 4.99,
  },
  {
    id: 'm4',
    name: 'Салат "Поке с лососем"',
    description:
      'Рис, лосось, огурец, чука, нори, стружка тунца, соус ореховый',
    price: 7.99,
  },
];

export const MealList = (): JSX.Element => {
  const mealList: JSX.Element[] = DUMMY_MEALS.map((meal) => {
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