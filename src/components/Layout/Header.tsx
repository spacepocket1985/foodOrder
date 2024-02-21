import sushiImage from '../../assets/sushi.jpg';
import styles from './Header.module.css';
import { HeaderCartButton } from './HeaderCartButton';

export const Header = (): JSX.Element => {
  return (
    <>
      <header className={styles.header}>
        <h1>Япона кухня</h1>
        <HeaderCartButton/>
      </header>
      <div className={styles['main-image']}>
        <img src={sushiImage} alt="japan food" />
      </div>
    </>
  );
};
