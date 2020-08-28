import React from 'react'

import styles from './footer.module.styl'
import { IFooter as IProps } from './footer.interface'
import FooterMenuComponent from './components/menu/menu.component'
import FooterContactComponent from './components/contact/contact.component'
import FooterSocialNetworkComponent from './components/social-network/social-network.component'
import FooterMobileAppComponent from './components/mobile-app/mobile-app.component'
import FooterCopyrightComponent from './components/copyright/copyright.component'

const FooterComponent: React.FC<IProps> = ({
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
						<FooterMenuComponent menu={menu} />
					</div>
				)}
				{(isContact || isSocialNetwork || isMobileApp) && (
					<div className={styles.middle}>
						<div className={styles.left}>
							{isContact && <FooterContactComponent />}
							{isSocialNetwork && <FooterSocialNetworkComponent />}
						</div>
						{isMobileApp && <FooterMobileAppComponent />}
					</div>
				)}
			</div>
			{isCopyright && <FooterCopyrightComponent logoUrl={logoUrl} />}
		</footer>
	)
}

export default FooterComponent
