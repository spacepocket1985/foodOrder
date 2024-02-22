import { Modal } from '../UI/Modal';
import styles from './Cart.module.css';

type CartPropsType = { onHideCart: () => void };

export const Cart = (props: CartPropsType): JSX.Element => {
  const {onHideCart} = props;
  const cartItems = (
    <ul className={styles['cart-items']}>
      {[{ id: 'm1', name: 'Sushi', price: 10, amount: 2 }].map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );

  return (
    <Modal onHideCart={onHideCart}>
      {cartItems}
      <div className={styles.total}>
        <span>Итого</span>
        <span>49,99</span>
      </div>
      <div className={styles.actions}>
        <button className={styles['button--alt']} onClick={onHideCart}>Закрыть</button>
        <button className={styles.button}>Заказать</button>
      </div>
    </Modal>
  );
};
