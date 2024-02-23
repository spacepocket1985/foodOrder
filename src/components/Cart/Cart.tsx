import { useContext } from 'react';

import { CartContext } from '../../store/cartContext';
import { Modal } from '../UI/Modal';
import styles from './Cart.module.css';
import { CartItem } from './CartItem';

type CartPropsType = { onHideCart: () => void };

export const Cart = (props: CartPropsType): JSX.Element => {
  const cartContext = useContext(CartContext);

  const { onHideCart } = props;

  const cartItems = (
    <ul className={styles['cart-items']}>
      {cartContext.items.map((item) => (
        <CartItem
          cartItem={item}
          onAdd={() => {
            cartContext.addItem(item);
          }}
          onRemove={() => {}}
        />
      ))}
    </ul>
  );

  return (
    <Modal onHideCart={onHideCart}>
      {cartItems}
      <div className={styles.total}>
        <span>Итого</span>
        <span>{cartContext.totalAmount}</span>
      </div>
      <div className={styles.actions}>
        <button className={styles['button--alt']} onClick={onHideCart}>
          Закрыть
        </button>
        <button className={styles.button}>Заказать</button>
      </div>
    </Modal>
  );
};
