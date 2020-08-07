import { ReactElement } from 'react'

export interface ISubMenuItem {
	id: number
	title: string
	link: string
}

export interface IUserMenuItem {
	id: number
	alert: string
	link: string
	iconUrl: ReactElement
}
