import Head from 'next/head'
import CalculatorContainer from '../../../components/calculator/calculator.container'
import {
	IFooter,
	IFooterMenuItem
} from '../../../components/footer/footer.interface'
import Layout from '../../../components/layout'
import LogoSVG from '../../../public/assets/svg/footer__logo.svg'
import ActionInfoContainer from './components/action-info/action-info.container'
import HeroImg from './components/hero-img/hero-img.component'
import styles from './saving-account.module.styl'

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

const SavingAccountPage: React.FC<{}> = () => (
	<>
		<Head>
			<title>OTP BANK: Накопительный счет</title>
		</Head>
		<Layout footer={FOOTER_CONFIG}>
			<section className={styles['hero-img']}>
				{/* <HeroImgNav isScroll={isScroll} /> */}
				<div className='container'>
					<HeroImg />
				</div>
			</section>
			<section className={styles['action-info']}>
				<div className='container'>
					<ActionInfoContainer />
				</div>
			</section>
			{/* <AboutAction /> */}
			<CalculatorContainer />

			{/* 
				<HowItWork />
				<CustomerInfo />
				<Faq />
				<MobileApp /> */}
		</Layout>
	</>
)

export default SavingAccountPage
