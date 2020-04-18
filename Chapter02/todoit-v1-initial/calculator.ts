class Calculator {
  constructor(private _currentValue: number = 0) {}

  add(a: number): this {
    this._currentValue += a;
    return this;
  }

  substract(a: number): this {
    this._currentValue -= a;
    return this;
  }

  multiply(a: number): this {
    this._currentValue *= a;
    return this;
  }

  divide(a: number): this {
    this._currentValue /= a;
    return this;
  }

  get value(): number {
    return this._currentValue;
  }
}

let result: number = new Calculator(0)
  .add(5)
  .multiply(2)
  .add(10)
  .divide(4)
  .substract(2).value;

const plane: { name: string; description: string } = {
  name: "Plane",
  description: "Something that flies",
};

function foo(bar: { firstName: string; lastName: string }): void {
  console.log(
    `Hello ${bar.firstName}.. or should I call you Mr ${bar.lastName}?`
  );
}

foo({ firstName: "Ladi", lastName: "Ilori" });

function performCalculation(
  a: number,
  b: number,
  calculationFn: (x: number, y: number) => number
): void {}

performCalculation(5, 10, (x: number, y: number) => x + y);
const p = (x: number, y: number) => x + y;
performCalculation(3, 4, p);

type Thing = {
  name: string;
  description: string;
};

const myThing: Thing = {
  name: "Computer",
  description: "A thing that can perform calculations",
};

console.log(myThing);

interface MusicPlayer {
  play(): void;
  pause(): void;
  stop(): void;
  rewind(seconds: number): void;
  fastForward(seconds: number): void;
}

class BasicMusicPlayer implements MusicPlayer {
  play(): void {
    throw new Error("Method not implemented.");
  }
  pause(): void {
    throw new Error("Method not implemented.");
  }
  stop(): void {
    throw new Error("Method not implemented.");
  }
  rewind(seconds: number): void {
    throw new Error("Method not implemented.");
  }
  fastForward(seconds: number): void {
    throw new Error("Method not implemented.");
  }
}

interface Person {
  firstName: string;
  lastName: string;
  age: number;
}

function sayHelloTo(bar: Person): void {
  console.log(bar.lastName, bar.firstName, bar.age);
}

sayHelloTo({ firstName: "ladi", lastName: "ilori", age: 43 });

interface Club {
  name: string;
  logoLocation: string;
  isActive(): boolean;
}

interface SoccerClub extends Club {
  league: string;
}

const b: SoccerClub = {
  name: "hello",
  logoLocation: "logo",
  isActive: () => true,
  league: "Football",
};

console.log(b);
console.log(b.isActive())