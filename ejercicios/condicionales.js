// let cantidad = prompt('Ingrese cantidad')

// 1.
// un usuario quiere comprar pantalones
// el precio de cada pantalon es de S/50,
// si el usuario compra mas de 3 pantalones el precio de cada producto es de S/40
// hacer una aplicacion que el usuario ingrese la cantidad de pantalones
// y de como resultado el total de la venta

// let cantidad = prompt('Ingrese cantidad')
// let precio = 50

// if (cantidad > 3) {
//   precio = 40
// }
// console.log(precio * cantidad)

// 2.
// un usuario compra un helado
// el precio del helado de de S/3
// el usuario tiene la posibilidad de escoger un solo topping
// el precio del toping "oreo" es de S/0.5
// el precio del toping "vainilla" es de S/1
// el precio del toping "lacasitos" es de S/1.5
// el precio del toping "kitkat" es de S/2
// * hacer una aplicacion que el usuario ingrese el toping
//    y mostrar en consola el precio final del helado mas el toping que escogio

// 3.
// hacer una aplicacion que el usuario ingrese un numero
// * validar que el dato ingresado sea un numero imprimir en consola si no lo es
// * verificar si el numero es par e imprimir en consola si es o no par

let numero = prompt('Ingrese un numero')

let parseNumero = parseInt(numero)
if (/* verificar si el numero es valido */ !isNaN(parseNumero)) {
  if (/*verificar que el numero sea par */ parseNumero % 2 === 0) {
    console.log('Es par')
  } else {
    console.log('No es par')
  }
} else {
  console.log('No es un numero valido')
}

// 4.
// Junior quiere comprar un conjunto de ropa
// camisa = S/40
// pantalon = S/80
// zapatos = S/280
//   * si compra camisa + pantalon el precio de la camisa es de S/35 y pantalon S/75
//   * si compra camisa + zapatos el precio de la camisa es de S/40 y zapatos S/270
//   * si compra pantalon + zapatos el precio del pantalon es de S/70 y zapatos S/270
//   * si compra camisa + pantalon + zapatos el precio de la camisa es de S/30 pantalon es de S/70 y zapatos S/270
// hacer una aplicacion que el usuario ingrese los productos seprados por coma
// y calcular el total de la venta
// help: utilizar la funcion split para
