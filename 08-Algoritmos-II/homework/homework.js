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

function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

  //okey probemos ahora
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
