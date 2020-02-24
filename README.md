# Guess Who, Haiku

### [Try out Guess Who, Haiku!](https://guesswhohaiku.herokuapp.com/)

## Background and Overview

Ever dreamed of being a poet, but ended up deciding quips and witty turn-of-phrase just _wasn't your thing_?

Guess Who, Haiku is here to help! 

Craft outstanding haikus with the help of famous figures in history, celebrities, and the witsters of today's popular culture, and challenge your friends to be the first to GUESS WHO the voice is behind your newfound literary genius. 

Guess Who, Haiku leverages MongoDB, Express, React, and Node.js (MERN stack).

## Functionality and Features

* User account creation and authentication
* Markov-chain text generator algorithm extended with a syllable counting algorithm
* Third-party APIs to source input text for each famous figure
* Interactive, delightful user experience throughout haiku creation, sharing, and solving
* Mobile-first application design
* Progressive Web App to improve the mobile experience

## Game Screens
### Create a Haiku

The landing page for our application invites users to generate a haiku, selecting up to three figures whose voices will be used to build the poem. Once the haiku is generated, the user has a few choices: if they are dissatisfied with the haiku, they can regenerate a haiku with the same figures they'd selected, or restart the haiku generation process from the beginning. If they want to use the haiku, they can save the haiku to share at a later date, or immediately challenge their friends on the application to solve the haiku. 

![create-haiku](https://user-images.githubusercontent.com/55667998/75101645-69657900-5594-11ea-8269-371db8418ef3.gif)

### Solve a Haiku Challenge

All of the haikus that a user has been challenged to will appear on their `My Challenges` page, categorized as either solved or unsolved. When a user clicks on an unsolved haiku and accepts the challenge to solve it, they will be prompted to choose the haiku authors from a semi-randomized list of six characters. Their progress will be timed, and the sooner they solve the challenge correctly after accepting it, the more points they will receive for that haiku.

![solve-haiku](https://user-images.githubusercontent.com/55667998/75101666-c2cda800-5594-11ea-8d7f-af3d0c952c1e.gif)

### View a Haiku

Users can similarly view all of the haikus that they have created. Each haiku "card" will show if the haiku has been shared and who it has been shared with, as well as give the user the option to delete the haiku. The back of each haiku "card" shows who has solved the haiku most quickly, if anyone has solved it.

![haiku-view](https://user-images.githubusercontent.com/55667998/75101608-d0cef900-5593-11ea-91ef-b1084041926c.gif)

### Leaderboard

The cross-application leaderboard shows the top ten users in two categories: highest scores from solving haikus, and most haikues made. If a logged-in user places on either board, their name will be highlighted. 

![leaderboard](https://user-images.githubusercontent.com/55667998/75101705-8ea6b700-5595-11ea-862e-ffe3535cb5e2.PNG)


## Technologies and Technical Challenges

This project is built on a MongoDB, Mongoose, Express backend, with a React / Redux frontend. We used React Hooks, Styled Components and an overall componentized structure throughout this project. 

### Markov Chain Algorithm for Natural Language Generation (NLG)
We wrote a Markov chain text generation algorithm to transform structured data into natural language based on the recombination of elements of known sentences. For this haiku guessing game, we extended the semantic generation algorithm to factor in the standard haiku syllable count (5-7-5) as well as article filtering (so that words such as the, and, and if don't end phrases).

### A Progressive Web App
PWAs allow for features including push notification, home screen icon, full-screen and offline first functionality, providing a native-like experience for the user.

### Mobile-First Design
A design strategy where you start sketching and prototyping the smallest screen first and work your way up to larger screens. Essentially, it’s about delivering the right user experience to the right device.

![responsive-haiku-view](https://user-images.githubusercontent.com/55667998/75101767-cc580f80-5596-11ea-9136-3064050445ae.gif)

### Technical Challenges
- A major challenge was configuring our text generator to output semantic text in the proper 5-7-5 syllable structure. We needed to create an algorithm that could reliably count syllables in the English language, which involves using logic to parse common phonemes and parts of a word accurately. After implementing a basic algorithm that would correctly count syllables by the most common rules, we used `test-driven-development` to build out our test cases using `Mocha`, and refined the algorithm to more accurately parse words and return their syllable count.
```javascript
it("should handle words combining e and o", () => {
      expect(countSyllables("people")).to.equal(2);
      expect(countSyllables("jeopardy")).to.equal(3);
      expect(countSyllables("theology")).to.equal(4);
      expect(countSyllables("dungeon")).to.equal(2);
      expect(countSyllables("someone")).to.equal(2);
      expect(countSyllables("preorder")).to.equal(3);
      expect(countSyllables("rodeo")).to.equal(3);
      expect(countSyllables("theory")).to.equal(3);
});
```

- Using `Styled Components` allowed us to implement responsive and intuitive styling, and greatly reduced redundant styling work across components with shared visual themes. 

- With all of us contributing to the application, we wanted to use a frontend file architecture that would help us better organize our code. We favored the "duck" react-redux file structure in order to better facilitate collaboration and reduce merge conflicts. 

- We designed our backend database structure and API endpoints using a document-oriented (NoSQL) design principles, greatly simplifying API for client (our app), resulting in less overall API calls.  

## Team

### [Tatiana Faramarzi](https://github.com/tfaramar)

* Syllable count algorithm development + test-driven development (Mocha)
* Backend routes execution
* Frontend design and execution
* UX/UI and wireframes
* Application configuration and deployment

### [Edward Xiao](https://github.com/ed-xiao)

* Backend design, setup and execution
* Markov Chain algorithm development
* Frontend execution

### [Sarah Jiang](https://github.com/srajiang)

* Markov Chain algorithm development + test-driven development (Mocha)
* Database and backend REST-ful API design, setup, execution
* External API configuration and seeding
* Logo creation, visual theme, visual elements
* Frontend design and execution

### [Alex Segers](https://github.com/segersalex)

* Workflow and agile development
* User auth, including models and validations
* Team Postman configuration
* UX/UI and visual theme
* Frontend design and execution
