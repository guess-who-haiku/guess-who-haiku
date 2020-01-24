//function that makes a db request to get the "last updated time
//run the seed function to re-add quotes to the db ('i.e.' refresh)

const axios = require('axios');
const Library = require('./models/Library');
const library = {};


async function buildBarsLibrary() {
  let i = 0;
  
  while (i < 5) {
    
    const payload = await fetchBars();
    // console.log(payload);
    
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
  
  const payload = await axios.get(
    "https://a3odwonexi.execute-api.us-east-2.amazonaws.com/default/Bars_API?method=getQuote&category=sfw"
    
    )
    return payload;
    
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
      
      library["rick and morty"] = payload.data.data[0];
      // console.log(library);
  }
    
  async function fetchTrumpism() {
      
    const payload = await axios.get(
      'https://api.whatdoestrumpthink.com/api/v1/quotes'
      );
      
      library["donald trump"] = payload.data.messages.personalized.join('. ')
      library["donald trump"] = payload.data.messages.non_personalized.join('. ')
      
      // console.log(library);
        
  }
      
  async function fetchQuoteGarden() {
        
    const payload = await axios.get(
      "https://quote-garden.herokuapp.com/quotes/all"
      );
      
      // console.log(payload.data);
      let quotesArray = payload.data.results;
      
      for (let i = 0; i < quotesArray.length; i++) {

        while (quotesArray[i].quoteAuthor.includes(".")) {
          // console.log(quotesArray[i].quoteAuthor)
          quotesArray[i].quoteAuthor = quotesArray[i].quoteAuthor.replace(".", "");
        }
        library[quotesArray[i].quoteAuthor] = quotesArray[i].quoteText;
      }  
  }
        
                  
  async function constructLibrary() {
    
    try {

      await fetchQuoteGarden();
      await fetchTrumpism();
      await fetchLoremRicksum();
      await buildBarsLibrary();
    
      console.log('HERE IS THE LIBRARY', library);

      newLibrary = new Library({
        library
      })
      debugger;
      newLibrary
        .save()
        .then(newLibrary => console.log("BIG DATABASE ENERGY", newLibrary))
        .catch(err => console.log(err));

    } catch {
      console.log('BIG ERROR ENERGY ')
    }
  }

  module.exports = constructLibrary;
                  
                  
                  
                  