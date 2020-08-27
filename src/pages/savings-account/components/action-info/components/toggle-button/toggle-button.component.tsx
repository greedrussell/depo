import React from 'react'

import styles from './toggle-button.module.styl'
import ArrowDownSVG from '../../../../../../../public/assets/svg/action-info__arrow-down.svg'
import ArrowUpSVG from '../../../../../../../public/assets/svg/action-info__arrow-up.svg'
import classnames from 'classnames'

interface IProps {
	isActive: boolean
	handleClick: () => void
}

const ToggleButtonComponent: React.FC<IProps> = ({ isActive, handleClick }) => {
	const blockClass = classnames(
		{
			[styles.block]: true,
		},
		{
			[styles.show]: !isActive,
		},
		{
			[styles.hide]: isActive,
		}
	)

	return (
		<>
			{isActive ? (
				<div className={blockClass} onClick={handleClick}>
					<p className={styles.text}>Свернуть</p>
					<img className={styles.img} src={ArrowUpSVG} alt="Свернуть список" />
				</div>
			) : (
				<div className={blockClass} onClick={handleClick}>
					<p className={styles.text}>Подробнее</p>
					<img
						className={styles.img}
						src={ArrowDownSVG}
						alt="Развернуть список"
					/>
				</div>
			)}
		</>
	)
}

export default ToggleButtonComponent
