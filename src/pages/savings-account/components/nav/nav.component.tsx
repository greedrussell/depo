import LogoSVG from '../../../../../public/assets/svg/logo.svg'
import LogoScrollSVG from '../../../../../public/assets/svg/nav__logo--scroll.svg'

const HeroImgNav = ({ isScroll = false }) => (
	<nav className={isScroll ? 'HeroImg__nav scroll' : 'HeroImg__nav'}>
		<div className="container">
			<div className="HeroImg__nav__wrapper">
				<a href="/#" className="HeroImg__nav__link">
					<img
						src={LogoSVG}
						alt="OTP bank logo"
						className="HeroImg__nav__link__img"
					/>

					<img
						src={LogoScrollSVG}
						alt="OTP bank logo"
						className="HeroImg__nav__link__img HeroImg__nav__link__img--scroll"
					/>
				</a>
				<ul className="HeroImg__nav__list">
					<li className="HeroImg__nav__item">
						<a className="HeroImg__nav__item__link" href="/#">
							Рассчитать доход
						</a>
					</li>
					<li className="HeroImg__nav__item">
						<a className="HeroImg__nav__item__link" href="/#">
							Вопросы и ответы
						</a>
					</li>
					<li className="HeroImg__nav__item">
						<a href="/#" className="btn btn--green btn--small">
							Открыть счет
						</a>
					</li>
				</ul>
			</div>
		</div>
	</nav>
)

export default HeroImgNav
