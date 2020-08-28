import React from 'react'

import styles from './pluses-list.module.styl'
import ArrowSVG from '../../../../public/assets/svg/calculator__arrow.svg'

interface IProps {
	children?: React.ReactChild
}

const PlusItem: React.FC<IProps> = ({ children }) => (
	<li className={styles.item}>
		<img src={ArrowSVG} className={styles.img} alt="" />
		<p className={styles.text}>{children}</p>
	</li>
)

const PlusesList = () => {
	return (
		<ul className={styles.list}>
			<PlusItem>Пополнение и снятие без ограничений</PlusItem>
			<PlusItem>Выплата процентов каждый месяц</PlusItem>
			<PlusItem>Возможность открытия онлайн</PlusItem>
		</ul>
	)
}

export default PlusesList
