export const sleep = ms => new Promise((resolve) => setTimeout(resolve, ms));

export const ghostType = (text, cb, duration = 1000) => new Promise((resolve) => {
  let current = 0;
  const len = text.length;
  const speed = duration / len
  const _typeNextLetter = () => {
    let letter = text[current];
    if (current < len) {
      current++;
      setTimeout(() => { cb(letter); _typeNextLetter(); }, speed);
    } else {
      resolve()
    }
  }

  _typeNextLetter();
})