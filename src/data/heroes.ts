export interface Hero{
    id: number;
    name: string;
    owner:Owner;
}

export type Owner = "DC" | "Marvel" | "Ecchie"; // Para un solo atributo

const heroes: Hero[] = [ //Usar la interfaz
  {
    id: 1,
    name: "Batman",
    owner: "DC",
  },
  {
    id: 2,
    name: "Spiderman",
    owner: "Marvel",
  },
  {
    id: 3,
    name: "Superman",
    owner: "DC",
  },
  {
    id: 4,
    name: "Flash",
    owner: "DC",
  },
  {
    id: 5,
    name: "Wolverine",
    owner: "Marvel",
  },
];

export const owners = ["DC", "Marvel"] as const; //Fijar el arreglo

export default heroes;
