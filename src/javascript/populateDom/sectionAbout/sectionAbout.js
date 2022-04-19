import { MAP_NAMES_TO_BIO, NAMES } from '../../../assets/copy/About/People.js'
import addTextNode from '../../utils/addTextNode.js'
import handleTogglePane from '../../utils/handleTogglePane.js'

export default function about() {
	const aboutSection = document.querySelector('.about')
	const sectionContent = document.createElement('div')
	sectionContent.classList.add('section-content')

	Object.values(NAMES).forEach((name) => {
		const { fullName, photo } = MAP_NAMES_TO_BIO[name]
		const buttonControlTargetId = `bio-pane-${fullName
			.split(' ')[0]
			.toLowerCase()}`

		const openBioPaneButton = document.createElement('button')
		openBioPaneButton.classList.add('open-bio-pane')
		openBioPaneButton.setAttribute('area-controls', buttonControlTargetId) // targets html id
		openBioPaneButton.setAttribute('area-expanded', 'false')
		openBioPaneButton.addEventListener('click', () =>
			handleTogglePane(buttonControlTargetId, openBioPaneButton, true)
		)

		const personName = document.createElement('p')
		personName.classList.add('bio-name')
		addTextNode(personName, fullName)
		openBioPaneButton.appendChild(personName)

		const bioImage = document.createElement('img')
		bioImage.classList.add('bio-image-sm')
		bioImage.setAttribute('src', photo)
		openBioPaneButton.appendChild(bioImage)

		sectionContent.appendChild(openBioPaneButton)
		aboutSection.appendChild(sectionContent)
	})
}
