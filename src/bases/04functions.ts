// Se pueden declarar de 3 maneras

// TRADICIONAL
function greetPerson(name: String) {
  return `Hola, ${name}`;
}

// CON ARROW FUNCTION
const greetPerson2 = (name: String) => {
  return `Hola zorro, ${name}`;
};

// CON ARROW FUNCTION Y SIN LLAMADA A LA FUNCION
const greetPersonExpress = (name: String) => `Hola zorrongo, ${name}`;

console.log(greetPersonExpress("Michael"));

// Función Prueba
const getUser = (uid: String) => ({ uid, username: "Orlo" });

console.log(getUser("pruebaXd"));

/* SEGUNDA PARTE */
const superHeroes = [
  {
    id: 1,
    name: "Iron Man",
    powers: ["Inteligencia", "Riqueza"],
  },
  {
    id: 2,
    name: "Spiderman",
    powers: ["Agilidad", "Super fuerza"],
  },
];

// Búsquedas
const superHeroe = superHeroes.find((h) => h.name === "Spiderman");

console.log(superHeroe);
console.log(superHeroe?.powers); // Un solo elemento
