import { useContext, useState } from 'react';
import BiographyItem from '../../components/BiographyItem/BiographyItem';
import AppContext from '../../context';
import styles from './Biography.module.scss';

function Biography() {
    const { items } = useContext(AppContext);
    const [value , setValue] = useState('');

    const filterName = items.filter(item => {
        return item.name.toLowerCase().includes(value.toLowerCase())
    });

return (
    <div className={styles.container}>
        <div className={styles.BiographyForm}>
            <input 
                className={styles.BiographyInput}
                type="text"
                placeholder="Шукати за ім'ям..."
                onChange={(e) => setValue(e.target.value)}
            />
        </div>
        
        <div className={styles.Biography}>
            {filterName.map((item) => (
              <BiographyItem
                key={item.id}
                name={item.name}
                imageUrl={item.imageUrl}
                cash={item.cash}
              />
            ))}
        </div>
    </div>
    );
  }
  
export default Biography;



