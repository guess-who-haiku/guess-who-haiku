export const formatHaiku = (data, haikuAuthors) => {
    //this function will return an array of lines to facilitate haiku formatting on FE
    let newHaiku1 = data[haikuAuthors[0]]
    switch (haikuAuthors.length) {
        case 1:
            return newHaiku1;
        case 2:
            //if two authors, first two lines come from first auth and last line comes from second auth
            let newHaiku2 = []
            newHaiku2.push(data[haikuAuthors[0]].slice(0, 2))
            newHaiku2.push(data[haikuAuthors[1]].slice(2))
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