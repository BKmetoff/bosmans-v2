import addTextNode from '../../utils/addTextNode.js'
import handleTogglePane from '../../utils/handleTogglePane.js'
import addAttributes from '../../utils/addAttributes.js'
import addNewElement from '../../utils/addNewElement.js'

import videoCopy from '/src/assets/copy/video.json' assert { type: 'json' }

function performerSection(performer) {
	const { name, instrument } = performer

	const piecePerformer = document.createElement('div')
	piecePerformer.classList.add('performer')

	addNewElement(name, 'performer-name', 'p', piecePerformer)
	addNewElement(instrument, 'performer-instrument', 'p', piecePerformer)

	return piecePerformer
}

export default function videoPane() {
	const videoPanes = document.querySelectorAll('.video-pane')
	const videoContainers = document.querySelectorAll('.video-pane-container')
	const closePaneButtons = document.querySelectorAll('.close-video-pane')

	const videoTitles = document.querySelectorAll('.piece-title')
	const videoAuthors = document.querySelectorAll('.piece-author')

	const performersWrappers = document.querySelectorAll('.performers-wrapper')

	videoCopy.map((video, index) => {
		const { title, url, author, musicians } = video

		closePaneButtons[index].addEventListener('click', () => {
			handleTogglePane(videoPanes[index].id, closePaneButtons[index], {
				isExpanded: false,
			})
		})

		addTextNode(videoTitles[index], title)
		addTextNode(videoAuthors[index], author)

		musicians.map((performer) => {
			performersWrappers[index].appendChild(performerSection(performer))
		})

		const videoPlayer = document.createElement('iframe')
		videoPlayer.classList.add('video-player')

		addAttributes(videoPlayer, {
			src: url,
			height: '315',
			width: '420',
			title: title,
			frameborder: '0',
			allowfullscreen: 'true',
			allow: 'encrypted-media',
		})

		videoContainers[index].appendChild(videoPlayer)
	})
}
