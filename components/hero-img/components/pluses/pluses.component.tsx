import ArrowSVG from '../../../../public/assets/svg/hero-img__arrow.svg'
import styles from './pluses.module.styl'

const HeroImgPluses = () => (
	<ul className={styles.list}>
		<li className={styles.item}>
			<img src={ArrowSVG} alt="" className={styles.img} />
			<p className={styles.text}>До 6,5% годовых</p>
		</li>
		<li className={styles.item}>
			<img src={ArrowSVG} alt="" className={styles.img} />
			<p className={styles.text}>
				Пополнение и снятие&nbsp;<span className="inline">без ограничений</span>
			</p>
		</li>
		<li className={styles.item}>
			<img src={ArrowSVG} alt="" className={styles.img} />
			<p className={styles.text}>
				Акция «Будь в плюсе» — возможность получить
				<span className="inline">до 350 000 рублей</span>
			</p>
		</li>
	</ul>
)

export default HeroImgPluses