import { useContext } from 'react';

import { CartContext } from '../../store/cartContext';
import { CartItemType } from '../../types/types';
import styles from './CartItem.module.css';

type CartItemPropsType = {
  cartItem: CartItemType;
};
export const CartItem = (props: CartItemPropsType): JSX.Element => {
  const cartContext = useContext(CartContext);

  const {
    cartItem: { price, amount, name, id },
  } = props;

  const onAdd = ():void => {
    cartContext.addItem({
      id,
      name,
      price,
      amount: 1,
    });
  };

  const onRemove = ():void =>{
    cartContext.removeItem(id)
  }

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
