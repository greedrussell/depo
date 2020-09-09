export const getPercentSum = (
	depositRate: number,
	percent: number,
	month: number
): number => {
	const totalPercent = percent * 0.01
	const sumDuringYear = Math.round(+depositRate * totalPercent)
	const sum = Math.round((sumDuringYear / 12) * month)

	return sum
}

export const getBonusSum = (
	depositRate: number,
	bonusPercent: number,
	month: number
): number => {
	const totalPercent = bonusPercent * 0.01
	const maxInterestAmount = 1000000

	let interestAmount = depositRate

	if (depositRate > maxInterestAmount) {
		interestAmount = maxInterestAmount
	}

	const sumDuringYear = Math.round(+interestAmount * totalPercent)
	const sum = Math.round((sumDuringYear / 12) * month)

	return sum
}

export const getSumFormat = (sum: number): string => {
	let depositRateArr = sum.toString().split('').reverse()
	let indexsArr = []

	for (let i = 0; i < depositRateArr.length; i++) {
		if (i > 0 && i % 3 === 0) {
			indexsArr.push(i)
		}
	}

	for (let i = 0; indexsArr.length !== 0; i++) {
		depositRateArr.splice(indexsArr.pop(), 0, ' ')
	}

	return depositRateArr.reverse().join('') + ' ₽'
}

export const getDate = (month: number): string => {
	const monthArr = [
		'января',
		'февраля',
		'марта',
		'апреля',
		'мая',
		'июня',
		'июля',
		'августа',
		'сентября',
		'октября',
		'ноября',
		'декабря',
	]

	const dateNow = new Date()
	const dayNow = dateNow.getDate()
	const monthNow = dateNow.getMonth()
	const yearNow = dateNow.getFullYear()

	const depositDate = new Date(yearNow, monthNow + month, dayNow)
	const resultDay = depositDate.getDate()
	const resultMonth = depositDate.getMonth()
	const resultYear = depositDate.getFullYear()

	return 'к ' + resultDay + ' ' + monthArr[resultMonth] + ' ' + resultYear
}

export const getBonusPercent = (transactionRate: number): number => {
	let bonusPercent = 0

	if (transactionRate >= 15000) {
		bonusPercent = 0.5
	} else if (transactionRate >= 7000) {
		bonusPercent = 0.2
	} else {
		bonusPercent = 0
	}

	return bonusPercent
}