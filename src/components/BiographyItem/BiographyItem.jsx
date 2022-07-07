import PropTypes from 'prop-types';
import styles from './BiographyItem.module.scss';

function BiographyItem({
  imageUrl, name, cash, cryptocurrency 
}) {
  return (
    <div className={styles.Biography__item}>
      <img
        className={styles.Biography__icon}
        src={imageUrl}
        alt="BiographyOne"
      />
      <h4 className={styles.Biography__title}>{name}</h4>
      <p className={styles.Biography__cash}>
        Cash: 
        {' '}
        {cash}
        {' '}
        $
      </p>
      <p>
        Bitcoin:
        {' '}
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
  cryptocurrency: PropTypes.arrayOf(PropTypes.string),
};

BiographyItem.defaultProps = {
  imageUrl: '',
  name: '',
  cash: 0,
  cryptocurrency: [],
};

export default BiographyItem;
