// TODOS los OBJETOS de JS se pasan por REFERENCIA

// Objeto person
export const person = {
  lastname: "Montesdeok",
  age: 23,
  address: {
    city: "Imbabura",
    zip: 100101,
    lat: 10.12345,
    lng: -8.233,
  },
}; //as const; // -> Vuelve al valor fijo

// Crear un clon de un objeto
const person2 = structuredClone(person);

person.age = 24;
person.lastname = "Montesdeoca";
person.address.city = "Ibarra";

console.log(person);
console.log(person2);
