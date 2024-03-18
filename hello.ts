interface Person {
  firstName: string;
  lastName: string;
}

function sayhello(p: Person): string {
  return `Hello, ${p.firstName}`;
}

const ada: Person = {
  firstName: "Ada",
  lastName: "Lovelace",
};

console.log(sayhello(ada));
