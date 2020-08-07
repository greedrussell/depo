import React from 'react'

import styles from './nav.module.styl'
import { SUB_MENU_LIST, USER_MENU_LIST } from './nav-mock-data'
import LogoComponent from './components/logo/logo.component'
import SearchComponent from './components/search/search.component'
import SubMenuComponent from './components/sub-menu/sub-menu.component'
import LocationComponent from './components/location/location.component'
import CatalogMenuComponent from './components/catalog-menu/catalog-menu.component'
import UserMenuComponent from './components/user-menu/user-menu.component'

const Nav: React.FC<{}> = () => (
	<nav className={styles.nav}>
		<div className={styles.top}>
			<div className="container">
				<div className={styles['top__wrapper']}>
					<LogoComponent />
					<SubMenuComponent subMenu={SUB_MENU_LIST} />
					<LocationComponent city={'Москва'} />
				</div>
			</div>
		</div>
		<div className={styles.bottom}>
			<div className="container">
				<div className={styles['bottom__wrapper']}>
					<CatalogMenuComponent />
					<SearchComponent />
					<UserMenuComponent userMenu={USER_MENU_LIST} />
				</div>
			</div>
		</div>
	</nav>
)

export default Nav