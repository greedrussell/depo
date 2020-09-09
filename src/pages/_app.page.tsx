import { AppProps } from 'next/app'
import { Provider } from 'react-redux'

import '../styles/init.styl'
import store from './store'
/* 

	// You can use these instead of
  // mapStateToProps and mapDispatchToProps
  const dispatch = useDispatch();
  const holders = useSelector(getHolders);
*/

function App({ Component, pageProps }: AppProps) {
	// const store = useStore(pageProps.initialReduxState)

	return (
		<Provider store={store}>
			<Component {...pageProps} />
		</Provider>
	)
}

export default App