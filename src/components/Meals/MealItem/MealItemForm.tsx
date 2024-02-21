import { Input } from '../../UI/Input';

import styles from './MealItemForm.module.css';

type MealItemFormPropsType = {
    id: string
} 

export const MealItemForm = (props: MealItemFormPropsType): JSX.Element => {
  
  const {id} = props;
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
      <button>Добавить</button>
    </form>
  );
};
