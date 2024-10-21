import { agregarSuperheroes, leerSuperheroes } from "./utils.mjs";

const archivoOriginal = './superheroes.txt';
const archivoNuevos = './agregarSuperheroes.txt';

// Leer y mostrar la lista inicial de superheroes ordenada
const superheroes = leerSuperheroes('./superheroes.txt');
console.log('Superhéroes ordenados');
console.log(superheroes);

// Agregar nuevos superheroes
agregarSuperheroes(archivoOriginal, archivoNuevos);

// Leer y mostrar la lista completa de superheroes ordenada
const superheroesCompleto = leerSuperheroes('./superheroes.txt');
console.log('Superhéroes ordenados');
console.log(superheroesCompleto);

