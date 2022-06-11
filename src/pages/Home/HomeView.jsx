/* eslint-disable object-curly-newline */
import PropTypes from 'prop-types';

function HomeView({ visible, toggleVisibility, HomeItem, styles }) {
  return (
    <div className="mt-50">
      {visible && <HomeItem />}
      <div className={styles.centerHome}>
        <button
          type="button"
          className={styles.buttonHome}
          onClick={toggleVisibility}
        >
          Показати / Сховати
        </button>
      </div>
    </div>
  );
}

HomeView.propTypes = {
  visible: PropTypes.bool,
  toggleVisibility: PropTypes.func,
  HomeItem: PropTypes.func,
  // eslint-disable-next-line react/forbid-prop-types
  styles: PropTypes.object,
};

HomeView.defaultProps = {
  visible: false,
  toggleVisibility: () => {},
  HomeItem: () => {},
  styles: {},
};

export default HomeView;
