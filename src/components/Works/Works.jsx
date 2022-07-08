import { useContext } from 'react';
import AppContext from '../../context';
import WorksItem from '../WorksItem/WorksItem';
import styles from './Works.module.scss';

function Works() {
  const { works } = useContext(AppContext);

  return (
    <div className={styles.works}>
      {works.map((worksItem) => (
        <WorksItem 
          key={worksItem.id}
          title={worksItem.title}
          text={worksItem.text}
          alt={worksItem.alt}
          imgUrl={worksItem.imgUrl}
        />
      ))}
    </div>
  );
}

export default Works;
