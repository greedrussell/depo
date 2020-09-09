import React from 'react'

import styles from './tariff-tabs.module.styl'

interface IDeposit {
	id: number
	month: number
	percent: number
	title: string
	subTitle: string
}

interface ITariff {
	id: number
	tariffName: string
	deposit: IDeposit[]
}

interface IProps {
	tariffList: ITariff[]
	handleActiveTariffClick: any
	activeTariffId: number
	depositRate: number
}

const CalculatorTariffTabsComponent: React.FC<IProps> = ({
	tariffList,
	handleActiveTariffClick,
	activeTariffId,
	depositRate,
}) => {
	return (
		<>
			<h3 className={styles.title}>Выберите вклад</h3>
			<ul className={styles.list}>
				{tariffList.map(tariff => (
					<li
						className={
							activeTariffId === tariff.id
								? styles.item + ' ' + styles.active
								: styles.item
						}
						onClick={handleActiveTariffClick(tariff.id, depositRate)}
						key={tariff.id}>
						{tariff.tariffName}
					</li>
				))}
				<div className={styles.line}></div>
			</ul>
		</>
	)
}

export default CalculatorTariffTabsComponent
