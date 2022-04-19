import addTextNode from '../utils/addTextNode.js'

import {
	addSectionContentDiv,
	appendChildToSectionContent,
} from '../utils/sectionContentDiv.js'

import {
	MAP_SECTION_TO_COPY,
	MISSION_AND_PATRON,
} from '../../assets/copy/MissionPatron/MissionAndPatron.js'

export default function missionAndPatron() {
	Object.values(MAP_SECTION_TO_COPY).forEach((sectionTitle) => {
		const section = document.querySelector(`.${sectionTitle.toLowerCase()}`)

		addSectionContentDiv(section)

		const sectionHeader = document.createElement('h2')
		sectionHeader.classList.add('section-title')
		addTextNode(sectionHeader, sectionTitle)
		appendChildToSectionContent(sectionHeader)

		const sectionText = document.createElement('p')
		addTextNode(sectionText, MISSION_AND_PATRON[sectionTitle])
		appendChildToSectionContent(sectionText)
	})
}
