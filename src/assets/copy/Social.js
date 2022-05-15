const path = 'src/assets/icons'

export const CONTACT = Object.freeze({
	paragraphStart:
		'We are currently looking for music in archives, preparing scores and making beautiful programs.\n If you would like to hire us for a concert, don’t hesitate to ',
	mailTo: 'reach us via email',
	paragraphEnd: ' or via social media.',
	emailAddress: 'bosmansbeyond@gmail.com',
})

export const SOCIAL_MEDIA = Object.freeze({
	FACEBOOK: 'facebook',
	INSTAGRAM: 'instagram',
	YOUTUBE: 'youtube',
})

export const MAP_TITLE_TO_MEDIA = Object.freeze({
	[SOCIAL_MEDIA.FACEBOOK]: {
		profile: '/BosmansBeyond',
		url: 'https://www.facebook.com/BosmansBeyond/',
		logo: `${path}/facebook.svg`,
	},
	[SOCIAL_MEDIA.INSTAGRAM]: {
		profile: '/bosmansbeyond',
		url: 'https://www.instagram.com/bosmansbeyond/',
		logo: `${path}/instagram.svg`,
	},
	[SOCIAL_MEDIA.YOUTUBE]: {
		profile: 'Bosmans & Beyond',
		url: 'https://www.youtube.com/channel/UCDmtuNR6rWMsMwmSh8kSfHg',
		logo: `${path}/youtube.svg`,
	},
})
