import { combineReducers } from 'redux'

import { IAppState } from './calcaulator.interface'
import calculator from './reducer'

export default combineReducers<IAppState>({
	calculator,
})