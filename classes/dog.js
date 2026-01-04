import Animal from './Animal.js';
export default function Dog(name) {
  Animal.call(this, name);
}
