"use strict"

let i = 1;

class Point {
    constructor(x, y) {
        this._x = x;
        this._y = y;
    }

    #name = `Point${i++}`;

    get x() {
        return this._x;
    }

    set x(value) {
        this._x = value;
    }

    get y() {
        return this._y;
    }

    set y(value) {
        this._y = value;
    }


    get name() {
        return this.#name + " " + this.toString();
    }

    set name(value) {
        this.#name = value;
    }

    distance(p) {
        return Math.sqrt((p.x - this.x) * (p.x - this.x) + (p.y - this.y) * (p.y - this.y))
    }

    toString() {
        return `x: ${this.x}, y: ${this.y}`;
    }
}


let p1 = new Point(2, 2), p2 = new Point(30, 30);
console.log(p1.toString())
console.log(p2.toString())
console.log("Distance: " + p1.distance(p2));

p2.x = 5;
p2.y = 2
console.log("Distance: " + p1.distance(p2));
console.log(p2.name);

