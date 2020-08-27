import React, { useState } from 'react'

import styles from './action-info.module.styl'
import ToggleButtonComponent from './components/toggle-button/toggle-button.component'
import InfoBlockComponent from './components/info-block/info-block.component'

const ActionInfoContainer: React.FC<{}> = () => {
	const [isActive, setActive] = useState(false)

	const handleClick = () => setActive(!isActive)

	return (
		<div className={styles.wrapper}>
			<div className={styles.left}>
				<h2 className={styles.title}>Акция «Будь в плюсе»</h2>
				<p className={styles.text}>
					Получите возможность удвоить остаток на вашем накопительном счете!
				</p>
				{isActive && <InfoBlockComponent />}
				<ToggleButtonComponent isActive={isActive} handleClick={handleClick} />
			</div>
		</div>
	)
}

export default ActionInfoContainer
