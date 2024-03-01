import { useRef, useState } from 'react';
import { UserDataType } from '../../types/types';

import styles from './SubmitOrder.module.css';

type SubmitOrderPropsType = {
  onHideCart: () => void;
  onSubmitOrder:(userData:UserDataType)=>void;
};

type FormValidityStateType = {
  name: boolean;
  city: boolean;
  address: boolean;
};

export const SubmitOrder = (props: SubmitOrderPropsType): JSX.Element => {
  const { onHideCart, onSubmitOrder } = props;

  const [formValidity, setFormValidity] = useState<FormValidityStateType>({
    name: true,
    city: true,
    address: true,
  });

  const nameInputRef = useRef<HTMLInputElement>(null);
  const cityInputRef = useRef<HTMLInputElement>(null);
  const addressInputRef = useRef<HTMLInputElement>(null);

  const isInputValid = (inputValue: string): boolean =>
    inputValue.trim() !== '';

  const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const enteredName = nameInputRef.current!.value;
    const enteredCity = cityInputRef.current!.value;
    const enteredAddress = addressInputRef.current!.value;

    const isEnteredNameValid = isInputValid(enteredName);
    const isEnteredCityValid = isInputValid(enteredCity);
    const isEnteredAddressValid = isInputValid(enteredAddress);

    setFormValidity({
      name: isEnteredNameValid,
      address: isEnteredAddressValid,
      city: isEnteredCityValid,
    });

    const isFormValid =
      isEnteredNameValid && isEnteredCityValid && isEnteredAddressValid;

    if (!isFormValid) return;
    onSubmitOrder({name: enteredName, city: enteredCity, address: enteredAddress})
  };

  const nameInputClasses = `${styles.control} ${formValidity.name ? '':styles.invalid}`;
  const cityInputClasses = `${styles.control} ${formValidity.name ? '':styles.invalid}`;
  const addressInputClasses = `${styles.control} ${formValidity.name ? '':styles.invalid}`;

  return (
    <form onSubmit={onSubmitHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Ваше имя</label>
        <input type="text" id="name" ref={nameInputRef} />
        {!formValidity.name && <p>Ведите ваше имя</p>}
      </div>
      <div className={cityInputClasses}>
        <label htmlFor="city">Город</label>
        <input type="text" id="city" ref={cityInputRef} />
        {!formValidity.city && <p>Ведите ваш город</p>}
      </div>
      <div className={addressInputClasses}>
        <label htmlFor="address">Адрес</label>
        <input type="text" id="address" ref={addressInputRef} />
        {!formValidity.address && <p>Ведите ваш адресс</p>}
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
