(function(){

    angular
        .module("PeopleFacts")
        .factory("dataService", function(){
            var dataObj = {
                peopleData: peopleData,
                quizQuestions: quizQuestions,
                correctAnswers: correctAnswers
            };
            return dataObj;
        });

    var correctAnswers = [0, 1, 2, 0, 3, 1];

    var quizQuestions = [
        {
            "type": "text",
            "text": "Who is the current president of US?",
            "possibilities": [
                {
                    "answer": "George W. Bush"
                },
                {
                    "answer": "Barrack Obama"
                },
                {
                    "answer": "Tom Cruise"
                },
                {
                    "answer": "Bill Gates"
                }
            ],
            "selected": null,
            "correct": null
        },
        {
            "type": "text",
            "text": "Which position Manuel Neuer plays in Football?",
            "possibilities": [
                {
                    "answer": "Striker"
                },
                {
                    "answer": "Goalkeeper"
                },
                {
                    "answer": "Midfield"
                },
                {
                    "answer": "None of them"
                }
            ],
            "selected": null,
            "correct": null
        },
        {
            "type": "image",
            "text": "Who is Steven Gerrard in the picture shown below?",
            "possibilities": [
                {
                    "answer": "images/bob_dylan.jpg"
                },
                {
                    "answer": "images/tom_cruise.jpg"
                },
                {
                    "answer": "images/steven_gerrard.jpg"
                },
                {
                    "answer": "images/steve_jobs.jpg"
                }
            ],
            "selected": null,
            "correct": null
        },
        {
            "type": "image",
            "text": "Who is Jurgen Klopp in the picture shown below?",
            "possibilities": [
                {
                    "answer": "images/jurgen_klopp.jpg"
                },
                {
                    "answer": "images/vladimir_putin.jpg"
                },
                {
                    "answer": "images/barack_obama.jpg"
                },
                {
                    "answer": "images/tim_berners_lee.jpg"
                }
            ],
            "selected": null,
            "correct": null
        },
        {
            "type": "text",
            "text": "Who is known as the inventor of WWW?",
            "possibilities": [
                {
                    "answer": "Charles Babbage"
                },
                {
                    "answer": "Dennis Ritchie"
                },
                {
                    "answer": "Brendan Eich"
                },
                {
                    "answer": "Tim Berners Lee"
                }
            ],
            "selected": null,
            "correct": null
        },
        {
            "type": "image",
            "text": "Who is John Resig in the picture shown below?",
            "possibilities": [
                {
                    "answer": "images/brendan_eich.jpg"
                },
                {
                    "answer": "images/john_resig.jpg"
                },
                {
                    "answer": "images/tim_berners_lee.jpg"
                },
                {
                    "answer": "images/bob_dylan.jpg"
                }
            ],
            "selected": null,
            "correct": null
        }
    ];

    var peopleData = [
        {
            "name": "Barack Obama",
            "image_url": "images/barack_obama.jpg",
            "country" : "United States",
            "profession" : "Politician",
            "description": "Barack Hussein Obama is an American politician who is the 44th and current President of the United States. He is the first African American to hold the office and the first president born outside the continental United States. Born in Honolulu, Hawaii, Obama is a graduate of Columbia University and Harvard Law School, where he was president of the Harvard Law Review. He was a community organizer in Chicago before earning his law degree. He worked as a civil rights attorney and taught constitutional law at the University of Chicago Law School between 1992 and 2004. While serving three terms representing the 13th District in the Illinois Senate from 1997 to 2004, he ran unsuccessfully in the Democratic primary for the United States House of Representatives in 2000 against incumbent Bobby Rush."
        },
        {
            "name": "Tom Cruise",
            "image_url": "images/tom_cruise.jpg",
            "country" : "United States",
            "profession" : "Actor, Producer",
            "description": "Thomas Cruise, known professionally as Tom Cruise, is an American actor and producer. He has been nominated for three Academy Awards and has won three Golden Globe Awards. He started his career at age 19 in the film Endless Love (1981). After portraying supporting roles in Taps (1981) and The Outsiders (1983), his first leading role was in the romantic comedy Risky Business, released in August 1983. Cruise became a full-fledged movie star after starring as Pete 'Maverick' Mitchell in the action drama Top Gun (1986). One of the biggest movie stars in Hollywood, Cruise starred in several more successful films in the 1980s, including the dramas The Color of Money (1986), Cocktail (1988), Rain Man (1988), and Born on the Fourth of July (1989)."
        },
        {
            "name": "Vladimir Putin",
            "image_url": "images/vladimir_putin.jpg",
            "country": "Russia",
            "profession" : "Politician",
            "description": "Vladimir Vladimirovich Putin, is a Russian politician who is the current President of the Russian Federation, holding the office since 7 May 2012. He was Prime Minister from 1999 to 2000, President from 2000 to 2008, and again Prime Minister from 2008 to 2012. During his second term as Prime Minister, he was the Chairman of the United Russia Party, the ruling party.Born in Leningrad, Putin studied German at Saint Petersburg High School 281, and speaks fluent German. He then studied law at the Saint Petersburg State University in 1970, and graduated in 1975. Putin was a KGB foreign intelligence officer for 16 years, rising to the rank of Lieutenant Colonel before retiring in 1991 to enter politics in his native Saint Petersburg. "
        },
        {
            "name": "Bob Dylan",
            "image_url": "images/bob_dylan.jpg",
            "country": "United States",
            "profession": "Musician, Singer, Songwriter",
            "description": "Bob Dylan is an American musician, singer-songwriter, artist and writer. He has been influential in popular music and culture for more than five decades. Much of his most celebrated work dates from the 1960s when his songs chronicled social unrest, although Dylan repudiated suggestions from journalists that he was a spokesman for his generation. Nevertheless, early songs such as 'Blowin in the Wind' and 'The Times They Are a-Changin' became anthems for the American civil rights and anti-war movements. Leaving behind his initial base in the American folk music revival, his six-minute single 'Like a Rolling Stone', recorded in 1965, enlarged the range of popular music. Dylan's mid-1960s recordings, backed by rock musicians, reached the top end of the United States music charts while also attracting denunciation and criticism from others in the folk movement."
        },
        {
            "name" : "Manuel Neuer",
            "image_url": "images/manuel_neuer.jpg",
            "country" : "Germany",
            "profession": "Footballer",
            "description": "Manuel Peter Neuer is a German professional footballer who plays for Bayern Munich and the Germany national team. He is a goalkeeper and serves as vice-captain for Bayern Munich and captain of Germany. Neuer has been described as a 'sweeper-keeper' because of his unique playing style and speed when rushing off his line to anticipate opponents; he is also known for his quick reflexes, excellent shot-stopping abilities, command of his area and accurate control and distribution of the ball.[5][6][7]The current holder of the IFFHS World's Best Goalkeeper award (for three years in a row) and regarded as one of the best and most complete goalkeepers of all-time,[11][12][13] Neuer won the 2014 FIFA World Cup with Germany as well as the Golden Glove award for being the best goalkeeper in the tournament, and is considered by some in the sport to be the best goalkeeper in football since Lev Yashin."
        },
        {
            "name": "Jürgen Klopp",
            "image_url": "images/jurgen_klopp.jpg",
            "country" : "Germany",
            "profession" : "Football Manager",
            "description": "Jürgen Norbert Klopp is a German football manager and former professional player who is the current manager of Premier League club Liverpool.Klopp spent most of his 15-year playing career at Mainz 05, before going on to become their longest-serving manager from 2001 to 2008, during which time they achieved promotion to the Bundesliga. In 2008, Klopp joined Borussia Dortmund, leading them to back-to-back Bundesliga wins in 2011 and 2012, as well as the DFB-Pokal in 2012, the DFL-Supercup in 2008, 2013 and 2014, and their second appearance in a UEFA Champions League final in 2013. Klopp won the German Football Manager of the Year in 2011 and 2012, before leaving Dortmund in 2015 having also become their longest-serving manager. He became manager of Liverpool in October 2015."
        },
        {
            "name": "Steven Gerrard",
            "image_url": "images/steven_gerrard.jpg",
            "country" : "England",
            "profession" : "Footballer",
            "description": "Steven George Gerrard, is an English professional footballer who plays for Major League Soccer club LA Galaxy as a central midfielder. He spent the majority of his career playing for Premier League club Liverpool, with most of that time as their captain.Gerrard spent 17 seasons at Anfield, making his Liverpool debut in 1998, cementing his place in the first team in 2000, and succeeding Sami Hyypiä as team captain in 2003. His honours include two FA Cups, three League Cups, one UEFA Champions League, one UEFA Cup, and one UEFA Super Cup. Gerrard scored Liverpool's first goal and won the penalty kick for the third as Liverpool came from 3–0 down to defeat Milan in the 2005 Champions League Final. He joined Major League Soccer club LA Galaxy in July 2015, following the conclusion of the 2014–15 season with Liverpool."
        },
        {
            "name": "Tim Berners-Lee",
            "image_url": "images/tim_berners_lee.jpg",
            "country" : "England",
            "profession" : "Computer Scientist",
            "description" : "Sir Timothy John Berners-Lee also known as TimBL, is an English computer scientist, best known as the inventor of the World Wide Web. He made a proposal for an information management system in March 1989, and he implemented the first successful communication between a Hypertext Transfer Protocol (HTTP) client and server via the Internet sometime around mid-November of that same year.Berners-Lee is the director of the World Wide Web Consortium (W3C), which oversees the continued development of the Web. He is also the founder of the World Wide Web Foundation, and is a senior researcher and holder of the founders chair at the MIT Computer Science and Artificial Intelligence Laboratory (CSAIL).He is a director of the Web Science Research Initiative (WSRI), and a member of the advisory board of the MIT Center for Collective Intelligence. In 2011, he was named as a member the board of trustees of the Ford Foundation."
        },
        {
            "name" : "Steve Jobs",
            "image_url" : "images/steve_jobs.jpg",
            "country" : "United States",
            "profession" : "IT Entrepreneur and Inventor",
            "description" : "Steven Paul was an American information technology entrepreneur and inventor. He was the co-founder, chairman, and chief executive officer (CEO) of Apple Inc.; CEO and majority shareholder of Pixar Animation Studios; a member of The Walt Disney Company's board of directors following its acquisition of Pixar; and founder, chairman, and CEO of NeXT Inc. Jobs is widely recognized as a pioneer of the microcomputer revolution of the 1970s and 1980s, along with Apple co-founder Steve Wozniak. Shortly after his death, Jobs's official biographer, Walter Isaacson, described him as a 'creative entrepreneur whose passion for perfection and ferocious drive revolutionized six industries: personal computers, animated movies, music, phones, tablet computing, and digital publishing.'"
        },
        {
            "name" : "Brendan Eich",
            "image_url" : "images/brendan_eich.jpg",
            "country" : "United States",
            "profession" : "Technologist and creator of Javascript",
            "description" : "Brendan Eich is an American technologist and creator of the JavaScript programming language. He co-founded the Mozilla project, the Mozilla Foundation and the Mozilla Corporation, and served as the Mozilla Corporation's chief technical officer and briefly its chief executive officer. He is the CEO of Brave Software. Brendan Eich received his bachelor's degree in mathematics and computer science at Santa Clara University. He received his master's degree in 1985 from the University of Illinois at Urbana-Champaign.Eich started his career at Silicon Graphics, working for seven years on operating system and network code. He then worked for three years at MicroUnity Systems Engineering writing microkernel and DSP code, and doing the very first MIPS R4000 port of GCC."
        },
        {
            "name" : "John Resig",
            "image_url" : "images/john_resig.jpg",
            "country" : "United States",
            "profession" : "Software Engineer and Entrepreneur",
            "description" : "John Resig is an American software engineer and entrepreneur, best known as the creator and lead developer of the jQuery JavaScript library. Resig was educated at the Rochester Institute of Technology, graduating with an undergraduate degree in Computer Science in 2005. During this time he worked with Ankur Teredesai on data mining instant messaging networks and Jon Schull on exploring new ways of encouraging real-time online collaboration."
        }
    ];

})();

    /*
    var quizQuestions = [
        {
            "type": "text",
            "text": "How much can a loggerhead weigh?",
            "possibilities": [
                {
                    "answer": "Up to 20kg"
                },
                {
                    "answer": "Up to 115kg"
                },
                {
                    "answer": "Up to 220kg"
                },
                {
                    "answer": "Up to 500kg"
                }
            ],
            "selected": null,
            "correct": null
        },
        {
            "type": "text",
            "text": "What is the typical lifespan of a Green Sea Turtle?",
            "possibilities": [
                {
                    "answer": "150 years"
                },
                {
                    "answer": "10 years"
                },
                {
                    "answer": "80 years"
                },
                {
                    "answer": "40 years"
                }
            ],
            "selected": null,
            "correct": null
        },
        {
            "type": "image",
            "text": "Which of these is the Alligator Snapping Turtle?",
            "possibilities": [
                {
                    "answer": "https://c1.staticflickr.com/3/2182/2399413165_bcc8031cac_z.jpg?zz=1"
                },
                {
                    "answer": "http://images.nationalgeographic.com/wpf/media-live/photos/000/006/cache/ridley-sea-turtle_688_600x450.jpg"
                },
                {
                    "answer": "https://static-secure.guim.co.uk/sys-images/Guardian/Pix/pictures/2011/8/13/1313246505515/Leatherback-turtle-007.jpg"
                },
                {
                    "answer": "https://upload.wikimedia.org/wikipedia/commons/e/e3/Alligator_snapping_turtle_-_Geierschildkr%C3%B6te_-_Alligatorschildkr%C3%B6te_-_Macrochelys_temminckii_01.jpg"
                }
            ],
            "selected": null,
            "correct": null
        },
        {
            "type": "image",
            "text": "Which of these is the Green Turtle?",
            "possibilities": [
                {
                    "answer": "http://www.what-do-turtles-eat.com/wp-content/uploads/2014/10/Sea-Turtles-Habitat.jpg"
                },
                {
                    "answer": "https://upload.wikimedia.org/wikipedia/commons/7/7f/Kemp's_Ridley_sea_turtle_nesting.JPG"
                },
                {
                    "answer": "https://upload.wikimedia.org/wikipedia/commons/e/e3/Alligator_snapping_turtle_-_Geierschildkr%C3%B6te_-_Alligatorschildkr%C3%B6te_-_Macrochelys_temminckii_01.jpg"
                },
                {
                    "answer": "http://assets.worldwildlife.org/photos/163/images/carousel_small/SCR_290360hawskbill-why-matter-LG.jpg?1345565532"
                }
            ],
            "selected": null,
            "correct": null
        },
        {
            "type": "text",
            "text": "How much can a loggerhead weigh?",
            "possibilities": [
                {
                    "answer": "Up to 20kg"
                },
                {
                    "answer": "Up to 115kg"
                },
                {
                    "answer": "Up to 220kg"
                },
                {
                    "answer": "Up to 500kg"
                }
            ],
            "selected": null,
            "correct": null
        },
        {
            "type": "text",
            "text": "What is the typical lifespan of a Green Sea Turtle?",
            "possibilities": [
                {
                    "answer": "150 years"
                },
                {
                    "answer": "10 years"
                },
                {
                    "answer": "80 years"
                },
                {
                    "answer": "40 years"
                }
            ],
            "selected": null,
            "correct": null
        },
        {
            "type": "image",
            "text": "Which of these is the Alligator Snapping Turtle?",
            "possibilities": [
                {
                    "answer": "https://c1.staticflickr.com/3/2182/2399413165_bcc8031cac_z.jpg?zz=1"
                },
                {
                    "answer": "http://images.nationalgeographic.com/wpf/media-live/photos/000/006/cache/ridley-sea-turtle_688_600x450.jpg"
                },
                {
                    "answer": "https://static-secure.guim.co.uk/sys-images/Guardian/Pix/pictures/2011/8/13/1313246505515/Leatherback-turtle-007.jpg"
                },
                {
                    "answer": "https://upload.wikimedia.org/wikipedia/commons/e/e3/Alligator_snapping_turtle_-_Geierschildkr%C3%B6te_-_Alligatorschildkr%C3%B6te_-_Macrochelys_temminckii_01.jpg"
                }
            ],
            "selected": null,
            "correct": null
        },
        {
            "type": "image",
            "text": "Which of these is the Green Turtle?",
            "possibilities": [
                {
                    "answer": "http://www.what-do-turtles-eat.com/wp-content/uploads/2014/10/Sea-Turtles-Habitat.jpg"
                },
                {
                    "answer": "https://upload.wikimedia.org/wikipedia/commons/7/7f/Kemp's_Ridley_sea_turtle_nesting.JPG"
                },
                {
                    "answer": "https://upload.wikimedia.org/wikipedia/commons/e/e3/Alligator_snapping_turtle_-_Geierschildkr%C3%B6te_-_Alligatorschildkr%C3%B6te_-_Macrochelys_temminckii_01.jpg"
                },
                {
                    "answer": "http://assets.worldwildlife.org/photos/163/images/carousel_small/SCR_290360hawskbill-why-matter-LG.jpg?1345565532"
                }
            ],
            "selected": null,
            "correct": null
        }
    ];







    var peopleData = [
        {
            "type": "Green Turtle",
            "image_url": "images/eiffel.jpg",
            "location": "Tropical and subTropical",
            "size": "Up to 1.5m and up to 100kg",
            "lifespan": "Over 80 years",
            "diet": "Herbivore",
            "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquUt enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        },
        {
            "type": "Red Turtle",
            "image_url": "images/eiffel.jpg",
            "location": "Tropical and subTropical",
            "size": "Up to 1.5m and up to 100kg",
            "lifespan": "Over 80 years",
            "diet": "Herbivore",
            "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquUt enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        },
        {
            "type": "Blue Turtle",
            "image_url": "images/eiffel.jpg",
            "location": "Tropical and subTropical",
            "size": "Up to 1.5m and up to 100kg",
            "lifespan": "Over 80 years",
            "diet": "Herbivore",
            "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquUt enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        },
        {
            "type": "Purple Turtle",
            "image_url": "images/eiffel.jpg",
            "location": "Tropical and subTropical",
            "size": "Up to 1.5m and up to 100kg",
            "lifespan": "Over 80 years",
            "diet": "Herbivore"
        },
        {
            "type": "No Turtle",
            "image_url": "images/eiffel.jpg",
            "location": "Tropical and subTropical",
            "size": "Up to 1.5m and up to 100kg",
            "lifespan": "Over 80 years",
            "diet": "Herbivore",
            "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquUt enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        },
        {
            "type": "What Turtle",
            "image_url": "images/eiffel.jpg",
            "location": "Tropical and subTropical",
            "size": "Up to 1.5m and up to 100kg",
            "lifespan": "Over 80 years",
            "diet": "Herbivore",
            "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquUt enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        },
        {
            "type": "Yes Turtle",
            "image_url": "images/eiffel.jpg",
            "location": "Tropical and subTropical",
            "size": "Up to 1.5m and up to 100kg",
            "lifespan": "Over 80 years",
            "diet": "Herbivore",
            "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquUt enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        }
    ];

*/