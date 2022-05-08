import addTextNode from '../../utils/addTextNode.js'
import handleTogglePane from '../../utils/handleTogglePane.js'

import {
	MAP_TITLE_TO_VIDEO,
	VIDEO_TITLES,
} from '../../../assets/copy/Videos.js'

export default function videoPane() {
	const container = document.querySelector('.container')

	Object.values(VIDEO_TITLES).map((video) => {
		const { title, url, author, musicians } = MAP_TITLE_TO_VIDEO[video]

		const buttonControlTargetId = `video-pane-${title
			.split(' ')[0]
			.replace(',', '')
			.toLowerCase()}`

		const videoPane = document.createElement('div')
		videoPane.classList.add('video-pane')
		videoPane.id = buttonControlTargetId

		const videoContainer = document.createElement('div')
		videoContainer.classList.add('pane-video-container')

		const closeVideoPaneButton = document.createElement('button')
		closeVideoPaneButton.classList.add('close-video-pane')
		closeVideoPaneButton.setAttribute('area-controls', buttonControlTargetId) // targets html ID
		closeVideoPaneButton.setAttribute('area-expanded', true)
		addTextNode(closeVideoPaneButton, 'close')
		closeVideoPaneButton.addEventListener('click', () =>
			handleTogglePane(buttonControlTargetId, closeVideoPaneButton, {
				isExpanded: false,
			})
		)
		videoContainer.appendChild(closeVideoPaneButton)

		const pieceDetailsWrapper = document.createElement('div')
		pieceDetailsWrapper.classList.add('piece-details-wrapper')

		const videoTitle = document.createElement('h2')
		videoTitle.classList.add('video-title')
		addTextNode(videoTitle, title)
		pieceDetailsWrapper.appendChild(videoTitle)

		const pieceAuthor = document.createElement('p')
		pieceAuthor.classList.add('video-piece-author')
		addTextNode(pieceAuthor, author)
		pieceDetailsWrapper.appendChild(pieceAuthor)

		videoContainer.appendChild(pieceDetailsWrapper)

		const performersWrapper = document.createElement('div')
		performersWrapper.classList.add('performers-wrapper')

		videoContainer.appendChild(performersWrapper)

		musicians.map((performer) => {
			const piecePerformer = document.createElement('div')
			piecePerformer.classList.add('performer')

			const piecePerformerName = document.createElement('p')
			piecePerformerName.classList.add('performer-name')
			addTextNode(piecePerformerName, performer.name)
			piecePerformer.appendChild(piecePerformerName)

			const piecePerformerInstrument = document.createElement('p')
			piecePerformerInstrument.classList.add('performer-instrument')
			addTextNode(piecePerformerInstrument, performer.instrument)
			piecePerformer.appendChild(piecePerformerInstrument)

			performersWrapper.appendChild(piecePerformer)
		})

		const copyWrapper = document.createElement('div')
		copyWrapper.classList.add('copy-wrapper')
		copyWrapper.appendChild(pieceDetailsWrapper)
		copyWrapper.appendChild(performersWrapper)

		const videoPlayer = document.createElement('iframe')
		videoPlayer.classList.add('video-player')
		videoPlayer.setAttribute('src', url)
		videoPlayer.setAttribute('height', '315')
		videoPlayer.setAttribute('width', '420')
		videoPlayer.setAttribute('title', title)
		videoPlayer.setAttribute('frameborder', '0')
		videoPlayer.setAttribute('allowfullscreen', 'true')
		videoPlayer.setAttribute('allow', 'encrypted-media')

		videoContainer.appendChild(copyWrapper)
		videoContainer.appendChild(videoPlayer)
		videoPane.appendChild(videoContainer)
		container.appendChild(videoPane)
	})
}
