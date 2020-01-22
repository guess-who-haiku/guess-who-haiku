function markovChainGenerator(text) {
    const textArr = text.split(' ');
    const markovChain = {};
    for (let i = 0; i < textArr.length; i++) {
        let word = textArr[i].toLowerCase().replace(/[\W_]/, "")
        if (word) {
            if (!markovChain[word]) {
                markovChain[word] = []
            }
            if (textArr[i + 1]) { //this is not working, last word of string is getting added as a base word due to punctuation being replaced as empty string
                markovChain[word].push(textArr[i + 1].toLowerCase().replace(/[\W_]/, ""));
            }
        }
    }
    return markovChain;
};

function likelyhood(chain, prev, word) {
    const prevArr = chain[prev]
    const num = prevArr.filter(w => w === word).length
    return `The likelihood that ${word} will come after ${prev} is ${num} out of ${prevArr.length}`
};

/* takes a library selection object and returns a dictionary */

function generateDictionaries(sampleTextsObj) {
    // return Object.keys(sampleTextsObj).map(person => (
    //     markovChainGenerator(sampleTextsObj[person])
    // ))
    let people = Object.keys(sampleTextsObj);
    let dictionaries = {};
    people.forEach(person => {
        dictionaries[person] = markovChainGenerator(sampleTextsObj[person])
    });
    return dictionaries;
};

/* generates a single line of a haiku */

function generateLine(dictionary, syllable) {
    let keys = Object.keys(dictionary);
    let lineArr = [keys[Math.floor(Math.random() * keys.length)]];
    // logic below will need to be altered to create lines of specified syllable
    for (let i = 0; i < syllable; i++) {
        let newWords = dictionary[lineArr[i]];
        lineArr.push(newWords[Math.floor(Math.random() * newWords.length)]);
        // lineArr.push(tatiana(newWords));
    }
    return lineArr.join(" ");
}


/* takes dict object with author, text dictionary key value pairs and returns an object with a haiku body */

function generateLines(dictionaries) {
    let finalObj = {};

    Object.keys(dictionaries).forEach( person => {
        if (!finalObj[person]) {
          finalObj[person] = [];
        }
        finalObj[person].push(generateLine(dictionaries[person],5))
        finalObj[person].push(generateLine(dictionaries[person],7))
        finalObj[person].push(generateLine(dictionaries[person],5))
    })

    return finalObj;
}

// let hptext = "Nearly ten years had passed since the Dursleys had woken up to find their nephew on the front step, but Privet Drive had hardly changed at all. The sun rose on the same tidy front gardens and lit up the brass number four on the Dursleys' front door; it crept into their living room, which was almost exactly the same as it had been on the night when Mr.Dursley had seen that fateful news report about the owls. Only the photographs on the mantelpiece really showed how much time had passed. Ten years ago, there had been lots of pictures of what looked like a large pink beach ball wearing different - colored bonnets - but Dudley Dursley was no longer a baby, and now the photographs showed a large blond boy riding his first bicycle, on a carousel at the fair, playing a computer game with his father, being hugged and kissed by his mother. The room held no sign at all that another boy lived in the house, too."
// let rjtext = "But, soft! what light through yonder window breaks? It is the east, and Juliet is the sun. Arise, fair sun, and kill the envious moon, Who is already sick and pale with grief, That thou her maid art far more fair than she: Be not her maid, since she is envious; Her vestal livery is but sick and green And none but fools do wear it; cast it off. It is my lady, O, it is my love! O, that she knew she were! She speaks yet she says nothing: what of that? Her eye discourses; I will answer it. I am too bold, 'tis not to me she speaks: Two of the fairest stars in all the heaven, Having some business, do entreat her eyes To twinkle in their spheres till they return. What if her eyes were there, they in her head? The brightness of her cheek would shame those stars, As daylight doth a lamp; her eyes in heaven Would through the airy region stream so bright That birds would sing and think it were not night. See, how she leans her cheek upon her hand! O, that I were a glove upon that hand, That I might touch that cheek!"
// let sarah = {
//     hp: hptext,
//     rj: rjtext
// };
// let dicts = generateDictionaries(sarah);

// console.log(generateLines(dicts));

module.exports = {

  generateDictionaries: generateDictionaries,
  generateLines: generateLines

}