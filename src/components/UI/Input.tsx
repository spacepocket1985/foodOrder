import React from 'react';
import { HTMLInputTypeAttribute } from 'react';
import styles from './Input.module.css';

type InputPropsType = {
  id: string;
  label: string;
  min: string;
  step: string;
  defaultValue: string;
  type: HTMLInputTypeAttribute;
  ref: React.RefObject<HTMLInputElement>;
};

export const Input = React.forwardRef((props: InputPropsType, ref: React.Ref<HTMLInputElement>): JSX.Element => {
  const { id, label, type, min, step, defaultValue} = props;
  return (
    <div className={styles.input}>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        type={type}
        min={min}
        step={step}
        defaultValue={defaultValue}
        ref={ref}
      />
    </div>
  );
});
