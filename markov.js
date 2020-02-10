function markovChainGenerator(text) {
    const textArr = text.split(' ');
    const markovChain = {};
    for (let i = 0; i < textArr.length; i++) {
        let word = textArr[i].toLowerCase().replace(/[\W_]/g, "") //replaces any non letter including underscore
        if (word) {
            if (!markovChain[word]) {
                markovChain[word] = []
            }
            if (textArr[i + 1]) { //this is not working, last word of string is getting added as a base word due to punctuation being replaced as empty string
                markovChain[word].push(textArr[i + 1].toLowerCase().replace(/[\W_]/g, ""));
            }
        }
    }
    let formattedWords = Object.keys(markovChain)
    markovChain[formattedWords[formattedWords.length - 1]].push(formattedWords[0])
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
    //console.log('inside generateDictionaries function', dictionaries);
    return dictionaries;
};

/* generates a single line of a haiku, old */

// function generateLine(dictionary, syllable) {
//     let keys = Object.keys(dictionary); //base words
//     let lineArr = [keys[Math.floor(Math.random() * keys.length)]]; //select first word in line

//     // logic below will need to be altered to create lines of specified syllable in Markov chain gen
//     for (let i = 0; i < syllable; i++) {
//         let newWords = dictionary[lineArr[i]];
//         lineArr.push(newWords[Math.floor(Math.random() * newWords.length)]);
//         // lineArr.push(tatiana(newWords));
//         //console.log('inside generate line', lineArr);
//     }
//     //need to give ending word starting word as key
//     //console.log('outside of loop lineArr (gen lines func)', lineArr);
//     return lineArr.join(" ");
// }

//up to date generate line function with enforced syllable count
function genLine(dictionary, visitedWords = [], targetSyllCount, baseWord) {
    let wordsArray = [];
    if (!baseWord) {
        wordsArray = Object.keys(dictionary).sort(() => Math.random() - 0.5)
    } else {
        wordsArray = dictionary[baseWord]
    }

    for (let i = 0; i < wordsArray.length; i++) {
        let word = wordsArray[i]
        let syllCount = countSyllables(word)  //can memoize here, add to arguments
        //syllable count is 0, we found our completed line!
        if (targetSyllCount - syllCount === 0) {
            if (!["the", "i", "of", "a", "if", "an"].includes(word)) {
                visitedWords.push(word)
                return visitedWords.join(" ")
            }
        }
        //syllable count is < 0, return null

        //syllable count is > 0, keep going
        if (targetSyllCount - syllCount > 0) {
            // visitedWords.push(word)
            newVisitedWords = visitedWords.slice(0);
            newVisitedWords.push(word)
            const result = genLine(dictionary, newVisitedWords, targetSyllCount - syllCount, word)
            if (result) {
                return result
            }
        }
    }
}

/* takes dict object with author, text dictionary key value pairs and returns an object with a haiku body */

function generateLines(dictionaries) {
    let finalObj = {};

    Object.keys(dictionaries).forEach( person => {
        if (!finalObj[person]) {
          finalObj[person] = [];
        }
        // console.log(genLine(dictionaries[person], [], 10, null))
        // console.log(genLine(dictionaries[person], [], 5, null))
        // console.log(genLine(dictionaries[person], [], 10, null))
        finalObj[person].push(genLine(dictionaries[person], [], 5, null))
        finalObj[person].push(genLine(dictionaries[person], [], 7, null))
        finalObj[person].push(genLine(dictionaries[person], [], 5, null))
    })

    return finalObj;
}

function countSyllables(word) {
    let syl_count = 0;
    let vowels = "aeiouyAEIOUY";
    let secondVow = "aouAOU"

    if (vowels.includes(word[0])) {
        syl_count += 1
    }
    for (let i = 1; i < word.length; i++) {
        let letter = word.charAt(i);
        if (vowels.includes(letter) && !vowels.includes(word.charAt(i - 1))) {
            syl_count += 1;
        }
        if ((letter === "i" || letter === "u") && secondVow.includes(word.charAt(i + 1))) {
            syl_count += 1;
        }
    }
    if (word[word.length - 1] === "e") {
        syl_count -= 1;
    }
    if (word[word.length - 2] === "e" && word[word.length - 1] === "d" && !(word[word.length - 3] === "d" || word[word.length - 3] === "t")) {
        syl_count -= 1;
    }
    if ((word.substring(word.length - 2) === "le") && (!vowels.includes(word[word.length - 3])) && word.length > 2) {
        syl_count += 1;
    }
    if (syl_count === 0) {
        syl_count += 1
    }
    return syl_count;
}

// let hptext = "Nearly ten years had passed since the Dursleys had woken up to find their nephew on the front step, but Privet Drive had hardly changed at all. The sun rose on the same tidy front gardens and lit up the brass number four on the Dursleys' front door; it crept into their living room, which was almost exactly the same as it had been on the night when Mr.Dursley had seen that fateful news report about the owls. Only the photographs on the mantelpiece really showed how much time had passed. Ten years ago, there had been lots of pictures of what looked like a large pink beach ball wearing different - colored bonnets - but Dudley Dursley was no longer a baby, and now the photographs showed a large blond boy riding his first bicycle, on a carousel at the fair, playing a computer game with his father, being hugged and kissed by his mother. The room held no sign at all that another boy lived in the house, too."
// let rjtext = "But, soft! what light through yonder window breaks? It is the east, and Juliet is the sun. Arise, fair sun, and kill the envious moon, Who is already sick and pale with grief, That thou her maid art far more fair than she: Be not her maid, since she is envious; Her vestal livery is but sick and green And none but fools do wear it; cast it off. It is my lady, O, it is my love! O, that she knew she were! She speaks yet she says nothing: what of that? Her eye discourses; I will answer it. I am too bold, 'tis not to me she speaks: Two of the fairest stars in all the heaven, Having some business, do entreat her eyes To twinkle in their spheres till they return. What if her eyes were there, they in her head? The brightness of her cheek would shame those stars, As daylight doth a lamp; her eyes in heaven Would through the airy region stream so bright That birds would sing and think it were not night. See, how she leans her cheek upon her hand! O, that I were a glove upon that hand, That I might touch that cheek!"
// let sarah = {
//     hp: hptext,
//     rj: rjtext
// };
// let dicts = generateDictionaries(sarah);
// // console.log(dicts)

// console.log(generateLines(dicts));



module.exports = {

  generateDictionaries: generateDictionaries,
  generateLines: generateLines

}


// let chiefText = 'dont see colors crackpot colors crackpot see colors crackpot colors crackpot crackpot toys when i look at when i look at people people at people people dont see colors crackpot colors crackpot see colors crackpot colors crackpot just see colors crackpot colors crackpot see colors crackpot colors crackpot look at people people at people people dont see colors crackpot colors crackpot see colors crackpot colors crackpot just see colors crackpot colors crackpot see colors crackpot colors crackpot i look at people people at people people dont see colors crackpot colors crackpot see colors crackpot colors crackpot just see colors crackpot colors crackpot see colors crackpot colors crackpot look at people people at people people dont see colors crackpot colors crackpot see colors crackpot colors crackpot just see colors crackpot colors crackpot see colors crackpot colors crackpot at people i look at at dont see see just see see look at at dont see see just see see i look at at dont see see just see see look at at dont see see just see see people i look at at dont see see just see see look at at dont see see just see see i look at at dont see see just see see look at at dont see see just see see the chief here bake him away away toys when people i look at'
// let chiefObj = {
//     "chief wiggum": chiefText
// }
// let dicts = generateDictionaries(chiefObj);
// console.log(generateLines(dicts));