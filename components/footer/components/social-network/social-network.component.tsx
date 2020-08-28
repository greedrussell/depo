import React from 'react'

import FbSVG from '../../../../public/assets/svg/footer__fb.svg'
import VkSVG from '../../../../public/assets/svg/footer__vk.svg'
import InSVG from '../../../../public/assets/svg/footer__in.svg'
import OkSVG from '../../../../public/assets/svg/footer__ok.svg'
import styles from './social-network.module.styl'

const FooterSocialNetworkComponent: React.FC<{}> = () => (
	<ul className={styles.list}>
		<li>
			<a href="/#" className={styles.link}>
				<img src={FbSVG} alt="" className={styles.img} />
			</a>
		</li>
		<li>
			<a href="/#" className={styles.link}>
				<img src={VkSVG} alt="" className={styles.img} />
			</a>
		</li>
		<li>
			<a href="/#" className={styles.link}>
				<img src={InSVG} alt="" className={styles.img} />
			</a>
		</li>
		<li>
			<a href="/#" className={styles.link}>
				<img src={OkSVG} alt="" className={styles.img} />
			</a>
		</li>
	</ul>
)

export default FooterSocialNetworkComponent
