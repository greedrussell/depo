import { useState } from 'react'

interface IDeposit {
	id: number
	month: number
	percent: number
	title: string
	subTitle: string
	minDepositRate: number
	maxDepositRate: number
}

interface ITariff {
	id: number
	tariffName: string
	deposit: IDeposit[]
	pluses: string[]
}

interface IActiveTariff {
	id: number
	tariffName: string
	deposit: IDeposit[]
	pluses: string[]
	month: number
	percent: number
	minDepositRate: number
	maxDepositRate: number
}

interface IHook {
	activeTariff: IActiveTariff
	tariffList: ITariff[]
	handleActiveTariffClick: (tariffId: number) => () => void | boolean
}

export const useActiveTariffState = (initialState: ITariff[]): IHook => {
	const [activeTariff, setActiveTariff] = useState({
		id: initialState[0].id,
		tariffName: initialState[0].tariffName,
		deposit: initialState[0].deposit,
		pluses: initialState[0].pluses,
		month: initialState[0].deposit[0].month,
		percent: initialState[0].deposit[0].percent,
		minDepositRate: initialState[0].deposit[0].minDepositRate,
		maxDepositRate: initialState[0].deposit[0].maxDepositRate,
	})

	const handleActiveTariffClick = (tariffId: number) => () => {
		if (tariffId === activeTariff.id) {
			return false
		}

		const tariff = initialState.filter(tariff => tariffId === tariff.id)[0]

		setActiveTariff({
			id: tariff.id,
			tariffName: tariff.tariffName,
			deposit: tariff.deposit,
			pluses: tariff.pluses,
			month: tariff.deposit[0].month,
			percent: tariff.deposit[0].percent,
			minDepositRate: tariff.deposit[0].minDepositRate,
			maxDepositRate: tariff.deposit[0].maxDepositRate,
		})
	}

	return {
		activeTariff,
		tariffList: initialState,
		handleActiveTariffClick,
	}
}
