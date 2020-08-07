import { ISubMenuItem, IUserMenuItem } from './nav.interface'
import FavoriteSVG from '../../src/svg/nav__favorite.svg'
import ProfileSVG from '../../src/svg/nav__profile.svg'
import BasketSVG from '../../src/svg/nav__basket.svg'
import CompareProductsSVG from '../../src/svg/nav__compare-product.svg'

export const SUB_MENU_LIST: ISubMenuItem[] = [
	{
		id: 1,
		title: 'Гарантия и возврат',
		link: '/#',
	},
	{
		id: 2,
		title: 'Доставка',
		link: '/#',
	},
	{
		id: 3,
		title: 'Акции и скидки',
		link: '/#',
	},
	{
		id: 4,
		title: 'Оплата',
		link: '/#',
	},
	{
		id: 5,
		title: 'Контакты',
		link: '/#',
	},
]

export const USER_MENU_LIST: IUserMenuItem[] = [
	{
		id: 1,
		alert: 'Личный кабинет',
		iconUrl: ProfileSVG,
		link: '/#',
	},
	{
		id: 2,
		alert: 'Избранные товары',
		iconUrl: FavoriteSVG,
		link: '/#',
	},
	{
		id: 3,
		alert: 'Сравнить товары',
		iconUrl: CompareProductsSVG,
		link: '/#',
	},
	{
		id: 4,
		alert: 'Корзина',
		iconUrl: BasketSVG,
		link: '/#',
	},
]