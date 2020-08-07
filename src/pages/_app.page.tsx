import { AppProps } from 'next/app'

import '../styles/init.styl'

function App({ Component, pageProps }: AppProps) {
	return <Component {...pageProps} />
}

export default App