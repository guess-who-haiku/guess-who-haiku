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

## Stills
<img width="852" alt="Screen Shot 2020-02-21 at 4 01 28 PM" src="https://user-images.githubusercontent.com/55667998/75081307-8716dd80-54c3-11ea-9b15-47862126b843.png">

## Functionality and MVP

* User account creation and authentication
* Markov-chain text generator algorithm in haiku format
* Third-party APIs to source input text
* Interactive user experience throughout haiku generation and sharing
* Mobile first design
* Progressive Web App

## Technologies and Technical Challenges

### Backend: MongoDB, Mongoose, Express

### Frontend: React, Redux

### Markov Chain Algorithm for Natural Language Generation (NLG)
Markov Chain Text generation algorithm, transform structured data into natural language by generating sentences based on recombination of elements of history of known sentences to generate seemingly semantically meaningful sentences. For this haiku guessing game, we extended the semantic generation algorithm to factor in the standard haiku syllable count (5-7-5) as well as article filtering (so that words such as the, and, and if don't end phrases). For more information on the technologies, check out our project's Github repo.

```

```

### A Progressive Web App
PWAs allow for features including push notification, home screen icon, full-screen and offline first functionality, providing a native-like experience for the user.

### Mobile-First Design
A design strategy where you start sketching and prototyping the smallest screen first and work your way up to larger screens. Essentially, it’s about delivering the right user experience to the right device.

### Technical Challenges
- Configuring the  Markov text generator to output convincing text. We added another layer to the semantic parsing by having our generator spit out haiku-formatted text pieces.  
- Responsive and intuitive styling with `styled-components`. Using `styled-components` greatly reduced redundant styling work across components with shared visual themes. 
- Finding an elegant frontend file architecture - favored the "duck" react-redux file structure in order to better facilitate collaboration and reduce merge conflicts. 
- We designed our backend database structure and API endpoint using a non-relational design principles, greatly simplifying API for client (our app), resulting in less overall API calls.  

## Group Members and Work Breakdown

### Tatiana Faramarzi

* Syllable count algorithm development
* UX/UI and wireframes
* Frontend design and setup

### Edward Xiao

* Backend design, setup and execution
* Markov Chain algorithm development
* Frontend execution

### Sarah Jiang

* Database and backend design, setup, execution
* Markov Chain algorithm development
* API configuration
* External API configuration and database seeding
* Frontend design and execution

### Alex Segers

* Workflow and agile development
* User auth, including models and validations
* Team Postman configuration
* UX/UI and visual theme
* Frontend design and setup
