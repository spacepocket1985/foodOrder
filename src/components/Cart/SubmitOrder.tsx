import styles from './SubmitOrder.module.css';

type SubmitOrderPropsType = {
  onHideCart: () => void;
};

const onSubmitHandler = (event:React.FormEvent<HTMLFormElement>) => {
  event.preventDefault();
}

export const SubmitOrder = (props: SubmitOrderPropsType): JSX.Element => {
  const { onHideCart } = props;
  return (
    <form onSubmit={onSubmitHandler}>
      <div className={styles.control}>
        <label htmlFor="name">Ведите ваше имя</label>
        <input type="text" id="name" />
      </div>
      <div className={styles.control}>
        <label htmlFor="city">Город</label>
        <input type="text" id="city" />
      </div>
      <div className={styles.control}>
        <label htmlFor="address">Адрес</label>
        <input type="text" id="address" />
      </div>
      <div className={styles.actions}>
        <button className={styles.submit}>Подтвердить заказ</button>
        <button type="button" onClick={onHideCart}>
          Отменить
        </button>
      </div>
    </form>
  );
};
