const User = {
  name: 'John Dee',
  email: 'john@email.com',
  isActive: true,
};

function createUser({ name: string, isActive: boolean }) {}

// In this case, TS will give an error, saying that there are more parameters than the function
// createUser({ name: "Peter", isActive: true, email: 'peter@email.com' });

let newUser = {
  name: 'Mary Dee',
  email: 'mary@email.com',
  isActive: true,
};

// But if I create a new user object and pass it as a createUser parameter, it does not complain,
// weirdness behavior, like JS.
createUser(newUser);

// The word type allow us to crate a template to our object, like this example with user, that returns
// the same user in a function createNewUser
type User = {
  readonly _id: string; // readonly modifier in a property makes this property immutable.
  name: string;
  email: string;
  isActive: boolean;
};

let brandNewUser: User = {
  _id: '1234',
  name: 'user',
  email: 'user@email.com',
  isActive: true,
};

// this will not work because _id is read only property:
// brandNewUser._id = '2222'

// Also we can combine objects types with & letter, even if it's no a good practice to do.
type creditCardNumber = {
  cardNumber: string;
};

type creditCardDate = {
  cardDate: string;
};

type creditCardDetails = creditCardNumber &
  creditCardDate & {
    CVV: string;
  };

export {};
