import React from 'react'

import FbSVG from '../../../../public/assets/images/footer__fb.svg'
import VkSVG from '../../../../public/assets/images/footer__vk.svg'
import InSVG from '../../../../public/assets/images/footer__in.svg'
import OkSVG from '../../../../public/assets/images/footer__ok.svg'
import styles from './social-network.module.styl'

const SocialNetwork: React.FC<{}> = () => (
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

export default SocialNetwork
