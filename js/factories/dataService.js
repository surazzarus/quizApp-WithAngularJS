(function(){

    angular
        .module("ProgrammingFacts")
        .factory("dataService", function(){
            var dataObj = {
                programmingData: programmingData,
                quizQuestions: quizQuestions
            };
            return dataObj;
        });

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

    var programmingData = [
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

})();