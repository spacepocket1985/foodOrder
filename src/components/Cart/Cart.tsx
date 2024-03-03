import { useContext, useState } from 'react';

import {
  CartItemType,
  FireBaseMealsType,
  FireBaseOrderInfo,
  UserDataType,
} from '../../types/types';
import { CartContext } from '../../store/cartContext';
import { Modal } from '../UI/Modal';
import styles from './Cart.module.css';
import { CartItem } from './CartItem';
import { SubmitOrder } from './SubmitOrder';
import useHttp, { ManageDataType } from '../../hooks/useHttp';

type CartPropsType = { onHideCart: () => void };
type FullInfoAboutOrderType = {
  id: string;
  user: UserDataType;
  meals: CartItemType[];
};

export const Cart = (props: CartPropsType): JSX.Element => {
  const [isSubmitOrderAvailable, setIsSubmitOrderAvailable] = useState(false);
  const [isDataSubmitting, setIsDataSubmitting] = useState(false);
  const [wasDataSendingSuccessful, setWasDataSendingSuccessful] =
    useState(false);
  const [infoAboutUserOrder, setInfoAboutUserOrder] = useState<
    FullInfoAboutOrderType[]
  >([]);

  const cartContext = useContext(CartContext);

  const { onHideCart } = props;

  const httpRequestData = useHttp();
  const { sendHttpRequest: sendProducts } = httpRequestData;

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

  const submitOrderHandler = (userData: UserDataType) => {
    const logUserOrder: ManageDataType<FireBaseOrderInfo> = (
      data: FireBaseOrderInfo
    ) => {
      const fullInfoAboutOrder: FullInfoAboutOrderType = {
        id: data.name,
        user: userData,
        meals: cartContext.items,
      };

      setInfoAboutUserOrder([fullInfoAboutOrder, ...infoAboutUserOrder]);
    };
    setIsDataSubmitting(true);
    sendProducts(
      {
        endpoint:
          'https://foodorder-35bc5-default-rtdb.firebaseio.com/orders.json',

        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ user: userData, meals: cartContext.items }),
      },
      logUserOrder as ManageDataType<FireBaseMealsType | FireBaseOrderInfo>
    );
    setIsDataSubmitting(false);
    setWasDataSendingSuccessful(true);
    cartContext.clearCart();
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

  const cartModalContent = (
    <>
      {cartItems}
      <div className={styles.total}>
        <span>Итого</span>
        <span>{totalAmount}</span>
      </div>
      {!isSubmitOrderAvailable && modalButtons}
      {isSubmitOrderAvailable && (
        <SubmitOrder
          onHideCart={onHideCart}
          onSubmitOrder={submitOrderHandler}
        />
      )}
    </>
  );
  const dataSubmittingCartModalContent = <p>Отправка данных заказа...</p>;

  const dataWasSubmittedCartModalContent = (
    <>
      <p>{infoAboutUserOrder[0] ? `${infoAboutUserOrder[0].user.name}, Ваш заказ № ${infoAboutUserOrder[0].id}аказ отправлен` : 'no data!'} </p>
      <div className={styles.actions}>
        <button className={styles['button--alt']} onClick={props.onHideCart}>
          Закрыть
        </button>
      </div>
    </>
  );

  return (
    <Modal onHideCart={onHideCart}>
      {!isDataSubmitting && !wasDataSendingSuccessful && cartModalContent}
      {isDataSubmitting &&
        !wasDataSendingSuccessful &&
        dataSubmittingCartModalContent}
      {wasDataSendingSuccessful && dataWasSubmittedCartModalContent}
    </Modal>
  );
};
