import React from 'react'

import styles from './footer.module.styl'
import { IFooter as IProps } from './footer.interface'
import Menu from './components/menu/menu.component'
import Contact from './components/contact/contact.component'
import SocialNetwork from './components/social-network/social-network.component'
import MobileApp from './components/mobile-app/mobile-app.component'
import Copyright from './components/copyright/copyright.component'

const Footer: React.FC<IProps> = ({
	isMobileApp = false,
	isSocialNetwork = false,
	isContact = false,
	isMenu = false,
	isCopyright = false,
	menu,
	logoUrl,
}) => {
	if (!(isMobileApp || isSocialNetwork || isContact || isMenu || isCopyright)) {
		return null
	}

	return (
		<footer className={styles.footer}>
			<div className="container">
				{isMenu && (
					<div className={styles.top}>
						<Menu menu={menu} />
					</div>
				)}
				{(isContact || isSocialNetwork || isMobileApp) && (
					<div className={styles.middle}>
						<div className={styles.left}>
							{isContact && <Contact />}
							{isSocialNetwork && <SocialNetwork />}
						</div>
						{isMobileApp && <MobileApp />}
					</div>
				)}
			</div>
			{isCopyright && <Copyright logoUrl={logoUrl} />}
		</footer>
	)
}

export default Footer
