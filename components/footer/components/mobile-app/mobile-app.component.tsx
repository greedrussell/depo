import React from 'react'

import AppleSVG from '../../../../public/assets/images/footer__mobile-app--apple.svg'
import GoogleSVG from '../../../../public/assets/images/footer__mobile-app--google.svg'
import styles from './mobile-app.module.styl'

const MobileApp = () => (
	<div>
		<h3 className={styles.title}>Мобильный банк</h3>
		<div className={styles.block}>
			<img
				className={styles.img}
				src={AppleSVG}
				alt="Скачай Приложение App store"
			/>
			<img
				className={styles.img}
				src={GoogleSVG}
				alt="Скачай Приложение Play market"
			/>
		</div>
	</div>
)

export default MobileApp
