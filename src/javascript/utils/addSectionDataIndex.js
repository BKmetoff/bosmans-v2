export default function addSectionDataIndex() {
	const sections = document.querySelectorAll('section')
	sections.forEach((section, index) => {
		section.setAttribute('data-index', `${index}`)
	})
}
