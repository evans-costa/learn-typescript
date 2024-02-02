// The implements clause check if a class satisfy the implementation of a certain interface
// is serves as a guideline for a Class that uses a interface and fails if it does not implements
// correctly.

interface Lion {
  name: string;
  weigth: number;
  age: number;
  food: string[];
}

class Zoo implements Lion {
  constructor(
    public name: string,
    public weigth: number,
    public age: number,
    public food: string[]
  ) {}
}
