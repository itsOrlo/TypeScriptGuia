const arrayNumbers = [1, 2, 3, 4, 5]; //as const //->Vuelve fijo al array

//Insertar un valor
arrayNumbers.push(6);

// Crear un clon del array
const arrayNumbers2 : (number|string)[] = [...arrayNumbers];
arrayNumbers2.push(7);

console.log({ arrayNumbers, arrayNumbers2 });


export {};