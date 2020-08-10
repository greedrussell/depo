import Head from 'next/head'
import Router from 'next/router'
import Link from 'next/link'

import Layout from '../../components/layout'
import LogoSVG from '../../public/assets/svg/footer__logo.svg'
import {
	IFooter,
	IFooterMenuItem,
} from '../../components/footer/footer.interface'

const MENU__LIST: IFooterMenuItem[] = [
	{
		id: 1,
		title: 'Офисы',
		link: 'https://www.otpbank.ru/retail/branches/',
	},
	{
		id: 2,
		title: 'Банкоматы',
		link: 'https://www.otpbank.ru/about/',
	},
	{
		id: 3,
		title: 'О банке',
		link: 'https://www.otpbank.ru/about/',
	},
	{
		id: 4,
		title: 'Интернет-банк',
		link: 'https://online.otpbank.ru/login/product-auth',
	},
]

const FOOTER_CONFIG: IFooter = {
	isMobileApp: true,
	isSocialNetwork: true,
	isContact: true,
	isMenu: true,
	isCopyright: true,
	menu: MENU__LIST,
	logoUrl: LogoSVG,
}

const Home: React.FC<{}> = () => {
	return (
		<>
			<Head>
				<title>Home</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Layout footer={FOOTER_CONFIG}>
				<div className="container">
					<br />
					<br />
					<h1 className="title">Home INdex page</h1>
					<Link href="/posts/ssg-ssr">
						<a href="/posts/ssg-ssr">(Link) SSR</a>
					</Link>

					<br />
					<span onClick={() => Router.replace('/posts/ssg-ssr')}>
						Pre rendering
					</span>
				</div>
			</Layout>
		</>
	)
}

export default Home