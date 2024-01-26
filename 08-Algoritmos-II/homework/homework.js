'use strict'
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  if (array.length <= 1) {
    return array;
  }
  var pivote = array[0]
  var mayores = []
  var menores = []
  for (let i = 1; i < array.length; i++) {
    if (array[i] < pivote) {
      menores.push(array[i])
    } else {
      mayores.push(array[i])
    }
  }
  var arrayOrdenado = quickSort(menores)
  arrayOrdenado.push(pivote)
  for (let j = 0; j < quickSort(mayores).length; j++) {
    arrayOrdenado.push(quickSort(mayores)[j])
  }
  return arrayOrdenado
}

function merge(izq, der) {
  let i = 0
  let j = 0
  let result = []
  while (i < izq.length && j < der.length) {
    if (izq[i] < der[j]) {
      result.push(izq[i])
      i++
    } else {
      result.push(der[j])
      j++
    }
  }
  return result.concat(izq.slice(i)).concat(der.slice(j))
}
function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  if (array.length === 1) {
    return array
  }
  let mid = Math.floor(array.length / 2)
  let izq = array.slice(0, mid)
  let der = array.slice(mid)

  return merge(mergeSort(izq), mergeSort(der))
  //okey probemos ahora
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
