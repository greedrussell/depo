import { Reducer } from 'redux'

import actionTypes from './actionTypes'
import { ICalculatorState } from './calcaulator.interface'

const initialState: ICalculatorState = {
	id: 0,
	tariffName: '',
	deposit: [],
	pluses: [],
	month: 0,
	percent: 0,
	minDepositRate: 0,
	maxDepositRate: 1,
	bonusPercent: 0,
	transactionRate: 15000,
	depositRate: 300000,
}

const calculatorReducer: Reducer<ICalculatorState> = (
	state = initialState,
	{ type, data }
) => {
	switch (type) {
		// case actionTypes.SET_ACTIVE_TARIFF:
		// return reducerFetchTasks(state, data)

		case actionTypes.SET_ACTIVE_TARIFF:
			return {
				...state,
				id: data.id,
				tariffName: data.tariffName,
				deposit: data.deposit,
				pluses: data.pluses,
				month: data.month,
				percent: data.percent,
				minDepositRate: data.minDepositRate,
				maxDepositRate: data.maxDepositRate,
			}

		default:
			return state
	}
}

export default calculatorReducer
