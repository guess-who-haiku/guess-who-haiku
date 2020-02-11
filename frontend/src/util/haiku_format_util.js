import authorData from 'assets/index';
import { sample } from './scoreboard_util';
import colorFamilies from 'assets/color-index';


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

export const getAuthorData = (name, color, colorFamilyBackground) => {
    const { url } = authorData[name];

    return { name, url, color, colorFamilyBackground };
  };


export const formatHaikuLines = body => {
    //    [{ author: null, text: null }]
    let authors = Object.keys(body);

    let colorFamily = colorFamilies[sample(Object.keys(colorFamilies))];
    let colorFamilyBackground = colorFamily.url;

    let lines = [];
    switch (authors.length) {
        case 1:
            const author = authors[0];
            for (let i = 0; i < body[author].length; i++) {
                let text = body[author][i];
                let color = colorFamily.colors[i];
             
                lines.push({
                  author: getAuthorData(author, color, colorFamilyBackground),
                  text
                });
            }
            break;
        case 2:
            const indices = [[0, 0], [0, 1], [1, 2]]
            for (let i = 0; i < indices.length; i++) {

                let [idx1, idx2] = indices[i];
                let color = colorFamily.colors[i];
                const author = authors[idx1];
                const text = body[author][idx2];
                lines.push({
                  author: getAuthorData(author, color, colorFamilyBackground),
                  text
                });
            }
            break;
        case 3:
            authors.forEach((author, idx) => {

                let color = colorFamily.colors[idx];
                const text = body[author][idx]
                lines.push({
                  author: getAuthorData(author, color, colorFamilyBackground),
                  text
                });
            })
            break;
        default:
            break;
    }
    console.log('LINES', lines);
    return lines;
}

export const getKeyByValue = (object, value) => {
  return Object.keys(object).find(key => object[key].includes(value));
}