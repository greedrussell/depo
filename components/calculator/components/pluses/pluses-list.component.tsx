import React from 'react'

import styles from './pluses-list.module.styl'
import ArrowSVG from '../../../../public/assets/svg/calculator__arrow.svg'

interface IItemProps {
	children?: React.ReactChild
}

interface IProps {
	pluses: string[]
}

const CalculatorPlusItemComponent: React.FC<IItemProps> = ({ children }) => (
	<li className={styles.item}>
		<img src={ArrowSVG} className={styles.img} alt="" />
		<p className={styles.text}>{children}</p>
	</li>
)

const CalculatorPlusesListComponent: React.FC<IProps> = ({ pluses }) => {
	return (
		<ul className={styles.list}>
			{pluses.map((plus: string, index: number) => (
				<CalculatorPlusItemComponent key={index}>
					{plus}
				</CalculatorPlusItemComponent>
			))}
		</ul>
	)
}

export default CalculatorPlusesListComponent
