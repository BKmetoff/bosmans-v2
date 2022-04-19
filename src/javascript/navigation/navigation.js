import missionSectionInViewport from '../utils/missionSectionInViewport.js'

export default function navigationOpenClose() {
	const navigation = document.querySelector('.nav')
	const navigationToggle = document.querySelector('.navigation-toggle')
	const homeSection = document.querySelector('.home')
	const content = document.querySelector('.content')

	navigationToggle.addEventListener('click', handleClick)
	homeSection.addEventListener('click', closeNavigationOnHomeClick)
	content.addEventListener('scroll', handleContentScroll)

	function updateDataAttributes(value) {
		navigation.setAttribute('data-visible', value)
		navigationToggle.setAttribute('area-expanded', value)
	}

	function handleClick() {
		navigation.getAttribute('data-visible') === 'false'
			? updateDataAttributes(true)
			: updateDataAttributes(false)
	}

	function closeNavigationOnHomeClick() {
		navigation.getAttribute('data-visible') === 'true' &&
			updateDataAttributes(false)
	}

	function handleContentScroll() {
		updateDataAttributes(missionSectionInViewport())
	}
}
