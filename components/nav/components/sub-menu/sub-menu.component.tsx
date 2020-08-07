import React from 'react'

import styles from './sub-menu.module.styl'
import { ISubMenuItem } from '../../nav.interface'

interface IProps {
	subMenu: ISubMenuItem[]
}

const SubMenuComponent: React.FC<IProps> = ({ subMenu }) => (
	<ul className={styles.list}>
		{subMenu.map(item => (
			<li className={styles.item} key={item.id}>
				<a className={styles.link} href={item.link}>
					{item.title}
				</a>
			</li>
		))}
	</ul>
)

export default SubMenuComponent