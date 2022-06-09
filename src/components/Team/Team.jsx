import styles from './Team.module.scss'
import { TeamOne, TeamTwo, TeamThree, TeamFour } from '../'

function Team() {
	return (
		<div className={styles.team}>
			<div className={styles.container}>
				<div className={styles.team__inner}>
					<div className={styles.team__item}>
						<img className={styles.team__photo} src={TeamOne} alt='TeamOne' />
						<div className={styles.team__name}>Денис Софієнко</div>
						<div className={styles.team__prof}>Студент</div>
						<div className={styles.team__text}>
							<p>
								Fusce dapibus, tellus ac cursus commodo, tortor mauris
								condimentum nibh, ut fermentum massa justo sit amet risus.
							</p>
							<p>
								Maecenas sed diam eget risus varius blandit sit amet non magna.
								Nullam quis risus eget urna mollis ornare vel eu leo.
							</p>
						</div>
					</div>

					<div className={styles.team__item}>
						<img className={styles.team__photo} src={TeamTwo} alt='TeamTwo' />
						<div className={styles.team__name}>Блинов Камиль</div>
						<div className={styles.team__prof}>Senior Back-end Developer</div>
						<div className={styles.team__text}>
							<p>
								Fusce dapibus, tellus ac cursus commodo, tortor mauris
								condimentum nibh, ut fermentum massa justo sit amet risus.
							</p>
							<p>
								Maecenas sed diam eget risus varius blandit sit amet non magna.
								Nullam quis risus eget urna mollis ornare vel eu leo.
							</p>
						</div>
					</div>

					<div className={styles.team__item}>
						<img
							className={styles.team__photo}
							src={TeamThree}
							alt='TeamThree'
						/>
						<div className={styles.team__name}>Котов Эрик</div>
						<div className={styles.team__prof}>UI Designer</div>
						<div className={styles.team__text}>
							<p>
								Fusce dapibus, tellus ac cursus commodo, tortor mauris
								condimentum nibh, ut fermentum massa justo sit amet risus.
							</p>
							<p>
								Maecenas sed diam eget risus varius blandit sit amet non magna.
								Nullam quis risus eget urna mollis ornare vel eu leo.
							</p>
						</div>
					</div>

					<div className={styles.team__item}>
						<img className={styles.team__photo} src={TeamFour} alt='TeamFour' />
						<div className={styles.team__name}>Веселов Чарльз</div>
						<div className={styles.team__prof}>Full Stack Developer</div>
						<div className={styles.team__text}>
							<p>
								Fusce dapibus, tellus ac cursus commodo, tortor mauris
								condimentum nibh, ut fermentum massa justo sit amet risus.
							</p>
							<p>
								Maecenas sed diam eget risus varius blandit sit amet non magna.
								Nullam quis risus eget urna mollis ornare vel eu leo.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Team
