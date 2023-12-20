const nameFinder = [
  'Peter',
  'Steve',
  'Tony',
  'Natasha',
  'Clint',
  'Logan',
  'Xabier',
  'Bruce',
  'Peggy',
  'Jessica',
  'Marc'
]
function finderName(param) {
  // insert code
  let found = false
  for (let i = 0; i < param.length; i++) {
    const name = 'Natasha'
    if (param[i] === name) {
      found = true
      console.log(found)
      console.log(nameFinder.indexOf(param[i]))
    } else {
      console.log(found)
    }
  }
}
finderName(nameFinder)
