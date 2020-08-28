import React from 'react'

import styles from './calculator-thumb.module.styl'
import LeftArrowSVG from '../../../../public/assets/svg/calculator__left-arrow.svg'
import RigthArrowSVG from '../../../../public/assets/svg/calculator__right-arrow.svg'

const CalculatorThumpComponent: React.FC<any> = ({ props }) => {
	return (
		<div className={styles.thumb} {...props}>
			<img src={LeftArrowSVG} alt="" className={styles.left} />
			<img src={RigthArrowSVG} alt="" className={styles.right} />
		</div>
	)
}

export default CalculatorThumpComponent
