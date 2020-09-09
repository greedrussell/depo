import { createStore, applyMiddleware } from 'redux'
// import thunk from 'redux-thunk';
import { devToolsEnhancer } from 'redux-devtools-extension/developmentOnly'
import rootReducer from './rootReducer'

// const composeEnhancers = composeWithDevTools({ actionCreators, trace: true, traceLimit: 25 });

// const store = createStore(reducer, preloadedState, composeEnhancers(
// 	applyMiddleware(invariant(), thunk)
// ));

// const enhancer = window.__REDUX_DEVTOOLS_EXTENSION__ &&
// 	window.__REDUX_DEVTOOLS_EXTENSION__({ actionCreators, serialize: true, trace: true });

const store = createStore(rootReducer, undefined, devToolsEnhancer({}))

export default store

// import { useMemo } from 'react'

// import { composeWithDevTools } from 'redux-devtools-extension'

// let store: Store

// function initStore(initialState: any) {
// 	return createStore(rootReducer, initialState)
// }

// export const initializeStore = (preloadedState: any) => {
// 	let _store = store ?? initStore(preloadedState)

// 	// After navigating to a page with an initial Redux state, merge that state
// 	// with the current state in the store, and create a new store
// 	if (preloadedState && store) {
// 		_store = initStore({
// 			...store.getState(),
// 			...preloadedState,
// 		})
// 		// Reset the current store
// 		store = undefined
// 	}

// 	// For SSG and SSR always create a new store
// 	if (typeof window === 'undefined') return _store
// 	// Create the store once in the client
// 	if (!store) store = _store

// 	return _store
// }

// export function useStore(initialState: any) {
// 	const store = useMemo(() => initializeStore(initialState), [initialState])
// 	return store
// }