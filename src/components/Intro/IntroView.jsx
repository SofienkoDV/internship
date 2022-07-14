import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import styles from './Intro.module.scss';

function IntroView({
  _myRef,
  _onMouseMove,
  maskStyle
}) {
  const { t } = useTranslation();

  return (
    <div className={styles.intro}>
      <div className={styles.container}>
        <div className={styles.intro__inner}>
          <div
            className={styles.intro__container}
            ref={_myRef}
            onMouseMove={_onMouseMove}
            style={maskStyle}
          >
            <div className={styles.intro__wrapper}>
              <h1>{t('welcome')}</h1>
            </div>
            <div className={`${styles.intro__wrapper} ${styles.intro__clone}`}>
              <h1>{t('welcome')}</h1>
            </div>
            <h2 className={styles.intro__subtitle}>{t('subWelcome')}</h2>
          </div>

          <a className={styles.btn} href="https://wowjs.uk/">
            Find Out More
          </a>
        </div>
      </div>
    </div>
  );
}

IntroView.propTypes = {
  _myRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]),
  _onMouseMove: PropTypes.func,
  maskStyle: PropTypes.shape({
    '--maskX': PropTypes.number,
    '--maskY': PropTypes.number,
  }),
};

IntroView.defaultProps = {
  _myRef: null,
  _onMouseMove: null,
  maskStyle: null,
};

export default IntroView;
