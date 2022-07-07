import PropTypes from 'prop-types';
import styles from './Intro.module.scss';

function IntroView({
  _myRef,
  _onMouseMove,
  maskStyle,
  textTitle,
  textSubtitle,
}) {
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
              <h1>{textTitle}</h1>
            </div>
            <div className={`${styles.intro__wrapper} ${styles.intro__clone}`}>
              <h1>{textTitle}</h1>
            </div>
            <h2 className={styles.intro__subtitle}>{textSubtitle}</h2>
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
  textTitle: PropTypes.string,
  textSubtitle: PropTypes.string,
};

IntroView.defaultProps = {
  _myRef: null,
  _onMouseMove: null,
  maskStyle: null,
  textTitle: '',
  textSubtitle: '',
};

export default IntroView;
