import { useContext, useState, useEffect } from 'react';

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
  const [isButtonAnimated, setIsButtonAnimated] = useState(false);

  const buttonClasses = `${styles.button} ${
    isButtonAnimated ? styles.bump : ""
  }`;

  useEffect(() => {
    if (cartContext.items.length === 0) {
      return;
    }
    setIsButtonAnimated(true);

    const timer = setTimeout(() => {
      setIsButtonAnimated(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [cartContext.items]);

  const cartItemsNumber = cartContext.items.reduce((currentValue, item) => {
    return currentValue + item.amount;
  }, 0);

  return (
    <button className={buttonClasses} onClick={onShowCart}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Корзина</span>
      <span className={styles.badge}>{cartItemsNumber}</span>
    </button>
  );
};

