import { useContext, useState } from 'react';

import { CartContext } from '../../store/cartContext';
import { Modal } from '../UI/Modal';
import styles from './Cart.module.css';
import { CartItem } from './CartItem';
import { SubmitOrder } from './SubmitOrder';

type CartPropsType = { onHideCart: () => void };

export const Cart = (props: CartPropsType): JSX.Element => {
  const [isSubmitOrderAvailable, setIsSubmitOrderAvailable] = useState(false);
  const cartContext = useContext(CartContext);

  const { onHideCart } = props;

  const totalAmount = `$${cartContext.totalAmount.toFixed(2)}`;
  const hasItems = cartContext.items.length > 0;

  const cartItems = (
    <ul className={styles['cart-items']}>
      {cartContext.items.map((item) => (
        <CartItem cartItem={item} key={item.id} />
      ))}
    </ul>
  );

  const orderHandler = (): void => {
    setIsSubmitOrderAvailable(true);
  };

  const modalButtons = (
    <div className={styles.actions}>
      <button className={styles['button--alt']} onClick={onHideCart}>
        Закрыть
      </button>
      {hasItems && (
        <button className={styles.button} onClick={orderHandler}>
          Заказать
        </button>
      )}
    </div>
  );

  return (
    <Modal onHideCart={onHideCart}>
      {cartItems}
      <div className={styles.total}>
        <span>Итого</span>
        <span>{totalAmount}</span>
      </div>
      {!isSubmitOrderAvailable && modalButtons}
      {isSubmitOrderAvailable && <SubmitOrder onHideCart={onHideCart}/>}
    </Modal>
  );
};
