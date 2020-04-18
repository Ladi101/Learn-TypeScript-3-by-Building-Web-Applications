"use strict";
var Calculator = /** @class */ (function () {
    function Calculator(_currentValue) {
        if (_currentValue === void 0) { _currentValue = 0; }
        this._currentValue = _currentValue;
    }
    Calculator.prototype.add = function (a) {
        this._currentValue += a;
        return this;
    };
    Calculator.prototype.substract = function (a) {
        this._currentValue -= a;
        return this;
    };
    Calculator.prototype.multiply = function (a) {
        this._currentValue *= a;
        return this;
    };
    Calculator.prototype.divide = function (a) {
        this._currentValue /= a;
        return this;
    };
    Object.defineProperty(Calculator.prototype, "value", {
        get: function () {
            return this._currentValue;
        },
        enumerable: true,
        configurable: true
    });
    return Calculator;
}());
var result = new Calculator(0)
    .add(5)
    .multiply(2)
    .add(10)
    .divide(4)
    .substract(2).value;
var plane = {
    name: "Plane",
    description: "Something that flies",
};
function foo(bar) {
    console.log("Hello " + bar.firstName + ".. or should I call you Mr " + bar.lastName + "?");
}
foo({ firstName: "Ladi", lastName: "Ilori" });
function performCalculation(a, b, calculationFn) { }
performCalculation(5, 10, function (x, y) { return x + y; });
var p = function (x, y) { return x + y; };
performCalculation(3, 4, p);
var myThing = {
    name: "Computer",
    description: "A thing that can perform calculations",
};
console.log(myThing);
var BasicMusicPlayer = /** @class */ (function () {
    function BasicMusicPlayer() {
    }
    BasicMusicPlayer.prototype.play = function () {
        throw new Error("Method not implemented.");
    };
    BasicMusicPlayer.prototype.pause = function () {
        throw new Error("Method not implemented.");
    };
    BasicMusicPlayer.prototype.stop = function () {
        throw new Error("Method not implemented.");
    };
    BasicMusicPlayer.prototype.rewind = function (seconds) {
        throw new Error("Method not implemented.");
    };
    BasicMusicPlayer.prototype.fastForward = function (seconds) {
        throw new Error("Method not implemented.");
    };
    return BasicMusicPlayer;
}());
function sayHelloTo(bar) {
    console.log(bar.lastName, bar.firstName, bar.age);
}
sayHelloTo({ firstName: "ladi", lastName: "ilori", age: 43 });
var b = {
    name: "hello",
    logoLocation: "logo",
    isActive: function () { return true; },
    league: "Football",
};
console.log(b);
console.log(b.isActive());
//# sourceMappingURL=calculator.js.map