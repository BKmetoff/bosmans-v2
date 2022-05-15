import addTextNode from './addTextNode.js'

export default function addNewElement(
	copy,
	className,
	elementType,
	parentElement
) {
	const newElement = document.createElement(elementType)
	newElement.classList.add(className)

	if (copy.length != 0) {
		addTextNode(newElement, copy)
	}

	parentElement.appendChild(newElement)
}
