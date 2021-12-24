console.log('aplicacion iniciada...')
// comentario de una sola linea
/* 
 Este es un comentario de multiple linea
 Este es un comentario de multiple linea
 Este es un comentario de multiple linea
 Este es un comentario de multiple linea
*/
// cpor convencion camelcase ej javascript
let nombreDeVariable = ''

// tipos de datos
// primitivos
let numero = -20.3 // number
let nombre = 'Diego' // string
let esVerdadero = false // boolean
let valorNull = null
let valorUndefined = undefined
// compuestos

// Array
let numeros = [1, 2, 3, 4, 5]
let nombres = ['Diego', 'Junior', 'Maria']
let expresion = [[1, 2], []]
let expresionObjecto = [{}, {}]

// cambiar el valor de un elemento del array
numeros[0] = 5
// agregar elementos al array
numeros.push(6)
numeros.unshift(0)

// Objeto
// ejemplo sin objeto

let name = 'Diego'
let apellido = 'Sanchez'

/// ejemplo con objeto
let usuario = { name: 'Diego', apellido: 'Sanchez' }
// obtener el valor
let nombreUsuario = usuario.name
// reemplazar el valor
usuario.name = 'Junior'

/// En JavaScript podemos cambiar el tipo de dato asignado a una variable
let numeroX = 20
numeroX = numeroX + 10
numeroX = 'Diego'
numeroX = false

// ¿Valor o referencia?
// VALOR: Solo los tipos de datos primitivos
let x = 20
let y = x
// esta expresion solo cambia al y
// el x solo queda con su mismo valor
y = 50

// REFERNCIA: Solo los tipos de datos compuestos
// arrays
let numerosX = [1, 2, 3, 4, 5]
let numerosY = numerosX
let numerosZ = numerosY

// esta expesion cambia tanto a numerosY y numerosX
numerosY[0] = 5

// objetos
let usuarioX = { name: 'Diego', apellido: 'DSanchez' }
let usuarioY = usuarioX
let usuarioZ = usuarioY

// esta expesion cambia tanto a usuarioX y usuarioY
usuarioY.name = 'Junior'
