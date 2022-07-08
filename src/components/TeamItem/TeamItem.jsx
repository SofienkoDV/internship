import PropTypes from 'prop-types';
import styles from './TeamItem.module.scss';

function TeamItem({
  name, prof, text, textTwo, alt, photoUrl 
}) {
  return (
    <div className={styles.team__item}>
      <img className={styles.team__photo} src={photoUrl} alt={alt} />
      <div className={styles.team__name}>{name}</div>
      <div className={styles.team__prof}>{prof}</div>
      <div className={styles.team__text}>
        <p>
          {text}
        </p>
        <p>
          {textTwo}
        </p>
      </div>
    </div>
  );
}

TeamItem.propTypes = {
  name: PropTypes.string,
  prof: PropTypes.string,
  text: PropTypes.string,
  textTwo: PropTypes.string,
  alt: PropTypes.string,
  photoUrl: PropTypes.string,
};

TeamItem.defaultProps = {
  name: '',
  prof: '',
  text: '',
  textTwo: '',
  alt: '',
  photoUrl: '',
};

export default TeamItem;
