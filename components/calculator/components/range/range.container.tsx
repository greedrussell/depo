import React from 'react'
import { Range, getTrackBackground } from 'react-range'

import styles from './range.module.styl'
import CalculatorThumpComponent from '../thumb/thumb.component'

interface IProps {
	rate: number[]
	min: number
	max: number
	step: number
	handleChange: (transactionRate: number[]) => void
}

class CalculatorRangeSliderContainer extends React.Component<IProps, {}> {
	shouldComponentUpdate(nextProps: IProps) {
		if (nextProps.rate[0] > nextProps.max) {
			return false
		}

		return true
	}

	render() {
		const { rate, handleChange, min, max, step } = this.props

		return (
			<div className={styles.slider}>
				<Range
					step={step}
					min={min}
					max={max}
					values={rate}
					onChange={handleChange}
					renderTrack={({ props, children }) => (
						<div
							onMouseDown={props.onMouseDown}
							onTouchStart={props.onTouchStart}
							className={styles.track}>
							<div
								className={styles.line}
								ref={props.ref}
								style={{
									background: getTrackBackground({
										values: rate,
										colors: ['#52AE30', '#B8B8B8'],
										min,
										max,
									}),
								}}>
								{children}
							</div>
						</div>
					)}
					renderThumb={CalculatorThumpComponent}
				/>
			</div>
		)
	}
}

export default CalculatorRangeSliderContainer
