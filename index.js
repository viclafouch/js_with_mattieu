/**
 * Variables (const / let / var)
 */
const str = 'test' // string
const bool = true // boolean
const array = ['apple', 'orange', 'banana'] // array
const number = 1000 // Int
const fn = (name) => `My name is ${name}` // function
const nop = undefined // undefined
const ISayNop = null // null
const date = new Date()
const object = {
  key1: 'Hello world',
  key2: 1
} // object

/**
 * Conditions
 */

console.log('----- CONDITIONS -----')

if (str === 'test') {
  console.log('It passes in conditon 1!')
} else if (str === 'notest') {
  console.log('It passes in conditon 2!')
} else {
  console.log('It passes in last conditon!')
}

/**
 * Conditons with &&
 */

console.log('----- CONDITIONS WITH && -----')

if (str === 'test' && number === 1000) {
  console.log('str value is test AND number value is 1000')
}

/**
 * Conditons with ||
 */

console.log('----- CONDITIONS WITH || -----')

if (str === 'superprof' || number === 1000) {
  console.log('str value is superprof OR number value is 1000')
}

/**
 * Conditons with && and ||
 */

console.log('----- CONDITIONS WITH && AND || -----')

if ((str === 'superprof' || number === 1000) && array.length === 3) {
  console.log('str value is superprof OR number value is 1000, and our array has 3 elements')
}

/**
 * INCREMENT A NUMBER
 */

console.log('----- INCREMENT A NUMBER -----')

let numberToIncrement = 1 // LET because we will modify it later
numberToIncrement++
console.log(`numberToIncrement become ${numberToIncrement}`);

/**
 * DECREMENT A NUMBER
 */

console.log('----- DECREMENT A NUMBER -----')

let numberToDecrement = 1 // LET because we will modify it later
numberToIncrement--
console.log(`numberToIncrement become ${numberToIncrement}`);

/**
 * ARRAY
 */

// TODO

