export default function missionSectionInViewport() {
	const { top: contentTop, bottom: contentBottom } = document
		.querySelector('.content')
		.getBoundingClientRect()

	const { top: missionSectionTop } = document
		.querySelector('.mission')
		.getBoundingClientRect()

	const contentDivHeight = Math.floor(contentBottom - contentTop)
	const missionSectionStartingPoint = Math.floor(contentTop + contentDivHeight)

	return missionSectionStartingPoint > missionSectionTop
}
