function generateIpsum(numberOfWords) {
  let blockOfText = "";
  let carWords = ["hemi", "cylinder", "embankment", "wheel", "paint"];
  for (let i = 0; i < numberOfWords; i++) {
    blockOfText = blockOfText + carWords[randomIntFromZeroToInterval(4)];
    if (i < numberOfWords - 1) {
      blockOfText = blockOfText + " ";
    }
  }

  return blockOfText;
}

function generateTwoParagraphs(numberOfWords) {
  return generateIpsum(numberOfWords) + "\n\n" + generateIpsum(numberOfWords);
}

// This is wet code! refactor this to be one "generateXParagraphs" function that accepts a parameter numberOfParagraphs
function generateThreeParagraphs(numberOfWords) {
  return (
    generateIpsum(numberOfWords) +
    "\n\n" +
    generateIpsum(numberOfWords) +
    "\n\n" +
    generateIpsum(numberOfWords)
  );
}

function generateXParagraphs(numberOfWords, numberOfParagraphs) {
  for (i = 0; i < numberOfParagraphs; i++) {
    generateIpsum(numberOfWords);
  }
}

// Don't
// Repeat
// Yourself

// Write
// Everything
// Twice

function randomIntFromZeroToInterval(max) {
  return Math.floor(Math.random() * (max + 1));
}

console.log(generateThreeParagraphs(20));
