import PropTypes from 'prop-types';
import styles from './Home.module.scss';

function HomeView({ visible, toggleVisibility, HomeItem }) {
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
};

HomeView.defaultProps = {
  visible: false,
  toggleVisibility: () => {},
  HomeItem: () => {},
};

export default HomeView;
