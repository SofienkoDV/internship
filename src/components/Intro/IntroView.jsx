/* eslint-disable react/forbid-prop-types */
import PropTypes from 'prop-types';

function Intro({
  myRef,
  _onMouseMove,
  maskStyle,
  styles,
  textTitle,
  textSubtitle,
}) {
  return (
    <div className={styles.intro}>
      <div className={styles.container}>
        <div className={styles.intro__inner}>
          <div
            className={styles.intro__container}
            ref={myRef}
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

Intro.propTypes = {
  myRef: PropTypes.object,
  _onMouseMove: PropTypes.func,
  maskStyle: PropTypes.object,
  styles: PropTypes.object,
  textTitle: PropTypes.string,
  textSubtitle: PropTypes.string,
};

Intro.defaultProps = {
  myRef: null,
  _onMouseMove: null,
  maskStyle: null,
  styles: null,
  textTitle: '',
  textSubtitle: '',
};

export default Intro;
