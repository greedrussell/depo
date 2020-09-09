import React, { useState } from 'react'

import {
	getPercentSum,
	getBonusPercent,
	getBonusSum,
} from '../../helpers/calculator.helper'

interface IInputHook {
	transactionRate: number
	bonusPercent: number
}

export const useBonuseInputHook = (initialState: IInputHook) => {
	const [transactionRate, setTransactionRate] = useState(
		initialState.transactionRate
	)
	const [bonusPercent, setBonusPercent] = useState(initialState.bonusPercent)
	const maxTransactionRate = 100000

	const handleBonusInputChange = (
		event: React.ChangeEvent<HTMLInputElement>
	): void => {
		const newTransactionRate = +event.target.value

		if (isNaN(newTransactionRate)) {
			return
		}

		if (newTransactionRate > maxTransactionRate * 100) {
			return
		}

		if (newTransactionRate < 0) {
			return
		}

		const newBonusPercent = getBonusPercent(newTransactionRate)

		setTransactionRate(newTransactionRate)
		setBonusPercent(newBonusPercent)
	}

	const handleBonusInputBlur = (): void => {
		if (transactionRate > maxTransactionRate) {
			setTransactionRate(maxTransactionRate)
		}
	}

	return {
		transactionRate,
		bonusPercent,
		handleBonusInputChange,
		handleBonusInputBlur,
	}

	// handleBonusInputRangeChange = (transactionRate: number[]): void => {
	// 	const { depositRate, percent, month } = this.state
	// 	const bonusPercent = getBonusPercent(transactionRate[0])

	// 	const sum = getPercentSum(depositRate, percent, month)
	// 	const bonusSum = getBonusSum(depositRate, bonusPercent, month)
	// 	const totalSum = sum + bonusSum

	// 	this.setState({
	// 		transactionRate: transactionRate[0],
	// 		bonusSum,
	// 		totalSum,
	// 		bonusPercent,
	// 	})
	// }
}