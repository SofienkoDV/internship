import styles from './Works.module.scss';

import worksOne from '../../assets/works/1.webp';
import worksTwo from '../../assets/works/2.webp';
import worksThree from '../../assets/works/3.webp';
import worksFour from '../../assets/works/4.webp';
import worksFive from '../../assets/works/5.webp';
import worksSix from '../../assets/works/6.webp';
import worksSeven from '../../assets/works/7.webp';
import worksEight from '../../assets/works/8.webp';

function Works() {
    return (
        <div className={styles.works}>
        <div className={styles.works__item}>
            <img className={styles.works__photo} src={worksOne} alt="worksOne" />
            <div className={styles.works__content}>
                <div className={styles.works__title}>Project Name</div>
                <div className={styles.works__text}>Design</div>
            </div>
        </div>
    
        <div className={styles.works__item}>
            <img className={styles.works__photo} src={worksTwo} alt="worksTwo" />
            <div className={styles.works__content}>
                <div className={styles.works__title}>Project Name</div>
                <div className={styles.works__text}>Design</div>
            </div>
        </div>
    
        <div className={styles.works__item}>
            <img className={styles.works__photo} src={worksThree} alt="worksThree" />
            <div className={styles.works__content}>
                <div className={styles.works__title}>Project Name</div>
                <div className={styles.works__text}>Design</div>
            </div>
        </div>
    
        <div className={styles.works__item}>
            <img className={styles.works__photo} src={worksFour} alt="worksFour" />
            <div className={styles.works__content}>
                <div className={styles.works__title}>Project Name</div>
                <div className={styles.works__text}>Design</div>
            </div>
        </div>
    
        <div className={styles.works__item}>
            <img className={styles.works__photo} src={worksFive} alt="worksFive" />
            <div className={styles.works__content}>
                <div className={styles.works__title}>Project Name</div>
                <div className={styles.works__text}>Design</div>
            </div>
        </div>
    
        <div className={styles.works__item}>
            <img className={styles.works__photo} src={worksSix} alt="worksSix" />
            <div className={styles.works__content}>
                <div className={styles.works__title}>Project Name</div>
                <div className={styles.works__text}>Design</div>
            </div>
        </div>
    
        <div className={styles.works__item}>
            <img className={styles.works__photo} src={worksSeven} alt="worksSeven" />
            <div className={styles.works__content}>
                <div className={styles.works__title}>Project Name</div>
                <div className={styles.works__text}>Design</div>
            </div>
        </div>
    
        <div className={styles.works__item}>
            <img className={styles.works__photo} src={worksEight} alt="worksEight" />
            <div className={styles.works__content}>
                <div className={styles.works__title}>Project Name</div>
                <div className={styles.works__text}>Design</div>
            </div>
        </div>
    </div>
    )
}

export default Works;