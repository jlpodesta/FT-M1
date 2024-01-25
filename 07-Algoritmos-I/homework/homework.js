'use strict'
// No cambies los nombres de las funciones.

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:
  let factores = [1]
  let divisor = 2
  while(num > 1) {
    if(num % divisor === 0){
      factores.push(divisor)
      num = num/divisor
    } else {
      divisor ++
    }
  }
  return factores
}

function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  let test = true
  while (test) {
    test = false
    for (let i = 0; i < array.length - 1; i++) {
      let a = array[i]
      let b = array[i + 1]
      if (a > b) {
        array[i] = b;
        array[i + 1] = a
        test = true
      }
    }
  }
  return array
}


function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  for (let i = 1; i < array.length; i++) {
    let a = array[i]
    let b = i - 1
    while (b >= 0 && array[b] > a) {
      array[b + 1] = array[b]
      b--
    }
    array[b + 1] = a
  }
  return array
}

function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  for (let i = 0; i < array.length - 1; i++) {
    var a = i
    var b = i + 1
    for (let j = i + 2; j < array.length; j++) {
      if (array[j] < array[b]) {
        b = j
      }
    }
    if (array[a] > array[b]) {
      var c = array[b]
      array[b] = array[a]
      array[a] = c
    }
  }
  return array
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
