import { Animal } from "./Animal";

let animal = new Animal("Cat");

abstract class Point {
  x: number;
  y: number;
  abstract t(): void;
}

interface Point3d extends Point {
  z: number;
}

console.log(animal)