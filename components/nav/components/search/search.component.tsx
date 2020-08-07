import React from 'react'

import styles from './search.module.styl'
import LoupeSVG from '../../../../src/svg/nav__loupe.svg'

const SearchComponent: React.FC<{}> = () => (
	<div className={styles.search}>
		<LoupeSVG className={styles.icon} />
		<input type="text" placeholder="Поиск" className={styles.input} />
	</div>
)

export default SearchComponent