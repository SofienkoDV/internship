import styles from './Features.module.scss';

import featuresOne from '../../assets/features/1.png';
import featuresTwo from '../../assets/features/2.png';
import featuresThree from '../../assets/features/3.png';
import featuresFour from '../../assets/features/4.png';
import featuresFive from '../../assets/features/5.png';
import featuresSix from '../../assets/features/6.png';


function Features() {
    return (
        <div className={styles.container}>
    <div className={styles.features}>
        <div className={styles.features__item}>
            <img className={styles.features__icon} src={featuresOne} alt="featuresOne" />
            <h4 className={styles.features__title}>UX Research</h4>
            <div className={styles.features__text}>The standard chunk of Lorem Ipsum used since the is reproduced below for those interested</div>
        </div>

        <div className={styles.features__item}>
            <img className={styles.features__icon} src={featuresTwo} alt="featuresTwo" />
            <h4 className={styles.features__title}>Brand Design</h4>
            <div className={styles.features__text}>The standard chunk of Lorem Ipsum used since the is reproduced below for those interested</div>
        </div>

        <div className={styles.features__item}>
            <img className={styles.features__icon} src={featuresThree} alt="featuresThree" />
            <h4 className={styles.features__title}>Web Development</h4>
            <div className={styles.features__text}>The standard chunk of Lorem Ipsum used since the is reproduced below for those interested</div>
        </div>

        <div className={styles.features__item}>
            <img className={styles.features__icon} src={featuresFour} alt="featuresFour" />
            <h4 className={styles.features__title}>Clean Code</h4>
            <div className={styles.features__text}>The standard chunk of Lorem Ipsum used since the is reproduced below for those interested</div>
        </div>

        <div className={styles.features__item}>
            <img className={styles.features__icon} src={featuresFive} alt="featuresFive" />
            <h4 className={styles.features__title}>Ready to Ship</h4>
            <div className={styles.features__text}>The standard chunk of Lorem Ipsum used since the is reproduced below for those interested</div>
        </div>

        <div className={styles.features__item}>
            <img className={styles.features__icon} src={featuresSix} alt="featuresSix" />
            <h4 className={styles.features__title}>Download</h4>
            <div className={styles.features__text}>The standard chunk of Lorem Ipsum used since the is reproduced below for those interested</div>
        </div>
    </div>
</div>
    )
}

export default Features;