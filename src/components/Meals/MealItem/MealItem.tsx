import { DummyMealsType } from '../../../types/types';
import styles from './MealItem.module.css';
import { MealItemForm } from './MealItemForm';

type MealItemPropsType = {
  meal: DummyMealsType;
};

const MealItem = (props: MealItemPropsType): JSX.Element => {
  const { name, description, price } = props.meal;

  const formattedPrice = `$${price.toFixed(2)}`;

  return (
    <li className={styles.meal}>
      <div>
        <h3>{name}</h3>
        <div className={styles.description}>{description}</div>
        <div className={styles.price}>{formattedPrice}</div>
      </div>
      <div>
        <MealItemForm  meal={props.meal}/>
      </div>
    </li>
  );
};

export default MealItem;
