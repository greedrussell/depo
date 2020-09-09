import React, { useState } from 'react'

import {
	getPercentSum,
	getBonusPercent,
	getBonusSum,
} from '../../helpers/calculator.helper'

interface IInputHook {
	month: number
	percent: number
}

export const useMonthTabsHook = (initialState: IInputHook) => {
	// использую активный тариф
	const [month, setMonth] = useState(initialState.month)
	const [percent, setPercent] = useState(initialState.percent)

	const handleMonthClick = (
		newMonth: number,
		newPercent: number
	) => (): void => {
		if (month === newMonth) {
			return
		}

		setMonth(newMonth)
		setPercent(newPercent)
	}

	return {
		month,
		percent,
		handleMonthClick,
	}
}