//function that makes a db request to get the "last updated time
//run the seed function to re-add quotes to the db ('i.e.' refresh)

const axios = require('axios');
const Library = require('./models/Library');
const library = {};


async function buildBarsLibrary() {
  let i = 0;
  
  while (i < 20) {
    
    const payload = await fetchBars();
    // console.log(payload);
    
    if ( payload === undefined ) continue;
    let { lyric, author } = payload.data.data
    
    let parsed = lyric.split('\n').join('. ');
    
    if (library[author] === undefined) {
      library[author] = `${parsed}`;
    } else {
      library[author] += ` ${parsed}`;
    }
    i++;
  }

  // console.log(library);
}


async function fetchBars() {
  
    try {  
      const payload = await axios.get(
        "https://a3odwonexi.execute-api.us-east-2.amazonaws.com/default/Bars_API?method=getQuote&category=sfw",
        {
          params: {
            "method": "getQuote",
            "category": ["sfw", "ludacris"]
          }
        }
      )
       
        return payload; 
    } catch {
      console.log("Error fetching from Bars API")
    }
  }
  
  async function fetchLoremRicksum() {
    
    
    const payload = await axios.get(
      'http://loremricksum.com/api/', 
      {
        params: {
          paragraphs: 1,
          quotes: 1000
        }
      }
      );
      
      library["Rick and Morty"] = payload.data.data[0];
      // console.log(library);
  }
    
  async function fetchTrumpism() {
      
    const payload = await axios.get(
      'https://api.whatdoestrumpthink.com/api/v1/quotes'
      );
      
      library["Donald Trump"] = payload.data.messages.personalized.join('. ')
      library["Donald Trump"] = payload.data.messages.non_personalized.join('. ')
      
      // console.log(library);
        
  }
      
  async function fetchQuoteGarden() {
        
    const payload = await axios.get(
      "https://quote-garden.herokuapp.com/quotes/all"
      );
      
     
      let quotesArray = payload.data.results;
      
      for (let i = 0; i < quotesArray.length; i++) {

        while (quotesArray[i].quoteAuthor.includes(".")) {

          quotesArray[i].quoteAuthor = quotesArray[i].quoteAuthor.replace(".", "");
        }
        library[quotesArray[i].quoteAuthor] = quotesArray[i].quoteText;
      }  
  }
        
  async function fetchKanye() {

    for (let i = 0; i < 100; i++) {
      
      const payload = await axios.get(
        "https://api.kanye.rest"
      );
      
      if (library["Kanye West"] === undefined ) {
        library["Kanye West"] = payload.data.quote;
      } else {

        library["Kanye West"] += `. ${payload.data.quote}`;
      }

    }
  }

  async function fetchSimpsons() {

    for (let i = 0; i < 10; i++) {

      const payload = await axios.get(
        "https://thesimpsonsquoteapi.glitch.me/quotes", 
        {
          params: {
            count: 10
          }
        }
      );

      payload.data.forEach((quoteBody) => {

        let parsedCharacter;

        if (quoteBody.character.includes(".")) {
          parsedCharacter = quoteBody.character.replace(".", "");
        } else {
          parsedCharacter = quoteBody.character;
        }

          if (library[parsedCharacter] === undefined) {
            library[parsedCharacter] = quoteBody.quote;
          } else {
            library[parsedCharacter] += ` ${quoteBody.quote}`;
          } 
      })
    }
  }

  async function fetchGOT() {

      for (let i = 0; i < 100; i++) {
        const payload = await axios.get(
          "https://got-quotes.herokuapp.com/quotes"
        );

    
        if (library["Game of Thrones"] === undefined) {
          library["Game of Thrones"] = payload.data.quote;
        } else {
          library["Game of Thrones"] += ` ${payload.data.quote}`;
        }
      }
      console.log(library);

  }

                  
  async function constructLibrary() {
    
    try {

      await fetchQuoteGarden();
      await fetchTrumpism();
      await fetchLoremRicksum();
      await fetchKanye();
      await fetchSimpsons();
      await fetchGOT();
    
      // console.log('HERE IS THE LIBRARY', library);

      newLibrary = new Library({
        library
      })

      newLibrary
        .save()
        .then(newLibrary => console.log("Successfully saved library to db", newLibrary))
        .catch(err => console.log(err));

    } catch {
      console.log('Error')
    }
  }

  module.exports = constructLibrary;
                  
  
                  
                  