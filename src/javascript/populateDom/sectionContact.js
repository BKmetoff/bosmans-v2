import {
	CONTACT_MAIL_TO,
	CONTACT_MAIN,
	EMAIL,
} from '../../assets/copy/Contact/Contact.js'
import addTextNode from '../utils/addTextNode.js'

export default function contact() {
	const contactSection = document.querySelector('.contact')

	const sectionContent = document.createElement('div')
	sectionContent.classList.add('section-content')

	const paragraph = document.createElement('p')
	addTextNode(paragraph, CONTACT_MAIN)

	const anchor = document.createElement('a')
	anchor.setAttribute('href', `mailto:${EMAIL}`)
	anchor.setAttribute('target', '_blank')
	anchor.classList.add('mail-to')
	addTextNode(anchor, CONTACT_MAIL_TO)

	paragraph.appendChild(anchor)
	sectionContent.appendChild(paragraph)
	// sectionContent.appendChild(anchor)
	contactSection.appendChild(sectionContent)
}
