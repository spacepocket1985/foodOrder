import { CartItemType } from '../../types/types';
import styles from './CartItem.module.css';

type CartItemPropsType = {
  cartItem: CartItemType;
  onRemove: () => void;
  onAdd: () => void;
};
export const CartItem = (props: CartItemPropsType): JSX.Element => {
  const {
    cartItem: { price, amount, name, id },
    onAdd,
    onRemove,
  } = props;

  return (
    <li key={id} className={styles['cart-item']}>
      <div>
        <h2>{name}</h2>
        <div className={styles.summary}>
          <span className={styles.price}>{price}</span>
          <span className={styles.amount}>x {amount}</span>
        </div>
      </div>
      <div className={styles.actions}>
        <button onClick={onRemove}>−</button>
        <button onClick={onAdd}>+</button>
      </div>
    </li>
  );
};
