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
    } catch (err) {
      console.log("Error fetching from Bars API", err)
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
      //console.log(library);

  }

                  
  async function constructLibrary() {
    
    try {
          // await fetchQuoteGarden();
          await fetchTrumpism();
          await fetchLoremRicksum();
          await fetchKanye();
          await fetchSimpsons();
          await fetchGOT();

          library["Barack Obama"] = "On behalf of the great state of Illinois, crossroads of a nation, Land of Lincoln, let me express my deepest gratitude for the privilege of addressing this convention. Tonight is a particular honor for me because, let’s face it, my presence on this stage is pretty unlikely. My father was a foreign student, born and raised in a small village in Kenya. He grew up herding goats, went to school in a tin-roof shack. His father -- my grandfather -- was a cook, a domestic servant to the British. But my grandfather had larger dreams for his son. Through hard work and perseverance my father got a scholarship to study in a magical place, America, that shone as a beacon of freedom and opportunity to so many who had come before. While studying here, my father met my mother. She was born in a town on the other side of the world, in Kansas. Her father worked on oil rigs and farms through most of the Depression. The day after Pearl Harbor my grandfather signed up for duty; joined Patton’s army, marched across Europe. Back home, my grandmother raised a baby and went to work on a bomber assembly line. After the war, they studied on the G.I. Bill, bought a house through F.H.A., and later moved west all the way to Hawaii in search of opportunity. And they, too, had big dreams for their daughter. A common dream, born of two continents. My parents shared not only an improbable love, they shared an abiding faith in the possibilities of this nation. They would give me an African name, Barack, or ”blessed,” believing that in a tolerant America your name is no barrier to success. They imagined -- They imagined me going to the best schools in the land, even though they weren’t rich, because in a generous America you don’t have to be rich to achieve your potential. They're both passed away now. And yet, I know that on this night they look down on me with great pride. They stand here, and I stand here today, grateful for the diversity of my heritage, aware that my parents’ dreams live on in my two precious daughters. I stand here knowing that my story is part of the larger American story, that I owe a debt to all of those who came before me, and that, in no other country on earth, is my story even possible. Tonight, we gather to affirm the greatness of our Nation -- not because of the height of our skyscrapers, or the power of our military, or the size of our economy. Our pride is based on a very simple premise, summed up in a declaration made over two hundred years ago.";
          
          library["Jane Austen"] = "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife. However little known the feelings or views of such a man may be on his first entering a neighbourhood, this truth is so well fixed in the minds of the surrounding families, that he is considered the rightful property of some one or other of their daughters. My dear Mr. Bennet, said his lady to him one day, have you heard that Netherfield Park is let at last? Mr. Bennet replied that he had not. But it is, returned she; for Mrs. Long has just been here, and she told me all about it. Mr. Bennet made no answer. Do you not want to know who has taken it? cried his wife impatiently. YOU want to tell me, and I have no objection to hearing it.  This was invitation enough. Why, my dear, you must know, Mrs. Long says that Netherfield is taken by a young man of large fortune from the north of England; that he came down on Monday in a chaise and four tosee the place, and was so much delighted with it, that he agreedwith Mr. Morris immediately; that he is to take possessionbefore Michaelmas, and some of his servants are to be in thehouse by the end of next week. What is his name? Bingley. Is he married or single? Oh! Single, my dear, to be sure! A single man of large fortune; four or five thousand a year. What a fine thing for our girls! How so? How can it affect them? My dear Mr. Bennet, replied his wife, how can you be so tiresome! You must know that I am thinking of his marrying one of them. Is that his design in settling here? Design! Nonsense, how can you talk so! But it is very likely that he MAY fall in love with one of them, and therefore you must visit him as soon as he comes. I see no occasion for that. You and the girls may go, or you may send them by themselves, which perhaps will be still better, for as you are as handsome as any of them, Mr. Bingley may like you the best of the party. My dear, you flatter me."
          
          newLibrary = new Library({
            library
          });

          newLibrary
            .save()
            .then(newLibrary =>
              console.log("Successfully saved library to db", newLibrary)
            )
            .catch(err => console.log(err));
        } catch (err) {
      console.log('Error', err)
    }
  }

  module.exports = constructLibrary;
                  
  
                  
                  