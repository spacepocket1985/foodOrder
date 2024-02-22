import { ReactNode } from 'react';
import ReactDOM from 'react-dom';

import styles from './Modal.module.css';

type ModalPropsType = {
  children: ReactNode;
  onHideCart: () => void;
};

type BackDropPropsType = {
  onHideCart: () => void;
};

type ModalWindowPropsType = {
  children: ReactNode;
};

const BackDrop = (props: BackDropPropsType): JSX.Element => {
  const {onHideCart} = props;
  return <div className={styles.backdrop} onClick={onHideCart}></div>;
};

const ModalWindow = (props: ModalWindowPropsType): JSX.Element => {
  const { children } = props;
  return (
    <div className={styles.modal}>
      <div className={styles.content}>{children}</div>
    </div>
  );
};

const portalElement = document.getElementById('overlays')!;

export const Modal = (props: ModalPropsType): JSX.Element => {
  const { children, onHideCart } = props;
  return (
    <>
      {ReactDOM.createPortal(<BackDrop onHideCart={onHideCart}/>, portalElement)}
      {ReactDOM.createPortal(
        <ModalWindow>{children}</ModalWindow>,
        portalElement
      )}
    </>
  );
};
