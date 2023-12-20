//! 1.1 Crea un bucle for que vaya desde 0 a 9 y muestralo por consola.
// for (let i = 0; i < 10; i++) {
//   console.log(i)
// }
//! 1.2 Crea un bucle for que vaya desde 0 a 9 y muestralo por consola solo
//! cuando el resto del numero dividido entre 2 sea 0.

// for (let i = 0; i < 10; i++) {
//   if (i % 2 === 0) {
//     console.log(i)
//   }
// }

//! 1.3 Crea un bucle para conseguir dormir contando ovejas.
//! Este bucle tiene que dar 10 vueltas, es decir, 10 console.log.

// for (let i = 1; i <= 10; i++) {
//   if (i <= 1) {
//     console.log(`${i} oveja`)
//   } else {
//     console.log(`${i} ovejas`)
//   }
// }

//! Muestra por consola un mensaje diciendo 'Intentando dormir 🐑' en cada vuelta del bucle
//! y cambia el mensaje en la décima vuelta a 'Dormido!'.

// for (let i = 1; i <= 10; i++) {
//   if (i <= 1) {
//     console.log(`${i} oveja`)
//     console.log(`------------------------`)
//   } else {
//     console.log(`${i} ovejas`)
//     console.log(`------------------------`)
//   }
//   if (i < 10) {
//     console.log(`Intentando dormir`)
//     console.log(`------------------------`)
//   } else {
//     console.log(`Dormido`)
//   }
// }
//!----------------------------------------------

for (let i = 1; i <= 10; i++) {
  if (i < 10) {
    console.log('Intentando dormir')
  } else {
    console.log('Dormido')
  }
}
