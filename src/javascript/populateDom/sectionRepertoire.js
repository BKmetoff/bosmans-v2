import addTextNode from '../utils/addTextNode.js'
import {
	COMPOSERS,
	MAP_COMPOSERS_TO_PIECES,
} from '../../assets/copy/Repertoire/Repertoire.js'

function mapPieces({ title, type }, composerContainer) {
	const pieceDetails = document.createElement('div')
	pieceDetails.classList.add('piece-details')

	const pieceTitle = document.createElement('h3')
	addTextNode(pieceTitle, title)

	const pieceType = document.createElement('p')
	pieceType.classList.add('piece-type')
	addTextNode(pieceType, type)

	pieceDetails.appendChild(pieceTitle)
	pieceDetails.appendChild(pieceType)
	composerContainer.appendChild(pieceDetails)
}

function mapComposers({ name, pieces }, repertoireSection) {
	const composerContainer = document.createElement('div')
	composerContainer.classList.add('composer-container', 'section-content')
	repertoireSection.appendChild(composerContainer)

	const composerName = document.createElement('h2')
	composerName.classList.add('composer-name')
	addTextNode(composerName, name)
	composerContainer.appendChild(composerName)

	pieces.forEach((piece) => {
		mapPieces(piece, composerContainer)
	})
}

export default function repertoire() {
	const repertoireSection = document.querySelector('.repertoire')

	Object.values(COMPOSERS).forEach((composer) => {
		mapComposers(MAP_COMPOSERS_TO_PIECES[composer], repertoireSection)
	})
}
