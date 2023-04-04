let nombre = "Sergio";
let apellido = "Varela";

let estudiante = nombre.concat(" ").concat(apellido)
console.log(estudiante)


let estudianteMayus = estudiante.toUpperCase();
console.log(estudianteMayus)

let estudianteMinus =  estudiante.toLowerCase();
console.log(estudianteMinus);

let numero = estudiante.length;
console.log(numero);

let primera = nombre.charAt(0);
console.log(primera)

let ultima = apellido.charAt(5);
console.log(ultima);

let eliminar = estudiante.replace(/ /g, "");
console.log(eliminar);


let incluir = estudiante.includes(nombre);
console.log(incluir)