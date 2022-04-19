import navigationOpenClose from './navigation/navigation.js'
import navLinks from './populateDom/navLinks.js'

import missionAndPatron from './populateDom/sectionMissionAndPatron.js'
import repertoire from './populateDom/sectionRepertoire.js'
import social from './populateDom/sectionSocial.js'
import contact from './populateDom/sectionContact.js'

import about from './populateDom/sectionAbout/sectionAbout.js'
import bioPane from './populateDom/sectionAbout/bioPane.js'

import addSectionDataIndex from './utils/addSectionDataIndex.js'

function app() {
	navigationOpenClose()
	navLinks()
	missionAndPatron()
	repertoire()
	social()
	contact()
	about()
	bioPane()

	addSectionDataIndex() // refactor!
}

app()
