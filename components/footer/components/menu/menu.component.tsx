import React from 'react'

import styles from './menu.module.styl'

interface IMenuItem {
	id: number
	title: string
	link: string
}

interface IProps {
	menu: IMenuItem[]
}

const Menu: React.FC<IProps> = ({ menu }) => (
	<ul className={styles.menu}>
		{menu.map(item => (
			<li className={styles.item} key={item.id}>
				<a href={item.link} className={styles.link}>
					{item.title}
				</a>
			</li>
		))}
	</ul>
)

export default Menu
