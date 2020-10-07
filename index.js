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
  key2: 1,
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
console.log(`numberToIncrement become ${numberToIncrement}`)

/**
 * DECREMENT A NUMBER
 */

console.log('----- DECREMENT A NUMBER -----')

let numberToDecrement = 1 // LET because we will modify it later
numberToIncrement--
console.log(`numberToIncrement become ${numberToIncrement}`)

/**
 * ARRAY
 */

const fruits = ['apple', 'orange', 'banana', 'pineapple', 'pear'] // array

/**
 * ARRAY
 * Add an element
 */

console.log('----- ADD AN ELEMENT TO ARRAY -----')

fruits.push('tomato')
console.log(fruits)

/**
 * ARRAY
 * Reverse an array
 */

console.log('----- REVERSE AN ARRAY -----')

const reverseFruitsReversed = fruits.reverse()
console.log(reverseFruitsReversed)

/**
 * ARRAY
 * Loops
 */

for (let index = 0; index < fruits.length; index++) {
  const fruit = array[index]
  if (fruit === 'tomato') {
    break
  }
  // console.log(fruit)
}

for (const fruit of fruits) {
  if (fruit === 'apple' || fruit === 'tomato') {
    break
  }
  // console.log(fruit)
}

const users = [
  {
    name: 'Thomas',
    age: 18,
  },
  {
    name: 'Victor',
    age: 22,
  },
  {
    name: 'Mattieu',
    age: 15,
  },
]

/**
 * ARRAY
 * Filter an array
 */

console.log('----- FILTER AN ARRAY -----')

const minors = users.filter((user) => user.age < 18)
// SAME AS
const minors_ = users.filter(function (user) {
  return user.age < 18 //
  // SAME AS
  if (user.age < 18) {
    return true
  } else {
    return false
  }
})

console.log(minors)

/**
 * ARRAY
 * Map an array
 */

console.log('----- MAP AN ARRAY -----')

const usersMoreOlder = users.map((user) => {
  user.age++
  return user
})
// SAME AS
const usersMoreOlder_ = users.map(function (user) {
  user.age++
  return user
})

console.log(usersMoreOlder)

/**
 * ARRAY
 * Reduce an array
 */

console.log('----- REDUCE AN ARRAY -----')

const total = users.reduce(function (previousValue, currentValue) {
  return previousValue + currentValue.age
}, 0)

console.log(total)
