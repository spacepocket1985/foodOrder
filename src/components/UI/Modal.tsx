import { ReactNode } from 'react';
import ReactDOM from 'react-dom';

import styles from './Modal.module.css';

type ModalPropsType = {
  children: ReactNode;
};

type ModalWindowPropsType = {
  children: ReactNode;
};

const BackDrop = (): JSX.Element => {
  return <div className={styles.backdrop}></div>;
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
  const { children } = props;
  return (
    <>
      {ReactDOM.createPortal(<BackDrop />, portalElement)}
      {ReactDOM.createPortal(
        <ModalWindow>{children}</ModalWindow>,
        portalElement
      )}
    </>
  );
};
