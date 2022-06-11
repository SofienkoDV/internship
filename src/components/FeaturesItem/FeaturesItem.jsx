import PropTypes from 'prop-types';
import styles from './FeaturesItem.module.scss';

function FeaturesItem({ imgUrl, alt, title }) {
  return (
    <div className={styles.features__item}>
      <img className={styles.features__icon} src={imgUrl} alt={alt} />
      <h4 className={styles.features__title}>{title}</h4>
      <div className={styles.features__text}>
        The standard chunk of Lorem Ipsum used since the is reproduced below for
        those interested
      </div>
    </div>
  );
}

FeaturesItem.propTypes = {
  imgUrl: PropTypes.string,
  alt: PropTypes.string,
  title: PropTypes.string,
};

FeaturesItem.defaultProps = {
  imgUrl: '',
  alt: '',
  title: '',
};

export default FeaturesItem;
