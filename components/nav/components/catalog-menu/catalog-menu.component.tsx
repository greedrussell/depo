import Link from 'next/link'

import styles from './catalog-menu.module.styl'
import MenuButtonSVG from '../../../../src/svg/nav__menu-btn.svg'

const CatalogMenuComponent: React.FC<{}> = () => (
	<Link href="/posts/[id]" as="/posts/pre-rendering">
		<div className={styles.menu}>
			<MenuButtonSVG className={styles.icon} />
			<span className={styles.title}>Каталог(посты)</span>
		</div>
	</Link>
)

export default CatalogMenuComponent
