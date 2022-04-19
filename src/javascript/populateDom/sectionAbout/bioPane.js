import { MAP_NAMES_TO_BIO, NAMES } from '../../../assets/copy/About/People.js'
import addTextNode from '../../utils/addTextNode.js'
import handleTogglePane from '../../utils/handleTogglePane.js'

export default function bioPane() {
	const container = document.querySelector('.container')

	Object.values(NAMES).forEach((name) => {
		const { fullName, website, photo, bio } = MAP_NAMES_TO_BIO[name]
		const buttonControlTargetId = `bio-pane-${fullName
			.split(' ')[0]
			.toLowerCase()}`

		const bioPane = document.createElement('div')
		bioPane.classList.add('bio-pane')
		bioPane.id = buttonControlTargetId

		const bioContainer = document.createElement('div')
		bioContainer.classList.add('pane-bio-container')

		const closeBioPaneButton = document.createElement('button')
		closeBioPaneButton.classList.add('close-bio-pane')
		closeBioPaneButton.setAttribute('area-controls', buttonControlTargetId) // targets ID
		closeBioPaneButton.setAttribute('area-expanded', true)
		addTextNode(closeBioPaneButton, 'close')
		closeBioPaneButton.addEventListener('click', () =>
			handleTogglePane(buttonControlTargetId, closeBioPaneButton, false)
		)
		bioContainer.appendChild(closeBioPaneButton)

		const personName = document.createElement('h2')
		personName.classList.add('pane-person-name')
		addTextNode(personName, fullName)
		bioContainer.appendChild(personName)

		const personBio = document.createElement('p')
		personBio.classList.add('pane-bio')
		addTextNode(personBio, bio)
		bioContainer.appendChild(personBio)

		const anchorContainer = document.createElement('p')
		anchorContainer.classList.add('pane-bio-anchor-container')

		const personWebsiteAnchor = document.createElement('a')
		personWebsiteAnchor.setAttribute('href', `${website}`)
		personWebsiteAnchor.setAttribute('target', '_blank')
		addTextNode(
			personWebsiteAnchor,
			`Visit ${fullName.split(' ')[0]}'s website`
		)
		anchorContainer.appendChild(personWebsiteAnchor)
		bioContainer.appendChild(anchorContainer)

		const personImageContainer = document.createElement('div')
		personImageContainer.classList.add('pane-bio-image-container')
		bioPane.appendChild(personImageContainer)

		const personImage = document.createElement('img')
		personImage.classList.add('pane-bio-image-lg')
		personImage.setAttribute('src', photo)
		personImageContainer.appendChild(personImage)

		// personImage.style.cssText = `background-image: url(${photo})`

		bioPane.appendChild(bioContainer)
		bioPane.appendChild(personImageContainer)
		container.appendChild(bioPane)
	})
}
