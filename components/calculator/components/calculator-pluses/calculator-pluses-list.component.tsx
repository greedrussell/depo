import React from 'react'

import styles from './calculator-pluses-list.module.styl'
import ArrowSVG from '../../../../public/assets/svg/calculator__arrow.svg'

interface IProps {
	children?: React.ReactChild
}

const CalculatorPlusItemComponent: React.FC<IProps> = ({ children }) => (
	<li className={styles.item}>
		<img src={ArrowSVG} className={styles.img} alt="" />
		<p className={styles.text}>{children}</p>
	</li>
)

const CalculatorPlusesListComponent: React.FC<{}> = () => {
	return (
		<ul className={styles.list}>
			<CalculatorPlusItemComponent>
				Пополнение и снятие без ограничений
			</CalculatorPlusItemComponent>
			<CalculatorPlusItemComponent>
				Выплата процентов каждый месяц
			</CalculatorPlusItemComponent>
			<CalculatorPlusItemComponent>
				Возможность открытия онлайн
			</CalculatorPlusItemComponent>
		</ul>
	)
}

export default CalculatorPlusesListComponent
