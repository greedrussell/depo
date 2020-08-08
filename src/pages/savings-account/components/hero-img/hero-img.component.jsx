import { Link } from 'react-scroll'

import styles from './hero-img.module.styl'
import HeroImgPluses from '../pluses/pluses.component'

class HeroImg extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			isScroll: false,
		}
	}

	handleScroll = () => {
		const offsetTop = window.pageYOffset

		if (window.innerWidth >= 768) {
			if (offsetTop === 0) {
				this.setState({
					isScroll: false,
				})
			} else {
				this.setState({
					isScroll: true,
				})
			}
		}
	}

	componentDidMount() {
		window.addEventListener('scroll', this.handleScroll)
	}

	componentWillUnmount() {
		window.removeEventListener('scroll', this.handleScroll)
	}

	render() {
		const isScroll = this.state.isScroll

		return (
			<>
				<div className={styles.wrapper}>
					<h1 className={styles.title}>
						Повышаем процент&nbsp;
						<span className="inline">по накопительному счёту</span>
					</h1>
					<HeroImgPluses />
					<Link to="Form" smooth={true} duration={500} className={styles.link}>
						<button className={styles.btn + ' btn btn--orange'}>
							Открыть счёт
						</button>
					</Link>
				</div>
			</>
		)
	}
}

export default HeroImg