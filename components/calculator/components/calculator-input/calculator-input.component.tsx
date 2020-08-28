import React from 'react'

import styles from './calculator-input.module.styl'
import CalculatorRangeSlider from '../calculator-range/calculator-range.component'

interface IProps {
	depositRate: number
	minDepositRate: number
	maxDepositRate: number
	handleChange: (depositRate: number[]) => void
	handleInputBlur: () => void
	handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => any
	getSumFormat: (sum: number) => string
	title: string
}

const CalculatorInput: React.FC<IProps> = ({
	depositRate,
	minDepositRate,
	maxDepositRate,
	handleChange,
	handleInputBlur,
	handleInputChange,
	getSumFormat,
	title = '',
}) => {
	if (!minDepositRate || !maxDepositRate) {
		return null
	}

	const STEP = 10000

	return (
		<div className={styles.container}>
			<h3 className={styles.title}>{title}</h3>
			<div className={styles.block}>
				<input
					type="text"
					className={styles.input}
					placeholder=""
					value={depositRate}
					onChange={handleInputChange}
					onBlur={handleInputBlur}
				/>
				<CalculatorRangeSlider
					min={minDepositRate}
					max={maxDepositRate}
					rate={[depositRate]}
					step={STEP}
					handleChange={handleChange}
				/>
			</div>
			<div className={styles.info}>
				<div className={styles.text}>от {getSumFormat(minDepositRate)} ₽</div>
				<div className={styles.text}>до {getSumFormat(maxDepositRate)} ₽</div>
			</div>
		</div>
	)
}

export default CalculatorInput
