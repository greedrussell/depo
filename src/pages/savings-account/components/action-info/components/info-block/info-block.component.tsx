import React from 'react'

import styles from './info-block.module.styl'
import PdfLink from '../../../../../../../components/pdf-link/pdf-link.component'

const InfoBlockComponent = () => (
	<div className={styles.block}>
		<div className={styles.content}>
			<div className={styles.item}>
				<h3 className={styles.title + ' title-h3'}>Как участвовать</h3>
				<p className={styles.text}>
					Пополните ваш накопительный счет и совершайте покупки с карты «ОТП
					Покупки». Сто участников, которые совершат наибольший объем покупок,
					станут обладателями призов!
				</p>
			</div>
			<div className={styles.item}>
				<h3 className={styles.title + ' title-h3'}>Призовой фонд</h3>
				<p className={styles.text}>
					Получите удвоение остатка на вашем накопительном счете до 350 000
					рублей или другие денежные призы!
				</p>
			</div>
		</div>
		<PdfLink text={'Правила акции'} link={'/#'} />
	</div>
)

export default InfoBlockComponent
