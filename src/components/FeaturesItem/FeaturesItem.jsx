import PropTypes from 'prop-types'
import styles from './FeaturesItem.module.scss'

function FeaturesItem(props) {
	return (
		<div className={styles.features__item}>
			<img
				className={styles.features__icon}
				src={props.imgUrl}
				alt={props.alt}
			/>
			<h4 className={styles.features__title}>{props.title}</h4>
			<div className={styles.features__text}>
				The standard chunk of Lorem Ipsum used since the is reproduced below for
				those interested
			</div>
		</div>
	)
}

FeaturesItem.propTypes = {
	imgUrl: PropTypes.string,
	alt: PropTypes.string,
	title: PropTypes.string,
}

export default FeaturesItem
