const { getTopWords } = require("./tags");

const stringWithStopWords = "To be or not to be, that is the question";
const shortString = "How much wood would a woodchuck chuck if a woodchuck could chuck wood?"
const longString = "Peter Piper picked a peck of pickled peppers. If Peter Piper picked a peck of pickled peppers, How many pickled peppers did Peter Piper pick?";
const stringWithPunctuation = "Hello World! This a world of tests!"

describe("getTopWords", () => {
  it("should return undefined if no string provided", () => {
    expect(getTopWords()).toBe(undefined);
  });
  it("should return an array of length equal to second parameter (tagCount)", () => {
    const result = getTopWords(shortString, 2);
    expect(result.length).toEqual(2);
    expect(result).toEqual(["chuck", "wood"])
  })
  it("should not include punctuation in result", () => {
    const result = getTopWords(stringWithPunctuation, 1);
    expect(result).toEqual(["world"]);
  });
  it("should return all words as lower case", () => {})
  it("should return words in descending order of duplication", () => {})
  it("should return words of same duplication in alphabetical order", () => {})
  it("should exclude stop words", () => {})
  it("should return an array shorter than tagCount if no further duplicate words", () => {})

  // improvements: 
  // - function should take in stopwords as parameter
  // - function should return empty array not undefined
});
