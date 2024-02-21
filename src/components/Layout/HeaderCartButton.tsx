import { CartIcon } from '../Cart/CartIcon';

import styles from './HeaderCartButton.module.css';

export const HeaderCartButton = (): JSX.Element => {
  return (
    <button className={styles.button}>
      <span className={styles.icon}><CartIcon/></span>
      <span>Корзина</span>
      <span className={styles.badge}>2</span>
    </button>
  );
};
