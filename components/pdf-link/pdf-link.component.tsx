import React from 'react'

import styles from './pdf-link.module.styl'
import PdfSVG from '../../public/assets/svg/pdf.svg'

interface IProps {
	link: string
	text: string
}

const PdfLink: React.FC<IProps> = ({ link, text }) => (
	<div className={styles.block}>
		<img className={styles.img} src={PdfSVG} alt="Иконка PDF файла" />
		<a href={link} className={styles.link}>
			{text}
		</a>
	</div>
)

export default PdfLink
