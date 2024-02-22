import { HeaderCartButton } from './HeaderCartButton';
import sushiImage from '../../assets/sushi.jpg';

import styles from './Header.module.css';

type HeaderPropsType = {
  onShowCart: () => void;
};

export const Header = (props: HeaderPropsType): JSX.Element => {

  const { onShowCart} = props;

  return (
    <>
      <header className={styles.header}>
        <h1>Япона кухня</h1>
        <HeaderCartButton onShowCart={onShowCart}/>
      </header>
      <div className={styles['main-image']}>
        <img src={sushiImage} alt="japan food" />
      </div>
    </>
  );
};
