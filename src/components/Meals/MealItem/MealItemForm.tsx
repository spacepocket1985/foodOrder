import { useContext, useRef, useState } from 'react';

import { DummyMealsType } from '../../../types/types';
import { Input } from '../../UI/Input';

import styles from './MealItemForm.module.css';
import { CartContext } from '../../../store/cartContext';

type MealItemFormPropsType = {
  meal: DummyMealsType;
};

export const MealItemForm = (props: MealItemFormPropsType): JSX.Element => {
  const [isAmountValid, setIsAmountValid] = useState(true);
  const cartContext = useContext(CartContext);

  const inputRef = useRef<HTMLInputElement>(null);

  const { id, name, price } = props.meal;

  const onSubmitHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (
      Number(inputRef.current?.value) <= 0 ||
      Number(inputRef.current?.value) > 10
    ) {
      setIsAmountValid(false);
      return;
    }
    cartContext.addItem({
      id,
      name,
      price,
      amount: Number(inputRef.current?.value),
    });
    setIsAmountValid(true);
  };
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
      <button onClick={onSubmitHandler}>Добавить</button>
      {!isAmountValid && <p>Пожалуйста введите количество от 1 до 10</p>}
    </form>
  );
};
