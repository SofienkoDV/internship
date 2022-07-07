import PropTypes from 'prop-types';
import styles from './Biography.module.scss';

function BiographyView({ filterName, setValue, BiographyItem }) {
  return (
    <div className={styles.container}>
      <div className={styles.BiographyForm}>
        <input
          className={styles.BiographyInput}
          type="text"
          placeholder="Шукати за ім'ям..."
          onChange={(e) => setValue(e.target.value)}
        />
      </div>

      <div className={styles.Biography}>
        {filterName.map((item) => (
          <BiographyItem
            key={item.id}
            name={item.name}
            imageUrl={item.imageUrl}
            cash={item.cash}
            cryptocurrency={item.cryptocurrency.map(({ amount }) => amount)}
          />
        ))}
      </div>
    </div>
  );
}

BiographyView.propTypes = {
  filterName: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      imageUrl: PropTypes.string,
      cash: PropTypes.number,
      cryptocurrency: PropTypes.arrayOf(
        PropTypes.shape({
          amount: PropTypes.number,
        })
      ),
    })
  ),
  setValue: PropTypes.func,
  BiographyItem: PropTypes.func,
};

BiographyView.defaultProps = {
  filterName: [],
  setValue: () => {},
  BiographyItem: () => {},
};

export default BiographyView;
