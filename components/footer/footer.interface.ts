export interface IFooterMenuItem {
	id: number
	title: string
	link: string
}

export interface IFooter {
	isMobileApp: boolean
	isSocialNetwork: boolean
	isContact: boolean
	isMenu: boolean
	isCopyright: boolean
	menu: IFooterMenuItem[]
	logoUrl: string
}
