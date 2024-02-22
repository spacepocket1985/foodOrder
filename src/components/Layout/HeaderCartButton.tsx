import { useContext } from 'react';

import { CartContext } from '../../store/cartContext';
import { CartIcon } from '../Cart/CartIcon';

import styles from './HeaderCartButton.module.css';

type HeaderCartButtonPropsType = {
  onShowCart: () => void;
};

export const HeaderCartButton = ({
  onShowCart,
}: HeaderCartButtonPropsType): JSX.Element => {
  const cartContext = useContext(CartContext);

  const cartItemsNumber = cartContext.items.reduce((currentValue, item) => {
    return currentValue + item.amount;
  }, 0);

  return (
    <button className={styles.button} onClick={onShowCart}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Корзина</span>
      <span className={styles.badge}>{cartItemsNumber}</span>
    </button>
  );
};
