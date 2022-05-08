// import { mapNamesToMusicians } from './People'

const PERFORMERS = Object.freeze({
	ELIZAVETA: 'ELIZAVETA',
	NATALIA: 'NATALIA',
	DIMITRY: 'DIMITRY',
	SATOMI: 'SATOMI',
})

const mapNamesToMusicians = Object.freeze({
	[PERFORMERS.ELIZAVETA]: {
		name: 'Elizaveta Agrafenina',
		instrument: 'soprano',
	},
	[PERFORMERS.NATALIA]: {
		name: 'Natalia Szmydt',
		instrument: 'violin',
	},
	[PERFORMERS.DIMITRY]: {
		name: 'Dimitri Malignan',
		instrument: 'piano',
	},
	[PERFORMERS.SATOMI]: {
		name: 'Satomi Chihara',
		instrument: 'piano',
	},
})

export const VIDEO_TITLES = Object.freeze({
	KINDLY: 'KINDLY',
	CONCERT: 'CONCERT',
	SERENATA: 'SERENATA',
})

export const MAP_TITLE_TO_VIDEO = Object.freeze({
	[VIDEO_TITLES.KINDLY]: {
		author: 'Henriëtte Bosmans',
		title: 'Lead, kindly light',
		url: 'https://www.youtube.com/embed/AVB2cjtmAKE',
		musicians: [
			mapNamesToMusicians['ELIZAVETA'],
			mapNamesToMusicians['SATOMI'],
		],
	},
	[VIDEO_TITLES.CONCERT]: {
		author: 'Henriëtte Bosmans',
		title: 'Concertstuk (excerpts)',
		url: 'https://www.youtube.com/embed/8dT7HavtE1w',
		musicians: [mapNamesToMusicians['NATALIA'], mapNamesToMusicians['DIMITRY']],
	},
	[VIDEO_TITLES.SERENATA]: {
		author: 'Elisabeth Kuyper',
		title: 'Serenata Ticinese',
		url: 'https://www.youtube.com/embed/wGBuyjSqF5s',
		musicians: [mapNamesToMusicians['SATOMI']],
	},
})
