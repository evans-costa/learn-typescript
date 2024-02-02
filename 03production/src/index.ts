class User {
  email: string; // Accessible outside class
  name: string;
  private city: string = ''; // Accessible only in this class
  protected role: string = ''; // Accessible only in the class and subclasses
  private _count = 1;

  constructor(email: string, name: string) {
    this.email = email;
    this.name = name;
  }

  get courseCount(): number {
    return this._count; // getter is used to get a property
  }

  // the setter is used to set a value property, note that do not receive a return type
  set courseCount(value: number) {
    // :number (this is not valid) {
    let num = Number(value);

    if (!Number.isFinite(num)) {
      this._count = 0;
      return;
    }

    this._count = num;
  }
}

class Admin extends User {
  protected role: string = 'admin'; //
  // showCity() {
  //   console.log(this.city) // private, only on class User
  // }
}

const newUser = new User('john@email.com', 'John Dee');
const admin = new Admin('admin@admin.com', 'Peter');
