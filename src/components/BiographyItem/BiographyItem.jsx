/* eslint-disable react/jsx-one-expression-per-line */
import PropTypes from 'prop-types';
import styles from './BiographyItem.module.scss';

// eslint-disable-next-line object-curly-newline
function BiographyItem({ imageUrl, name, cash, cryptocurrency }) {
  return (
    <div className={styles.Biography__item}>
      <img
        className={styles.Biography__icon}
        src={imageUrl}
        alt="BiographyOne"
      />
      <h4 className={styles.Biography__title}>{name}</h4>
      <p className={styles.Biography__cash}>Cash: {cash} $</p>
      <p>
        Bitcoin:
        {cryptocurrency}
      </p>
      <div className={styles.Biography__text}>
        The standard chunk of Lorem Ipsum used since the is reproduced below for
        those interested
      </div>
    </div>
  );
}

BiographyItem.propTypes = {
  imageUrl: PropTypes.string,
  name: PropTypes.string,
  cash: PropTypes.number,
  // eslint-disable-next-line react/forbid-prop-types
  cryptocurrency: PropTypes.array,
};

BiographyItem.defaultProps = {
  imageUrl: '',
  name: '',
  cash: 0,
  cryptocurrency: 0,
};

export default BiographyItem;
