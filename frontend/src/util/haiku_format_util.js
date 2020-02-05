import authorData from 'assets/index';
export const formatHaiku = (data, haikuAuthors) => {
    //this function will return an array of lines to facilitate haiku formatting on FE

    // console.log('data', data, 'haiku authors', haikuAuthors);
    let newHaiku1 = data[haikuAuthors[0]]


    switch (haikuAuthors.length) {
        case 1:
            return newHaiku1;
        case 2:
            //if two authors, first two lines come from first auth and last line comes from second auth
            let newHaiku2 = []
            newHaiku2.push(data[haikuAuthors[0]][0])
            newHaiku2.push(data[haikuAuthors[0]][1])
            newHaiku2.push(data[haikuAuthors[1]][2])
            return newHaiku2;
        case 3:
            //if three authors, one line is taken from each in order of original auth selection
            let newHaiku3 = []
            for (let i = 0; i < haikuAuthors.length; i++) {
                let auth = haikuAuthors[i];
                newHaiku3.push(data[auth][i])
            }
            return newHaiku3;
        default:
            return newHaiku1;
    }
}

export const getAuthorOfLine = (haikuBody, line) => {
    return Object.keys(haikuBody)
        .find(author => haikuBody[author].includes(line));
}

export const getAuthorData = name => {
    const { url, color } = authorData[name];
    return ({ name, url, color });
}
export const formatHaikuLines = body => {
    //    [{ author: null, text: null }]
    let authors = Object.keys(body);
    let lines = []
    switch (authors.length) {
        case 1:
            const author = authors[0];
            for (const text of body[author]) {
                lines.push({ author: getAuthorData(author), text })
            }
            break;
        case 2:
            const indices = [[0, 0], [0, 1], [1, 2]]
            for (const [idx1, idx2] of indices) {
                const author = authors[idx1];
                const text = body[author][idx2];
                lines.push({ author: getAuthorData(author), text })
            }
            break;
        case 3:
            authors.forEach((author, idx) => {
                const text = body[author][idx]
                lines.push({ author: getAuthorData(author), text })
            })
            break;
        default:
            break;
    }

    return lines;
}