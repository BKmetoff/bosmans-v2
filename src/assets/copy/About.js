const path = 'src/assets/pics/musicians'

export const NAMES = Object.freeze({
	ELIZAVETA: 'ELIZAVETA',
	NATALIA: 'NATALIA',
	DIMITRI: 'DIMITRI',
})

export const MAP_NAMES_TO_BIO = Object.freeze({
	[NAMES.NATALIA]: {
		fullName: 'Natalia Szmydt',
		photo: `${path}/Natalia.jpeg`,
		website: 'https://www.nataliaszmydt.com/',
		bio: "The Polish violinist has won multiple awards and scholarships. During her master's degree in the Conservatorium van Amsterdam, she played with the Netherlands Philharmonic Orchestra and Netherlands Chamber Music Orchestra Academy. Later, she joined the promising and successful piano trio 'Artem'. In 2011 Natalia received the audience award and a distinction in the Austrian International Violin Competition in Zell an der Pram. In 2014, she was awarded with Grand Prix in the International Violin Competition 'Citta di Barletta', and received a distinction in the 'International Chamber Music in Olsztyn' competition in Poland. She received 2nd price in the National Violin Competition in The Netherlands in 2016. She participated in the International Youth Orchestra program in Bremen, Germany. She also won a scholarship in the 'Festival Musique à Flaine' in France. Natalia has performed in the biggest halls in Europe, such as 'Concertgebouw', 'Muziekgebouw', and 'De Doelen' in The Netherlands; 'Pau Casals' in Spain; 'Baltic Philharmonic' in Poland. As a soloist, she has performed in Poland, The Netherlands, Czech Republic, Italy, Finland, and Japan. She has worked with highly recognized musicians such as Agata Szymczewska, Marc Albrecht, Yuzuko Horigome, Anna Fedorova, Simone Lamsma.",
	},
	[NAMES.ELIZAVETA]: {
		fullName: 'Elizaveta Agrafenina',
		photo: `${path}/Elizaveta.jpeg`,
		website: 'https://www.agrafenina.com/',
		bio: 'The Russian-Norwegian soprano, Elizaveta Agrafenina, recently graduated from the Conservatory of Amsterdam with a master’s degree in classical voice, with Sasja Hunnego as her voice teacher. She is a part of the Young Artist Program at Bergen National Opera in Norway and has since 2017 sung in several productions. Elizaveta is strongly committed to the performance of lied and chamber music and is quickly becoming recognized for her musical versatility in a wide-ranging repertoire. She formed DUO21 with Satomi Chihara as well as the Finnish music festival Pyhäjärven Kamarimusiikki with Siiri Niittymaa, where the goal is to perform more music by female composers. She has been awarded several scholarships to continue her musical development and honorary awards for her outstanding musicianship.',
	},
	[NAMES.DIMITRI]: {
		fullName: 'Dimitri Malignan',
		photo: `${path}/Dimitri.jpg`,
		website: 'https://www.dimitrimalignan.com/',
		bio: 'The brilliant young French pianist, Dimitri Malignan,  is the winner of the “Prix Cortot” in 2017, at the age of 19, and a laureate of more than 20 international competitions, already impresses juries and the public by his level of maturity, musical intelligence, and great sensibility. Born in 1998 in Paris, he is notably the grandson of the Romanian composer Henry Mălineanu. Dimitri studied with Ludmila Berlinskaya at the Ecole Normale de Musique “A. Cortot” in Paris and with Naum Grubert at the Conservatory of Amsterdam, where he both gained the highest distinctions “Prix Cortot” in Paris and “Cum Laude” for his Master in Music. Dimitri has performed in the most prestigious venues and festivals in Europe, as a soloist, chamber music, and with orchestras. Passionate about promoting unknown music, Dimitri initiated in 2020 the “Missing Voices” project, dedicated to Jewish composers who were murdered in the Shoah.',
	},
})
