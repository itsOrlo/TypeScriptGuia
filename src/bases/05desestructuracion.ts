interface Registro {
  name: String;
  age: number;
  occupation: String;
  money?: number; // IMPORTANTE "?" si se trabaja la condición valor undefined
}

export const person: Registro = {
  name: "Juan",
  age: 30,
  occupation: "Software Engineer",
  //money:500.35,
};

const { age, occupation, money = 0 } = person;

console.log({ age, occupation, money });

// Ejemplo
interface createPersonArgs {
  name: String;
  age: number;
  occupation: String;
  money?: number; // IMPORTANTE "?" si se trabaja la condición valor undefined
}

const createPerson = (args: createPersonArgs) => ({
  id: 101,
  name: args.name,
  age: args.age,
  occupation: args.occupation,
  money: args.money ?? 0, // si no se pasa el valor, se asigna 0
});

console.log(createPerson(person));
