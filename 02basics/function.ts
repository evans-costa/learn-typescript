function addTwo(num: number) {
  return num + 2;
}

function getUpper(value: string) {
  return value.toUpperCase();
}

function signUp(name: string, email: string, isPaid: boolean) {}

let loginUser = (name: string, email: string, isPaid: boolean = false) => {};

addTwo(5);
getUpper('Foo');
signUp('John', 'john@email.com', true);
loginUser('John', 'john@email.com');

// We can infer types in functions parameters, as well the default values for it.
// This is good practice because if we can't infer types, TS will type as any for default
// Also, if we can pass less parameters in function call, TS throws an error, unless if
// we pass default values, like in loginUser function above.

/////////////////////////////////////////////////////////////////////////////////////////

// To implicit return a specific type, we do this, note that there are a union,
// that indicates the function must return a boolean OR a string;
function getValue(value: number): boolean | string {
  if (value > 5) {
    return true;
  }

  return '200 OK';
}

// same to the arrow functions, type parameter, type return
const getHello = (str: string): string => {
  return 'Hello';
};

// In high order functions, like map, we can do the same, type the return
const heros = ['Thor', 'Spider-man', 'Ironman'];

heros.map((hero): string => {
  return `Hero is ${hero}.`;
});

// If we can return nothing, like a console log or an empty return, we can use void
function consoleError(errorMessage: string): void {
  console.log(errorMessage);
}

// We use never if our functions throws an exception or terminates the execution of a program
function handleError(errorMessage: string): never {
  throw new Error(errorMessage);
}

export {};
