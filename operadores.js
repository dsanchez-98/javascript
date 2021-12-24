let x = 10

// forma larga
x = x + 5
x = x - 5
// forma corta
x += 5
x -= 5

//comparacion

// primer caso
let x = 10
let y = 10
x == y // true
x === y // true

// segundo caso
let x = 10
let y = '10'

x == y // true
// compara tanto el valor como el tipo de dato
x === y // false

let x = 10
let y = 10

x > y // false

!false // true
!true // false

//
let x = 10
//expresion larga
x = x + 1
x = x - 1
// expresion corta
x++
x--

10 % 3 // 1

/// ternario
let x = 20
x >= 20 ? 'si es mayor o igual' : 'no es mayor o igual' // "si es mayor o igual"

// false = 0
// true = 1

// corto circuito
x > 20 || x < 30 || x < 50
// 1 + 1 + 1 = true
x > 20 && x < 30 && x < 50
// 0 * 1 * 1 * 1 = false
// 1 * 1 * 1 * 1 = true

let numerosX = [1, 2, 3, 4, 5] //g232nc
let numerosY = [1, 2, 3, 4, 5] //g434nc
numerosX == numerosY // false
numerosX === numerosY // false

let objetoX = { name: 'Diego' } //g2e42nc
let objetoY = { name: 'Diego' } //g43344nc
objetoX == objetoY // false
objetoX === objetoY // false

/// Numeros
let numeroX = 10
numeroX.toFixed(3) // "10.000"

// Strings
let nombreX = 'Diego'
nombreX.length // 5
nombreX.indexOf('e') // 2
