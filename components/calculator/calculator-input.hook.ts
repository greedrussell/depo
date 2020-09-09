import React, { useState } from 'react'

import {
	getPercentSum,
	getBonusPercent,
	getBonusSum,
} from '../../helpers/calculator.helper'

export const useInputState = (
	initialDepositRate?: number,
	minDepositRate?: number,
	maxDepositRate?: number
) => {
	const [depositRate, setDepositRate] = useState(initialDepositRate)

	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const depositRate = +event.target.value

		if (isNaN(depositRate)) {
			return
		}

		if (depositRate > maxDepositRate * 100) {
			return
		}

		if (depositRate < 0) {
			return
		}

		setDepositRate(depositRate)
	}

	const handleInputBlur = (): boolean => {
		if (depositRate < minDepositRate) {
			setDepositRate(minDepositRate)

			return false
		}

		if (depositRate > maxDepositRate) {
			setDepositRate(maxDepositRate)

			return false
		}

		return false
	}

	return {
		depositRate,
		handleInputChange,
		handleInputBlur,
	}

	// const handleInputRangeChange = (depositRate: number[]): void => {
	// 	const { bonusPercent, percent, month } = this.state

	// 	const percentSum = getPercentSum(depositRate[0], percent, month)
	// 	const bonusSum = getBonusSum(depositRate[0], bonusPercent, month)
	// 	const totalPercentSum = percentSum + bonusSum

	// 	this.setState({
	// 		depositRate: depositRate[0],
	// 		totalPercentSum,
	// 	})
	// }
}