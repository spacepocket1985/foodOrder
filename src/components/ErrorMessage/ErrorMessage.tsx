import errorImg from './error.gif';
import styles from './ErrorMessage.module.css';

type ErrorMsgPropsType = {
  errorMsg: null | string;
};

export const ErrorMessage = (props: ErrorMsgPropsType) => {
  return (
    <div className={styles.errorMessage}>
      <h2 className={styles.errorMessageTitle}>We have some error here! </h2>
      <img className={styles.errorMessageImg} src={errorImg} alt="Error" />;
      <p className={styles.errorMessageInfo}>{props.errorMsg}</p>
    </div>
  );
};
