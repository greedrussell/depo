import React from 'react'

import styles from './bonus-input.module.styl'
import CalculatorRangeSliderContainer from '../range/range.container'

interface IProps {
	transactionRate: number
	bonusPercent: number
	handleBonusInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void
	handleBonusInputBlur: () => void
	handleBonusInputRangeChange: (transactionRate: number[]) => void
}

const CalculatorBonusInputComponent: React.FC<IProps> = ({
	transactionRate,
	handleBonusInputChange,
	handleBonusInputBlur,
	bonusPercent,
	handleBonusInputRangeChange,
}) => {
	const MIN: number = 0
	const MAX: number = 100000
	const STEP: number = 1000

	return (
		<div>
			<h3 className={styles.title}>
				Сумма покупок в месяц (необходима для повышенной ставки)
			</h3>
			<div className={styles.block}>
				<input
					type="text"
					className={styles.input}
					placeholder=""
					value={transactionRate}
					onChange={handleBonusInputChange}
					onBlur={handleBonusInputBlur}
				/>
				<CalculatorRangeSliderContainer
					min={MIN}
					max={MAX}
					step={STEP}
					rate={[transactionRate]}
					handleChange={handleBonusInputRangeChange}
				/>
				<div className={styles.info}>
					<p className={styles.text}>
						+ {bonusPercent.toString().replace('.', ',')}% к ставке
					</p>
				</div>
			</div>
		</div>
	)
}

export default CalculatorBonusInputComponent
