function navCheck(entries) {
	entries.forEach((entry) => {
		const className = entry.target.className
		const activeAnchor = document.querySelector(`[data-page=${className}]`)

		entry.isIntersecting
			? activeAnchor.classList.add('scroll-background')
			: activeAnchor.classList.remove('scroll-background')
	})
}

export default function updateNavLinkBackgroundOnScroll() {
	const sections = document.querySelectorAll('section')
	const options = { threshold: 0.7 }

	let observer = new IntersectionObserver(navCheck, options)

	sections.forEach((section) => {
		observer.observe(section)
	})
}
