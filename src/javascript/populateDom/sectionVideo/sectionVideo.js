import handleTogglePane from '../../utils/handleTogglePane.js'
import addAttributes from '../../utils/addAttributes.js'
import addNewElement from '../../utils/addNewElement.js'

import videoCopy from '/src/assets/copy/video.json' assert { type: 'json' }

export default function video() {
	const sectionContent = document.querySelector('.video .section-content')

	videoCopy.map((video) => {
		const { title, author } = video

		const buttonControlTargetId = `video-pane-${title
			.split(' ')[0]
			.replace(',', '')
			.toLowerCase()}`

		const videoCard = document.createElement('div')
		videoCard.classList.add('video-card')

		videoCard.addEventListener('click', () =>
			handleTogglePane(buttonControlTargetId, videoCard, {
				isExpanded: true,
			})
		)

		addAttributes(videoCard, {
			'area-controls': buttonControlTargetId, // targets html id
			'area-expanded': 'false',
		})

		addNewElement(author, 'video-author', 'p', videoCard)
		addNewElement(title, 'video-title', 'h2', videoCard)

		sectionContent.appendChild(videoCard)
	})
}
