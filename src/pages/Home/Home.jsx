import { useState } from 'react';
import HomeView from './HomeView';
import HomeItem from '../../components/HomeItem/HomeItem';
import styles from './Home.module.scss';

function Home() {
  const [visible, setVisible] = useState(true);

  const toggleVisibility = () => {
    // eslint-disable-next-line no-shadow
    setVisible((visible) => !visible);
  };

  return (
    <HomeView
      visible={visible}
      toggleVisibility={toggleVisibility}
      HomeItem={HomeItem}
      styles={styles}
    />
  );
}

export default Home;
