import React from 'react'

import styles from './location.module.styl'
import PlacemarkSVG from '../../../../src/svg/nav_placemark.svg'

interface IProps {
	city: string
}

const LocationComponent: React.FC<IProps> = ({ city }) => (
	<div className={styles.block}>
		<PlacemarkSVG className={styles.icon} />
		<span className={styles.title}>{city}</span>
	</div>
)

export default LocationComponent