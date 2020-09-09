import actionTypes from './actionTypes'
// import reducerFillTasks from './reducers/reducerFillTasks'
// import reducerFillTasksFilter from './reducers/reducerFillTasksFilter'
// import reducerAddTasks from './reducers/reducerAddTasks'
// import reducerFillBalloon from './reducers/reducerFillBalloon'
// import reducerAddBalloonItems from './reducers/reducerAddBalloonItems'
// import reducerToggleBalloonLoading from './reducers/reducerToggleBalloonLoading'
// import reducerToggleLoadingMore from './reducers/reducerToggleLoadingMore'
// import reducerFetchTasks from './reducers/reducerFetchTasks'
// import reducerSetViewed from './reducers/reducerSetViewed'
import { Reducer } from 'redux'

const initialState: any = {
	filter: {
		keywords: {
			query: '',
			items: [],
		},
		address: {
			query: '',
			highlight: null,
			error: false,
		},
		radius: {
			options: [],
			selected: null,
		},
		price: {
			value: '',
		},
		checkboxes: {
			remoteOnly: false,
			noOffersOnly: false,
			sbrOnly: false,
			b2bOnly: false,
		},
		filterOpened: false,
		mapOpened: false,
	},
	sortingType: null,
	items: [],
	requestParams: null,
	isLoadingMore: false,
	total: 0,
	balloonItems: [],
	requestedBalloonCount: 0,
	balloonIds: [],
	isAllTasks: true,
	isMyTasks: false,
	isLoading: false,
	isUniversalLink: false,
	isBalloonLoading: false,
	showDistance: true,
	banners: [],
	attributes: {
		list: 'all',
		geoKind: 'locality',
		radius: '',
		actualTasksOnly: true,
	},
}

const tasksReducer: Reducer<any> = (state = initialState, { type, data }) => {
	switch (type) {
		// case actionTypes.FETCH_TASKS:
		// 	return reducerFetchTasks(state, data)

		default:
			return state
	}
}

export default tasksReducer
