export default function addAttributes(element, attributes = {}) {
	Object.entries(attributes).map((attribute) => {
		element.setAttribute(attribute[0], attribute[1]) // [ {attr: attrValue}, {attr: attrValue} ...]
	})
}
