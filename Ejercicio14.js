const counterWords = [
  'code',
  'repeat',
  'eat',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code',
  'enjoy',
  'upgrade',
  'code'
]
function repeatCounter(word) {
  // insert code
  const count = {}
  for (let i = 0; i < word.length; i++) {
    if (count[word[i]] >= 1) {
      count[word[i]]++
    } else {
      count[word[i]] = 1
    }
  }
  console.log(count)
}
repeatCounter(counterWords)
