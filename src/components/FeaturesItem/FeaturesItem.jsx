import styles from './FeaturesItem.module.scss'
import FeatureOne from '../../assets/features/1.png'

function FeaturesItem(props) {
	console.log(props.imageUrl)
	return (
		<div className={styles.features__item}>
			<img className={styles.features__icon} src={FeatureOne} alt={props.alt} />
			<h4 className={styles.features__title}>{props.title}</h4>
			<div className={styles.features__text}>
				The standard chunk of Lorem Ipsum used since the is reproduced below for
				those interested
			</div>
		</div>
	)
}

export default FeaturesItem
