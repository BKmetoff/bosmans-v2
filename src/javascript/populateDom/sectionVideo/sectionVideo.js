import addTextNode from '../../utils/addTextNode.js'
import handleTogglePane from '../../utils/handleTogglePane.js'

import {
	MAP_TITLE_TO_VIDEO,
	VIDEO_TITLES,
} from '../../../assets/copy/Videos.js'

export default function video() {
	const videoSection = document.querySelector('.video')
	const sectionContent = document.createElement('div')
	sectionContent.classList.add('section-content')

	Object.keys(VIDEO_TITLES).map((video) => {
		console.log(MAP_TITLE_TO_VIDEO[video])
		const { title, author, musicians } = MAP_TITLE_TO_VIDEO[video]

		const buttonControlTargetId = `video-pane-${title
			.split(' ')[0]
			.replace(',', '')
			.toLowerCase()}`

		const videoCard = document.createElement('div')

		videoCard.classList.add('video-card')
		videoCard.setAttribute('area-controls', buttonControlTargetId) // targets html id
		videoCard.setAttribute('area-expanded', 'false')
		videoCard.addEventListener('click', () =>
			handleTogglePane(buttonControlTargetId, videoCard, {
				isExpanded: true,
			})
		)

		const videoTitle = document.createElement('p')
		videoTitle.classList.add('video-title')
		addTextNode(videoTitle, title)
		videoCard.appendChild(videoTitle)

		const pieceAuthor = document.createElement('p')
		pieceAuthor.classList.add('video-author')
		addTextNode(pieceAuthor, author)
		videoCard.appendChild(pieceAuthor)

		sectionContent.appendChild(videoCard)
		videoSection.appendChild(sectionContent)
	})
}
