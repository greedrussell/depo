import actionTypes from './actionTypes'
import { IActiveTariff } from './calcaulator.interface'

const setTariffAction = (activeTariff: IActiveTariff) => {
	return {
		type: actionTypes.SET_ACTIVE_TARIFF,
		data: {
			id: activeTariff.id,
			tariffName: activeTariff.tariffName,
			deposit: activeTariff.deposit,
			pluses: activeTariff.pluses,
			month: activeTariff.deposit[0].month,
			percent: activeTariff.deposit[0].percent,
			minDepositRate: activeTariff.deposit[0].minDepositRate,
			maxDepositRate: activeTariff.deposit[0].maxDepositRate,
		},
	}
}

export default setTariffAction