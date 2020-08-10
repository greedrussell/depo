import React from 'react'

// import Nav from '../src/pages/savings-account/components/nav/nav.component'
import Footer from './footer/footer.component'
import { IFooter } from './footer/footer.interface'

interface IProps {
	footer: IFooter
}

const Layout: React.FC<IProps> = ({ children, footer }) => {
	return (
		<>
			{/* nav может быть двух видов */}
			{/* <Nav />  */}
			<div className="main">{children}</div>
			<Footer {...footer} />
		</>
	)
}

export default Layout