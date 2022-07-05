import { useContext } from 'react';
import AppContext from '../../context';
import WorksItem from '../WorksItem/WorksItem';
import styles from './Works.module.scss';

function Works() {
  const { works } = useContext(AppContext);

  return (
    <div className={styles.works}>
      {works.map((featureItem) => (
        <WorksItem 
          key={featureItem.id}
          title={featureItem.title}
          text={featureItem.text}
          alt={featureItem.alt}
          imgUrl={featureItem.imgUrl}
        />
      ))}
    </div>
  );
}

export default Works;
