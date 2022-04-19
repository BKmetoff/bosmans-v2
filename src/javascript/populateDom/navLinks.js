import { navLinkTitles } from '../../assets/copy/NavLinks/navLinkTitles.js'
import addTextNode from '../utils/addTextNode.js'

export default function navLinks() {
	const list = document.querySelector('.nav-links')

	navLinkTitles.forEach((title) => {
		const listItem = document.createElement('li')
		listItem.classList.add('nav-link')

		const anchor = document.createElement('a')
		anchor.setAttribute('href', `#${title}`)
		anchor.setAttribute('data-page', `${title}`)
		addTextNode(anchor, title)

		listItem.appendChild(anchor)
		list.appendChild(listItem)
	})
}
