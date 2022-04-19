export function addSectionContentDiv(parentElement) {
	const sectionContent = document.createElement('div')
	sectionContent.classList.add('section-content')
	parentElement.appendChild(sectionContent)
}

export function appendChildToSectionContent(childElement) {
	const sectionContent = document.querySelector('.section-content')
	sectionContent.appendChild(childElement)
}
