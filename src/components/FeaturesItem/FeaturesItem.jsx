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

export default FeaturesItem
