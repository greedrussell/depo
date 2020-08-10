import Head from 'next/head'

import styles from './saving-account.module.styl'
import Layout from '../../../components/layout'
import HeroImg from './components/hero-img/hero-img.component'
import { IFooter } from '../../../components/footer/footer.interface'
import LogoSVG from '../../../public/assets/svg/footer__logo.svg'

const MENU__LIST = [
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

const DepositPlusCardPage: React.FC<{}> = () => (
	<>
		<Head>
			<title>Накопительный счет</title>
		</Head>
		<Layout footer={FOOTER_CONFIG}>
			<section className={styles['hero-img']}>
				{/* <HeroImgNav isScroll={isScroll} /> */}
				<div className="container">
					<HeroImg />
				</div>
			</section>
			{/* <ActionInfo />
				<AboutAction />
				<Calculator />
				<HowItWork />
				<CustomerInfo />
				<Faq />
				<MobileApp />
				<Footer /> */}
		</Layout>
	</>
)

export default DepositPlusCardPage