import React from 'react'
import { Link } from 'react-scroll'

import styles from './calculator-info-panel.module.styl'

interface IProps {
	date: string
	totalPercent: number
	bonusSum: string
	finalSum: string
}

const CalculatorInfoPanelComponent: React.FC<IProps> = ({
	date,
	totalPercent,
	bonusSum,
	finalSum,
}) => {
	return (
		<div className={styles.container}>
			<h3 className={styles.title}>Сколько я заработаю</h3>
			<p className={styles.date}>{date}</p>
			<ul className={styles.list}>
				<li className={styles.item}>
					<p className={styles['item__title']}>Доход по вкладу</p>
					<p className={styles['item__text']}>{bonusSum} ₽</p>
				</li>
				<li className={styles.item}>
					<p className={styles['item__title']}>Ставка</p>
					<p className={styles['item__text']}>{+totalPercent.toFixed(2)} %</p>
				</li>
				<li className={styles.item}>
					<p className={styles['item__title']}>Сумма к получению</p>
					<p
						className={
							styles['item__title'] + ' ' + styles['item__title--big']
						}>
						{finalSum} ₽
					</p>
				</li>
			</ul>
			<Link to="Form" smooth={true} duration={500}>
				<button className={styles.btn + ' btn btn--green'}>
					Открыть вклад
				</button>
			</Link>
		</div>
	)
}

export default CalculatorInfoPanelComponent
