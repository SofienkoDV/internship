import PropTypes from 'prop-types';
import styles from './WorksItem.module.scss';

function WorksItem({
  title, text, imgUrl, alt 
}) {
  return (
    <div className={styles.works__item}>
      <img className={styles.works__photo} src={imgUrl} alt={alt} />
      <div className={styles.works__content}>
        <div className={styles.works__title}>{title}</div>
        <div className={styles.works__text}>{text}</div>
      </div>
    </div>
  );
}

WorksItem.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  imgUrl: PropTypes.string,
  alt: PropTypes.string,
};

WorksItem.defaultProps = {
  title: '',
  text: '',
  imgUrl: '',
  alt: '',
};

export default WorksItem;
