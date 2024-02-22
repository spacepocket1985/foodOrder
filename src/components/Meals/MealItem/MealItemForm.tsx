import { useContext } from 'react';

import { DummyMealsType } from '../../../types/types';
import { Input } from '../../UI/Input';

import styles from './MealItemForm.module.css';
import { CartContext } from '../../../store/cartContext';

type MealItemFormPropsType = {
  meal: DummyMealsType;
};

export const MealItemForm = (props: MealItemFormPropsType): JSX.Element => {
  const cartContext = useContext(CartContext);

  const { id, name, price } = props.meal;
  return (
    <form className={styles.form}>
      <Input
        label="Количество"
        id={id}
        type="number"
        min="1"
        step="1"
        defaultValue="1"
      />
      <button
        type="button"
        onClick={() => {
          cartContext.addItem({ id, name, price, amount: 1 });
        }}
      >
        Добавить
      </button>
    </form>
  );
};
