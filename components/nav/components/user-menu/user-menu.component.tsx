import React, { ReactElement } from 'react'

import styles from './user-menu.module.styl'
import { IUserMenuItem } from '../../nav.interface'

interface IProps {
	userMenu: IUserMenuItem[]
}

const UserMenuComponent: React.FC<IProps> = ({ userMenu }) => (
	<ul className={styles.list}>
		{userMenu.map(item => {
			const IconSVG: any = item.iconUrl

			return (
				<li className={styles.item} key={item.id}>
					<a className={styles.link} href={item.link}>
						<span className={styles.alert}>{item.alert}</span>
						<IconSVG className={styles.icon} />
					</a>
				</li>
			)
		})}
	</ul>
)

export default UserMenuComponent