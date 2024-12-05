const { v4:uuid } = require("uuid");

const quizzes = {
    "data" : [
        // 1st quiz card
        {
            id: uuid(),
            category: "marvel",
            image: "https://images.unsplash.com/photo-1708376368427-ede2b537d494?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1hcnZlbCUyMGNvbWljc3xlbnwwfHwwfHx8MA%3D%3D",
            description: "Lorem ipsum",
            title: "Marvel",
            quiz: [
                // 1st question
                {
                    id: uuid(),
                    question: "Black Panther is set in which fictional country?",
                    options: [
                        {id: uuid(), option: "Wakanda", isCorrect: true},
                        {id: uuid(), option: "Takanda", isCorrect: false},
                        {id: uuid(), option: "Jakanda", isCorrect: false},
                        {id: uuid(), option: "Zakanda", isCorrect: false},
                    ]
                }, 
                // 2nd question
                {
                    id: uuid(),
                    question: "Who rescued Tony Stark and Nebula from space?",
                    options: [
                        {id: uuid(), option: "Hulk", isCorrect: false},
                        {id: uuid(), option: "Thor", isCorrect: false},
                        {id: uuid(), option: "Captain Marvel", isCorrect: true},
                        {id: uuid(), option: "Captain America", isCorrect: false},
                    ]
                },
                // 3rd question
                {
                    id: uuid(),
                    question: "Thor's Mjolnir is made from the metal of a dying ______?",
                    options: [
                        {id: uuid(), option: "Nebula", isCorrect: false},
                        {id: uuid(), option: "Moon", isCorrect: false},
                        {id: uuid(), option: "Star", isCorrect: true},
                        {id: uuid(), option: "Sun", isCorrect: false},
                    ]
                },
                // 4th question
                {
                    id: uuid(),
                    question: "What did Thor say about Jane Foster's catchphrase?",
                    options: [
                        {id: uuid(), option: "It's Crap", isCorrect: false},
                        {id: uuid(), option: "That's Bullshit", isCorrect: false},
                        {id: uuid(), option: "What ever", isCorrect: false},
                        {id: uuid(), option: "It's perfect", isCorrect: true},
                    ]
                }
            ]
        },
        // 2nd quiz card
        {
            id: uuid(),
            category: "dc",
            image: "https://images.unsplash.com/photo-1624371960524-ade99abadb34?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGRjJTIwY29taWNzfGVufDB8fDB8fHww",
            description: "Lorem ipsum jsdhsj asdjhsd sdjsfj skdaioew skdadn",
            title: "DC",
            quiz: [
                // 1st question
                {
                    id: uuid(),
                    question: "What was Wonder Woman originally named?",
                    options: [
                        {id: uuid(), option: "Anita", isCorrect: false},
                        {id: uuid(), option: "Suprema", isCorrect: true},
                        {id: uuid(), option: "Mishita", isCorrect: false},
                        {id: uuid(), option: "None", isCorrect: false},
                    ]
                }, 
                // 2nd question
                {
                    id: uuid(),
                    question: "Which Supervillian was once the Iranian Ambassador to the U.N.?",
                    options: [
                        {id: uuid(), option: "Wonder Man", isCorrect: false},
                        {id: uuid(), option: "Superman", isCorrect: false},
                        {id: uuid(), option: "The Joker", isCorrect: true},
                        {id: uuid(), option: "Batman", isCorrect: false},
                    ]
                },
                // 3rd question
                {
                    id: uuid(),
                    question: "What is Batman's favourite food?",
                    options: [
                        {id: uuid(), option: "Chicken Salad", isCorrect: false},
                        {id: uuid(), option: "Turkey Roast", isCorrect: false},
                        {id: uuid(), option: "Goat Ribbs", isCorrect: false},
                        {id: uuid(), option: "Mulligatawny soup", isCorrect: true},
                    ]
                },
                // 4th question
                {
                    id: uuid(),
                    question: "In how many seconds can Green Arrow shoots and reload?",
                    options: [
                        {id: uuid(), option: "Two and a half seconds", isCorrect: true},
                        {id: uuid(), option: "Two seconds", isCorrect: false},
                        {id: uuid(), option: "One second", isCorrect: false},
                        {id: uuid(), option: "One and a half seconds", isCorrect: false},
                    ]
                },
            ]
        }
    ]
}


module.exports = quizzes;