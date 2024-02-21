import { ReactNode } from 'react';
import styles from './Card.module.css';

type CardPropsType = {
  children: ReactNode;
};

export const Card = (props: CardPropsType): JSX.Element => {
  const { children } = props;
  return <div className={styles.card}>{children}</div>;
};
