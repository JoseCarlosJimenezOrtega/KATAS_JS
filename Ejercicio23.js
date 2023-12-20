const small = []
const median = []
const long = []

const movies = [
  { name: 'Titan A.E.', durationInMinutes: 130 },
  { name: 'Nightmare before Christmas', durationInMinutes: 225 },
  { name: 'Inception', durationInMinutes: 165 },
  { name: 'The Lord of the Rings', durationInMinutes: 967 },
  { name: 'Star Wars: A New Hope', durationInMinutes: 214 },
  { name: 'Terminator', durationInMinutes: 140 }
]
for (let i = 0; i < movies.length; i++) {
  const movie = movies[i]
  if (movie.durationInMinutes < 100) {
    small.push(movie)
  }
  if (movie.durationInMinutes >= 100 && movie.durationInMinutes < 200) {
    median.push(movie)
  }
  if (movie.durationInMinutes >= 200) {
    long.push(movie)
  }
}
console.log(small)
console.log(median)
console.log(long)
