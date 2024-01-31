"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = {
    name: 'John Dee',
    email: 'john@email.com',
    isActive: true,
};
function createUser(_a) {
    var string = _a.name, boolean = _a.isActive;
}
// In this case, TS will give an error, saying that there are more parameters than the function
// createUser({ name: "Peter", isActive: true, email: 'peter@email.com' });
var newUser = {
    name: 'Mary Dee',
    email: 'mary@email.com',
    isActive: true,
};
// But if I create a new user object and pass it as a createUser parameter, it does not complain,
// weirdness behavior, like JS.
createUser(newUser);
var brandNewUser = {
    _id: '1234',
    name: 'user',
    email: 'user@email.com',
    isActive: true,
};
