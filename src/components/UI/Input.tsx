import { HTMLInputTypeAttribute } from 'react';
import styles from './Input.module.css';

type InputPropsType = {
  id: string;
  label: string;
  min: string;
  step: string;
  defaultValue: string;
  type: HTMLInputTypeAttribute;
};

export const Input = (props: InputPropsType): JSX.Element => {
  const { id, label, type, min, step, defaultValue } = props;
  return (
    <div className={styles.input}>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        type={type}
        min={min}
        step={step}
        defaultValue={defaultValue}
      />
    </div>
  );
};
