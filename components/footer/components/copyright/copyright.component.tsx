import React from 'react'

import styles from './copyright.module.styl'

interface IProps {
	logoUrl: string
}

const FooterCopyrightComponent: React.FC<IProps> = ({ logoUrl }) => (
	<div className={styles.block}>
		<div className="container">
			<div className={styles.wrapper}>
				<img src={logoUrl} alt="Логотип ОТП Банка" className={styles.img} />
				<p className={styles.text}>
					Генеральная лицензия Банка России №2766 от 27.11.2014 г.
				</p>
				<p className={styles.copyright}>© Copyright 2019. OTP Bank</p>
			</div>
		</div>
	</div>
)

export default FooterCopyrightComponent
