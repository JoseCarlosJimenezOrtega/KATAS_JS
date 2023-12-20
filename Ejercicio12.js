const duplicates = [
  'sushi',
  'pizza',
  'burger',
  'potatoe',
  'pasta',
  'ice-cream',
  'pizza',
  'chicken',
  'onion rings',
  'pasta',
  'soda'
]
function removeDuplicates(param) {
  // insert code
  for (let i = 0; i < param.length; i++) {
    const element = param[i]
    for (let j = i + 1; j < param.length; j++) {
      const element1 = param[j]
      if (element === element1) {
        param.splice(j, 1)
        j--
      }
    }
  }
  console.log(param)
}
removeDuplicates(duplicates)
