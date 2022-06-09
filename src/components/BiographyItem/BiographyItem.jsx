import PropTypes from 'prop-types'
import styles from './BiographyItem.module.scss'

function BiographyItem(props) {
	return (
		<div className={styles.Biography__item}>
			<img
				className={styles.Biography__icon}
				src={props.imageUrl}
				alt='BiographyOne'
			/>
			<h4 className={styles.Biography__title}>{props.name}</h4>
			<p className={styles.Biography__cash}>Cash: {props.cash} $</p>
			<p>Bitcoin: {props.cryptocurrency}</p>
			<div className={styles.Biography__text}>
				The standard chunk of Lorem Ipsum used since the is reproduced below for
				those interested
			</div>
		</div>
	)
}

BiographyItem.propTypes = {
	imageUrl: PropTypes.string,
	name: PropTypes.string,
	cash: PropTypes.number,
	cryptocurrency: PropTypes.number,
}

export default BiographyItem
