export default function handleTogglePane(
	controlledElementId,
	clickedButton,
	{ isExpanded = false }
) {
	// updates 'area-visible' attribute of controlled element.
	// updates 'area-expanded' attribute of clicked button.

	const pane = document.querySelector(`#${controlledElementId}`)
	pane.setAttribute('data-visible', isExpanded.valueOf())

	clickedButton.setAttribute('area-expanded', isExpanded.valueOf())
}
