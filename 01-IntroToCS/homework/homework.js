'use strict';

function BinarioADecimal(num) {
   let a = num.split("").reverse()
   let suma = 0
   for (let i = 0; i < num.length; i++){
   let b = a[i]
   let c = parseInt(b)
   let d = c * 2 ** i
   suma += d
   }
   return suma
}

function DecimalABinario(num) {
   let a = num
   let total = []
   while(a > 0){
   let c = a % 2
   let b = Math.floor(a / 2)
   a = b
   total.push(c)
   }
   total.reverse()
   let x = total.join("")
   let completo = x.toString()
   return completo
}

module.exports = {
   BinarioADecimal,
   DecimalABinario,
};

