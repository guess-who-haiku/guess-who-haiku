# Guess Who, Haiku

## [Live](https://guesswhohaiku.herokuapp.com/)

## Background and Overview

Ever dreamed of being a poet, but end up deciding quips and witty turn-of-phrase just _wasn't your thing_?

Guess Who, Haiku is here to help! 

Craft outstanding haikus with the help of famous figures in history, celebrities, and the witsters of today's popular culture, and challenge your friends to be the first to GUESS WHO the voice is behind your newfound literary genius. 

This app consists of:

* A markov-chain text generation algorithm
* Mobile-first application design
* Immersive, delightful UI/UX

Guess Who, Haiku leverages the MERN app development stack which consists of: MongoDB, Express, React, and Node.js.

## Game Screens
### Create a Haiku
![create-haiku](https://user-images.githubusercontent.com/55667998/75101645-69657900-5594-11ea-8269-371db8418ef3.gif)

### Solve a Haiku Challenge
![solve-haiku](https://user-images.githubusercontent.com/55667998/75101666-c2cda800-5594-11ea-8d7f-af3d0c952c1e.gif)

### View a Haiku
![haiku-view](https://user-images.githubusercontent.com/55667998/75101608-d0cef900-5593-11ea-91ef-b1084041926c.gif)

### Leaderboard
![leaderboard](https://user-images.githubusercontent.com/55667998/75101705-8ea6b700-5595-11ea-862e-ffe3535cb5e2.PNG)


## Functionality and MVP

* User account creation and authentication
* Markov-chain text generator algorithm in haiku format
* Third-party APIs to source input text
* Interactive user experience throughout haiku creation, sharing, and solving
* Mobile first design
* Progressive Web App

## Technologies and Technical Challenges0

This project is built on a MongoDB, Mongoose, Express backend, with a React / Redux frontend (MERN stack). We utilized React Hooks, Styled Components and an overall componentized project structure extensively throughout this project. 


### Markov Chain Algorithm for Natural Language Generation (NLG)
Markov Chain Text generation algorithm, transform structured data into natural language by generating sentences based on recombination of elements of history of known sentences to generate seemingly semantically meaningful sentences. For this haiku guessing game, we extended the semantic generation algorithm to factor in the standard haiku syllable count (5-7-5) as well as article filtering (so that words such as the, and, and if don't end phrases). For more information on the technologies, check out our project's Github repo.

![haiku-view](https://user-images.githubusercontent.com/55667998/75101608-d0cef900-5593-11ea-91ef-b1084041926c.gif)


### A Progressive Web App
PWAs allow for features including push notification, home screen icon, full-screen and offline first functionality, providing a native-like experience for the user.

### Mobile-First Design
A design strategy where you start sketching and prototyping the smallest screen first and work your way up to larger screens. Essentially, it’s about delivering the right user experience to the right device.

![responsive-haiku-view](https://user-images.githubusercontent.com/55667998/75101767-cc580f80-5596-11ea-9136-3064050445ae.gif)

### Technical Challenges
- Configuring our text generator to output semantic text in the proper 5-7-5 syllable structure. Counting english language sylllables is a non-trivial problem involving logic to parse phonemes and other word parts accurately. We used test-driven-development in order to build out our test cases using Mocha, and developed a processing algorithm that would morea accurately parse words with similar arrangements of vowels but different overall counts.
- Responsive and intuitive styling with `styled-components`. Using `styled-components` greatly reduced redundant styling work across components with shared visual themes. 
- Finding an elegant frontend file architecture - favored the "duck" react-redux file structure in order to better facilitate collaboration and reduce merge conflicts. 
- We designed our backend database structure and API endpoint using a non-relational design principles, greatly simplifying API for client (our app), resulting in less overall API calls.  

## Group Members and Work Breakdown

### Tatiana Faramarzi

* Syllable count algorithm development
* Test driven-development (Mocha)
* UX/UI and wireframes
* Frontend design and setup

### Edward Xiao

* Backend design, setup and execution
* Markov Chain algorithm development
* Frontend execution

### Sarah Jiang

* Markov Chain algorithm development + test-driven development (Mocha)
* Database and backend REST-ful API design, setup, execution
* External API configuration and seeding
* Logo creation, visual theme, visual elements
* Frontend design and execution

### Alex Segers

* Workflow and agile development
* User auth, including models and validations
* Team Postman configuration
* UX/UI and visual theme
* Frontend design and setup
