import React from 'react'

// import Nav from '../src/pages/savings-account/components/nav/nav.component'
import Footer from './footer/footer.component'

interface IProps {
	children: React.ReactNode
}

const Layout: React.FC<IProps> = ({ children }) => {
	return (
		<>
			{/* nav может быть двух видов */}
			{/* <Nav />  */}
			<div className="main">{children}</div>
			{/* <Footer /> */}
		</>
	)
}

export default Layout