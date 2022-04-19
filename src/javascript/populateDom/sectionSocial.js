import addTextNode from '../utils/addTextNode.js'
import {
	MAP_TITLE_TO_MEDIA,
	SOCIAL_MEDIA,
} from '../../assets/copy/Social/Social.js'

export default function social() {
	const socialMediaContainers = document.querySelectorAll(
		'.social-media-container'
	)

	socialMediaContainers.forEach((container, index) => {
		const { profile, url } =
			MAP_TITLE_TO_MEDIA[Object.values(SOCIAL_MEDIA)[index]]

		const anchor = document.createElement('a')
		anchor.setAttribute('href', `${url}`)
		anchor.setAttribute('target', '_blank')
		anchor.classList.add('social-media-profile')
		addTextNode(anchor, profile)

		container.appendChild(anchor)
	})
}
