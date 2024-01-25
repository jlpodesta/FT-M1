'use strict';

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)
  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/
function BinarySearchTree(value) {
   this.value = value
   this.left = null
   this.right = null
}
BinarySearchTree.prototype.insert = function (value) {
   var newBST = new BinarySearchTree(value)
   if (value < this.value) {
      if (this.left) {
         this.left.insert(value)
      } else {
         this.left = newBST
      }
   } else {
      if (this.right) {
         this.right.insert(value)
      } else {
         this.right = newBST
      }
   }
}

BinarySearchTree.prototype.size = function () {
   function contarNodos(arbol) {
      if (arbol === null) {
         return 0;
      }
      return 1 + contarNodos(arbol.left) + contarNodos(arbol.right);
   }
   return contarNodos(this);
}
BinarySearchTree.prototype.contains = function (value) {
   if (this.value === value) {
      return true
   }
   if (value < this.value && this.left) {
      return this.left.contains(value)
   }
   if (value > this.value && this.right) {
      return this.right.contains(value)
   } else {
      return false
   }
}
BinarySearchTree.prototype.depthFirstForEach = function (cb, order) {
   if (order === "pre-order") {
      cb(this.value)
      if (this.left !== null) this.left.depthFirstForEach(cb, order)
      if (this.right !== null) this.right.depthFirstForEach(cb, order)
   } else if (order === "post-order") {
      if (this.left !== null) this.left.depthFirstForEach(cb, order)
      if (this.right !== null) this.right.depthFirstForEach(cb, order)
      cb(this.value)
   } else {
      if (this.left !== null) this.left.depthFirstForEach(cb, order)
      cb(this.value)
      if (this.right !== null) this.right.depthFirstForEach(cb, order)
   }
}
BinarySearchTree.prototype.breadthFirstForEach = function (cb, aux = []) {
   cb(this.value)
   if (this.left) aux.push(this.left)
   if (this.right) aux.push(this.right)
   let next = aux.shift()
   if (next) next.breadthFirstForEach(cb, aux)
}
// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
   BinarySearchTree,
};
