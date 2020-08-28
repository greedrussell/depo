import React from 'react'
import classnames from 'classnames'

import styles from './tab.module.styl'

interface IProps {
	isActive: boolean
	title: string
	subTitle: string
	handleClick: () => void
}

const CalculatorTabComponent: React.FC<IProps> = ({
	isActive,
	title,
	subTitle = '',
	handleClick,
}) => {
	const tabClass = classnames({
		[styles.tab]: true,
		[styles.active]: isActive,
	})

	return (
		<div className={tabClass} onClick={handleClick}>
			<h3 className={styles.title}>{title}</h3>
			{subTitle.length > 0 && <p className={styles.text}>{subTitle}</p>}
		</div>
	)
}

export default CalculatorTabComponent
