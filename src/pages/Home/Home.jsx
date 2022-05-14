import { useState } from 'react';
import HomeItem from '../../components/HomeItem/HomeItem';
import styles from './Home.module.scss';

function Home() {
    const [visible, setVisible] = useState(true);

    const toggleVisibility = () => {
        setVisible((visible) => !visible);
    }

return (
    <div className="mt-50">
        {visible && <HomeItem />}
        <div className={styles.centerHome}>
            <button className={styles.buttonHome} onClick={toggleVisibility}>Показати / Сховати</button>
        </div>
    </div>    
    );
  }
  
export default Home;