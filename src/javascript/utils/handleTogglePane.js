export default function handleTogglePane(
	controlledElementId,
	clickedButton,
	boolean
) {
	//
	// update 'area-visible' attribute of controlled element.
	// update 'area-expanded' attribute of clicked button.

	const pane = document.querySelector(`#${controlledElementId}`)
	pane.setAttribute('data-visible', boolean)

	clickedButton.setAttribute('area-expanded', boolean)
}
