import { CartIcon } from '../Cart/CartIcon';

import styles from './HeaderCartButton.module.css';

type HeaderCartButtonPropsType = {
  onShowCart: () => void;
};

export const HeaderCartButton = ({onShowCart}: HeaderCartButtonPropsType): JSX.Element => {
  return (
    <button className={styles.button } onClick={onShowCart}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Корзина</span>
      <span className={styles.badge}>2</span>
    </button>
  );
};
