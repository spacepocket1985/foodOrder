import { Modal } from '../UI/Modal';
import styles from './Cart.module.css';

type CartPropsType = {someProps?: string};

export const Cart = (props: CartPropsType): JSX.Element => {
  const {} = props;
  const cartItems = (
    <ul className={styles['cart-items']}>
      {[{ id: 'm1', name: 'Sushi', price: 10, amount: 2 }].map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );

  return (
    <Modal>
      {cartItems}
      <div className={styles.total}>
        <span>Итого</span>
        <span>49,99</span>
      </div>
      <div className={styles.actions}>
        <button className={styles['button--alt']}>Закрыть</button>
        <button className={styles.button}>Заказать</button>
      </div>
    </Modal>
  );
};
