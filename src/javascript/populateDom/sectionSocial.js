import addTextNode from '../utils/addTextNode.js'
import {
	MAP_TITLE_TO_MEDIA,
	SOCIAL_MEDIA,
	CONTACT,
} from '../../assets/copy/Social.js'

export default function social() {
	const socialMediaWrapper = document.querySelector('.social-media-wrapper')

	Object.values(SOCIAL_MEDIA).map((media) => {
		const { profile, url, logo } = MAP_TITLE_TO_MEDIA[media]

		const socialMedia = document.createElement('div')
		socialMedia.classList.add('social-media-card')

		const mediaLogo = document.createElement('img')
		mediaLogo.setAttribute('src', `${logo}`)

		const anchor = document.createElement('a')
		anchor.setAttribute('href', `${url}`)
		anchor.setAttribute('target', '_blank')

		const mediaProfileName = document.createElement('span')
		mediaProfileName.classList.add('social-media-profile')
		addTextNode(mediaProfileName, profile)

		anchor.appendChild(mediaLogo)
		anchor.appendChild(mediaProfileName)
		socialMedia.appendChild(anchor)
		socialMediaWrapper.appendChild(socialMedia)
	})

	const contactStart = document.querySelector('.contact-copy-start')
	addTextNode(contactStart, CONTACT.paragraphStart)

	const contactEnd = document.querySelector('.contact-copy-end')
	addTextNode(contactEnd, CONTACT.paragraphEnd)

	const contactMailTo = document.querySelector('.contact-mail-to')
	addTextNode(contactMailTo, CONTACT.mailTo)
	contactMailTo.setAttribute('href', CONTACT.emailAddress)
}
