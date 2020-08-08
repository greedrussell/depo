import Head from 'next/head'

import styles from './saving-account.module.styl'
import HeroImg from './components/hero-img/hero-img.component'

const DepositPlusCardPage: React.FC<{}> = () => (
	<>
		<Head>
			<title>Накопительный счет</title>
		</Head>
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
	</>
)

export default DepositPlusCardPage