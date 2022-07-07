import { useState } from 'react';
import HomeView from './HomeView';
import HomeItem from '../../components/HomeItem/HomeItem';

function Home() {
  const [visible, setVisible] = useState(true);

  const toggleVisibility = () => {
    setVisible((PrevVisible) => !PrevVisible);
  };

  return (
    <HomeView
      visible={visible}
      toggleVisibility={toggleVisibility}
      HomeItem={HomeItem}
    />
  );
}

export default Home;
