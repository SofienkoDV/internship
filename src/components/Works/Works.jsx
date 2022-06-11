import {
  worksOne,
  worksTwo,
  worksThree,
  worksFour,
  worksFive,
  worksSix,
  worksSeven,
  worksEight,
} from '..';
import styles from './Works.module.scss';

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
        <img
          className={styles.works__photo}
          src={worksThree}
          alt="worksThree"
        />
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
        <img
          className={styles.works__photo}
          src={worksSeven}
          alt="worksSeven"
        />
        <div className={styles.works__content}>
          <div className={styles.works__title}>Project Name</div>
          <div className={styles.works__text}>Design</div>
        </div>
      </div>

      <div className={styles.works__item}>
        <img
          className={styles.works__photo}
          src={worksEight}
          alt="worksEight"
        />
        <div className={styles.works__content}>
          <div className={styles.works__title}>Project Name</div>
          <div className={styles.works__text}>Design</div>
        </div>
      </div>
    </div>
  );
}

export default Works;
