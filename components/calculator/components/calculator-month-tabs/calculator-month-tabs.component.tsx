import React from 'react'

import styles from './calculator-month-tabs.module.styl'
import Tab from './tab.component'

interface IDeposit {
	id: number
	month: number
	percent: number
	title: string
	subTitle: string
}

interface IProps {
	deposit: IDeposit[]
	month: number
	title: string
	handleClick: (month: number, percent: number) => () => void
}

const CalculatorMonthTabs: React.FC<IProps> = ({
	deposit,
	month,
	title,
	handleClick,
}) => (
	<div className={styles.container}>
		<h3 className={styles.title}>{title}</h3>
		<ul className={styles.list}>
			{deposit.map((item: IDeposit) => (
				<Tab
					isActive={month === item.month}
					title={item.title}
					subTitle={item.subTitle}
					handleClick={handleClick(item.month, item.percent)}
					key={item.id}
				/>
			))}
		</ul>
	</div>
)

export default CalculatorMonthTabs
