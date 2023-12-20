const avengers = [
  'Hulk',
  'Thor',
  'IronMan',
  'Captain A.',
  'Spiderman',
  'Captain M.'
]
function findLongestWord(param) {
  // insert code
  let findLongestWord = param[0]
  for (i = 0; i < param.length; i++) {
    if (param[i].length > findLongestWord.length) {
      findLongestWord = param[i]
    }
  }
  console.log(findLongestWord)
}
findLongestWord(avengers)
