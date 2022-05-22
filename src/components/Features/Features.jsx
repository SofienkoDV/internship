import { useContext } from 'react';
import AppContext from '../../context';
import FeaturesItem from '../FeaturesItem/FeaturesItem';
import styles from './Features.module.scss';


function Features() {
    const { features } = useContext(AppContext);

  return (
    <div className={styles.container}>
        <div className={styles.features}>
                {features.map((featureItem) => (
                <FeaturesItem 
                    key={featureItem.id}
                    title={featureItem.title}
                    imageUrl={featureItem.imageUrl}
                    alt={featureItem.alt}
                />
                ))}
        </div>
    </div>
  )
}

export default Features;