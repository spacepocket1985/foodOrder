import { useContext, useRef } from 'react';

import { DummyMealsType } from '../../../types/types';
import { Input } from '../../UI/Input';

import styles from './MealItemForm.module.css';
import { CartContext } from '../../../store/cartContext';

type MealItemFormPropsType = {
  meal: DummyMealsType;
};

export const MealItemForm = (props: MealItemFormPropsType): JSX.Element => {
  const cartContext = useContext(CartContext);
  const inputRef = useRef<HTMLInputElement>(null);
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
        ref={inputRef}
      />
      <button
        type="button"
        onClick={() => {
          if (Number(inputRef.current?.value) > 0) {
            cartContext.addItem({
              id,
              name,
              price,
              amount: Number(inputRef.current?.value),
            });
          }
        }}
      >
        Добавить
      </button>
    </form>
  );
};
