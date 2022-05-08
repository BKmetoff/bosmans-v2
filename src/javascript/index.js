import navigationOpenClose from './navigation/navigation.js'
import navLinks from './populateDom/navLinks.js'

import missionAndPatron from './populateDom/sectionMissionAndPatron.js'
import repertoire from './populateDom/sectionRepertoire.js'
import social from './populateDom/sectionSocial.js'
import contact from './populateDom/sectionContact.js'

import video from './populateDom/sectionVideo/sectionVideo.js'
import videoPane from './populateDom/sectionVideo/videoPane.js'

import about from './populateDom/sectionAbout/sectionAbout.js'
import bioPane from './populateDom/sectionAbout/bioPane.js'

function app() {
	navigationOpenClose() // refactor!

	// populate DOM
	navLinks()
	missionAndPatron()
	repertoire()
	social()
	contact()

	about()
	bioPane()

	video()
	videoPane()
}

app()
