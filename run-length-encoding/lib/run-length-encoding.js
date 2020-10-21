function encode(rawData) {
  let repeatedChar = rawData[0];
  let repeatCount = 1;
  let compressedData = ''

  for (let idx = 1; idx <= rawData.length; idx += 1) {
      if (repeatedChar === rawData[idx]) {
        repeatCount += 1;
      } else {
        if (repeatCount > 1) {
          compressedData += (repeatCount + repeatedChar);
        } else {
          compressedData += repeatedChar;
        }

        repeatedChar = rawData[idx];
        repeatCount = 1;
      }
    }

  return compressedData;
}

function decode(compressedData) {
  let characters = compressedData.match(/(\d+[a-z ]|[a-z ])/gi)
  let decompressedData = '';
  if (characters) {
    characters.forEach(char => {
    if (char.length > 1) {
      let count = char.match(/\d+/)[0];
      let letter = char.match(/[a-z ]/i)[0];
      decompressedData += letter.repeat(count);
    } else {
      decompressedData += char;
    }
  })}
  return decompressedData;
}

module.exports = {
  encode,
  decode,
}
