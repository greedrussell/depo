export interface IDeposit {
	id: number
	month: number
	percent: number
	title: string
	subTitle: string
	minDepositRate: number
	maxDepositRate: number
}

export interface ITariff {
	id: number
	tariffName: string
	deposit: IDeposit[]
	pluses: string[]
}

export interface IActiveTariff {
	id: number
	tariffName: string
	deposit: IDeposit[]
	pluses: string[]
	month: number
	percent: number
	minDepositRate: number
	maxDepositRate: number
}

export interface ICalculatorState extends IActiveTariff {
	bonusPercent: number
	transactionRate: number
	depositRate: number
}

export interface IAppState {
	calculator: ICalculatorState
}