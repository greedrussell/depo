import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch, connect } from 'react-redux'

import styles from './calculator.module.styl'
import {
	getPercentSum,
	getBonusPercent,
	getBonusSum,
	getDate,
	getSumFormat,
} from '../../helpers/calculator.helper'
import CalculatorInfoPanelComponent from './components/info-panel/info-panel.component'
import CalculatorPlusesListComponent from './components/pluses/pluses-list.component'
import CalculatorInputComponent from './components/input/input.component'
import CalculatorMonthTabsComponent from './components/month-tabs/month-tabs.component'
import CalculatorBonusInputComponent from './components/bonus-input/bonus-input.component'
import CalculatorTariffTabsComponent from './components/tariff-tabs/tariff-tabs.component'

import { useInputState } from './calculator-input.hook'
import { useActiveTariffState } from './calculator-active-tariff.hook'

import setTariffAction from '../../src/pages/action'

const TARIFF_LIST = [
	{
		id: 1,
		tariffName: 'Пенсионный',
		deposit: [
			{
				id: 1,
				month: 3,
				percent: 3.9,
				title: '3 месяца',
				subTitle: '3.9% годовых',
				minDepositRate: 15000,
				maxDepositRate: 10000000,
			},
			{
				id: 2,
				month: 6,
				percent: 4.4,
				title: '6 месяцев',
				subTitle: '4,4% годовых',
				minDepositRate: 15000,
				maxDepositRate: 10000000,
			},
			{
				id: 3,
				month: 12,
				percent: 4.1,
				title: '1 год',
				subTitle: '4,1% годовых',
				minDepositRate: 15000,
				maxDepositRate: 10000000,
			},
		],
		pluses: [
			'Пополнение вклада от 1 000 ₽',
			'Выплата процентов в конце срока',
			'Вклад пролонгируется',
		],
	},
	{
		id: 2,
		tariffName: 'Максимальный',
		deposit: [
			{
				id: 1,
				month: 3,
				percent: 3.8,
				title: '3 месяца',
				subTitle: '3.8% годовых',
				minDepositRate: 30000,
				maxDepositRate: 30000000,
			},
			{
				id: 2,
				month: 6,
				percent: 4.5,
				title: '6 месяцев',
				subTitle: '4,5% годовых',
				minDepositRate: 30000,
				maxDepositRate: 30000000,
			},
			{
				id: 4,
				month: 12,
				percent: 4,
				title: '1 год',
				subTitle: '4% годовых',
				minDepositRate: 30000,
				maxDepositRate: 30000000,
			},
		],
		pluses: [
			'Ставка +0,2% при открытии вклада <br/> в мобильном и интернет банках',
			'Высокие ставки до года',
			'Вклад пролонгируется',
		],
	},
	{
		id: 3,
		tariffName: 'Накопительный счет',
		deposit: [
			{
				id: 1,
				month: 3,
				percent: 3.9,
				title: '3 месяца',
				subTitle: '3.9% годовых',
				minDepositRate: 1000,
				maxDepositRate: 1000000,
			},
			{
				id: 2,
				month: 6,
				percent: 4.4,
				title: '6 месяцев',
				subTitle: '4,4% годовых',
				minDepositRate: 1000,
				maxDepositRate: 1000000,
			},
			{
				id: 3,
				month: 12,
				percent: 4.1,
				title: '1 год',
				subTitle: '4,1% годовых',
				minDepositRate: 1000,
				maxDepositRate: 1000000,
			},
		],
		pluses: [
			'Пополнение и снятие без ограничений',
			'Выплата процентов каждый месяц',
			'Возможность открытия онлайн',
		],
	},
	{
		id: 4,
		tariffName: 'Стабильный Premium',
		deposit: [
			{
				id: 1,
				month: 6,
				percent: 4.54,
				title: '6 месяцев',
				subTitle: '4,54% годовых',
				minDepositRate: 1500000,
				maxDepositRate: 3000000,
			},
			{
				id: 2,
				month: 12,
				percent: 4.07,
				title: '12 месяцев',
				subTitle: '4,07% годовых',
				minDepositRate: 1500000,
				maxDepositRate: 3000000,
			},
			{
				id: 3,
				month: 6,
				percent: 4.64,
				title: '6 месяцев',
				subTitle: '4,64% годовых',
				minDepositRate: 3000000,
				maxDepositRate: 65000000,
			},
			{
				id: 4,
				month: 12,
				percent: 4.18,
				title: '1 год',
				subTitle: '4,18% годовых',
				minDepositRate: 3000000,
				maxDepositRate: 65000000,
			},
		],
		pluses: [],
	},
]

const CalculatorContainer: React.FC<any> = () => {
	const {
		tariffList,
		activeTariff,
		handleActiveTariffClick,
	} = useActiveTariffState(TARIFF_LIST)
	const { depositRate, handleInputChange, handleInputBlur } = useInputState(
		300000,
		activeTariff.minDepositRate,
		activeTariff.maxDepositRate
	)

	const activeTariffStore = useSelector(state => state)
	const dispatch = useDispatch()

	console.log('CalculatorContainer', activeTariffStore)
	// let totalPercentSum = 0

	useEffect(() => {
		// componentDiDMonth, componentDidUpdate, componentWillUnmount
		// if (depositRate < activeTariff.minDepositRate) {
		// 	setDepositRate(activeTariff.minDepositRate)
		// } else if (depositRate > activeTariff.maxDepositRate) {
		// 	setDepositRate(activeTariff.maxDepositRate)
		// }
		// 	const percentSum = getPercentSum(depositRate, percent, month)
		// 	const bonusSum = getBonusSum(depositRate, bonusPercent, month)
		// 	totalPercentSum = percentSum + bonusSum
		// 	console.log('useEffect totalPrice - ', totalPercentSum)
	})

	return (
		<section className={styles.section}>
			<div className="container">
				<h2 className={styles.title + ' title-h2'}>
					Рассчитайте доход&nbsp;
					<span className={styles.inline}>по накопительному счету</span>
					<button onClick={() => dispatch(setTariffAction(activeTariff))}>
						Set active tariff
					</button>
				</h2>
				<CalculatorTariffTabsComponent
					tariffList={tariffList}
					activeTariffId={activeTariff.id}
					handleActiveTariffClick={handleActiveTariffClick}
					depositRate={depositRate}
				/>
				{activeTariff.pluses.length > 0 && (
					<CalculatorPlusesListComponent pluses={activeTariff.pluses} />
				)}
				<div className={styles.main}>
					<div className={styles.left}>
						<CalculatorInputComponent
							depositRate={depositRate}
							minDepositRate={activeTariff.minDepositRate}
							maxDepositRate={activeTariff.maxDepositRate}
							title={'Первоначальная сумма накопления'}
							handleInputBlur={handleInputBlur}
							handleInputChange={handleInputChange}
							// handleChange={this.handleInputRangeChange}
						/>
						{/* <CalculatorMonthTabsComponent
								deposit={deposit}
								month={month}
								title={'Укажите срок накопления'}
								handleClick={this.handleMonthClick}
							/> */}
						{/* <CalculatorBonusInputComponent
								transactionRate={transactionRate}
								bonusPercent={bonusPercent}
								handleBonusInputChange={this.handleBonusInputChange}
								handleBonusInputBlur={this.handleBonusInputBlur}
								handleBonusInputRangeChange={this.handleBonusInputRangeChange}
							/> */}
					</div>
					<div className={styles.rigth}>
						{/* <CalculatorInfoPanelComponent
							totalPercent={bonusPercent + percent}
							bonusSum={totalPercentSum}
							finalSum={totalPercentSum + depositRate}
							month={month}
						/> */}
					</div>
				</div>
			</div>
		</section>
	)
}

export default connect(null, null, null)(CalculatorContainer)
