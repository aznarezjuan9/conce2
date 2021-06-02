
let {buscarAuto} = require('./funciones/funciones.js');

let arreglo_objs_literal = require('./servicios/autos.json');

let paten = buscarAuto(arreglo_objs_literal, 'JJK116');
console.log(paten);