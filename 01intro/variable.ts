// string

let greeting: string = 'Hello, world!';

// number
let userId: number = 334455;

// boolean

let isLogged: boolean = true;
export {};

// We can infer the types annotations in primitive values, but this is not actually necessary in this examples,
// this is not a good practice, as TypeScript is smart enough to understand and infer types automatically
// so, this kind of a overuse of TS features.

let obj: any = { x: 0 };
obj.foo();
obj.bar = 'foo';
obj = 'Hello';

// Also, we can use any, and allows to access any properties of a value, like the example above.
// This is not a good practice also, because the errors of typechecking are not being evaluated.
// There is a flag we can put in tsconfig file 'noImplicitAny' that throws an error if
// TS infer 'any' in a value that it can't infer in the context of a code.
