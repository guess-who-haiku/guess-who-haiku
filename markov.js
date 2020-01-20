function markovChainGenerator(text) {
    const textArr = text.split(' ')
    const markovChain = {};
    for (let i = 0; i < textArr.length; i++) {
        let word = textArr[i].toLowerCase().replace(/[\W_]/, "")
        if (!markovChain[word]) {
            markovChain[word] = []
        }
        if (textArr[i + 1]) {
            markovChain[word].push(textArr[i + 1].toLowerCase().replace(/[\W_]/, ""));
        }
    }
    return markovChain
};

function likelyhood(chain, prev, word) {
    const prevArr = chain[prev]
    const num = prevArr.filter(w => w === word).length
    return `The likelihood that ${word} will come after ${prev} is ${num} out of ${prevArr.length}`
};

let text = "Nearly ten years had passed since the Dursleys had woken up to find their nephew on the front step, but Privet Drive had hardly changed at all. The sun rose on the same tidy front gardens and lit up the brass number four on the Dursleys' front door; it crept into their living room, which was almost exactly the same as it had been on the night when Mr.Dursley had seen that fateful news report about the owls.Only the photographs on the mantelpiece really showed how much time had passed.Ten years ago, there had been lots of pictures of what looked like a large pink beach ball wearing different - colored bonnets - but Dudley Dursley was no longer a baby, and now the photographs showed a large blond boy riding his first bicycle, on a carousel at the fair, playing a computer game with his father, being hugged and kissed by his mother.The room held no sign at all that another boy lived in the house, too."
let markovArr = markovChainGenerator(text);
likelyhood(markovArr, 'on', 'the');