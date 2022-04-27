import { MAP_NAMES_TO_BIO, NAMES } from '../../../assets/copy/About.js'

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

		const bioCard = document.createElement('button')
		bioCard.classList.add('bio-card')
		bioCard.setAttribute('area-controls', buttonControlTargetId) // targets html id
		bioCard.setAttribute('area-expanded', 'false')
		bioCard.addEventListener('click', () =>
			handleTogglePane(buttonControlTargetId, bioCard, {
				isExpanded: true,
			})
		)

		const personName = document.createElement('p')
		personName.classList.add('bio-name')
		addTextNode(personName, fullName)
		bioCard.appendChild(personName)

		const bioImage = document.createElement('img')
		bioImage.classList.add('bio-image-sm')
		bioImage.setAttribute('src', photo)
		bioCard.appendChild(bioImage)

		sectionContent.appendChild(bioCard)
		aboutSection.appendChild(sectionContent)
	})
}
