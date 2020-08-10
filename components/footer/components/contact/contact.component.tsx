import React from 'react'

import styles from './contact.module.styl'

const Contact: React.FC<{}> = () => (
	<div className={styles.contact}>
		<p className={styles.title}>Свяжитесь с нами</p>
		<a href="tel:+74957754775" className={styles.link}>
			+7 (495) 775 47 75
		</a>
		<a href="tel:+78002007004" className={styles.link}>
			8 800 200 70 04
		</a>
	</div>
)

export default Contact
