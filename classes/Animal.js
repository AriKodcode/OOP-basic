export default function Animal(name) {
  this.name = name;
  this.sound = () => {
    console.log(`${this.name} makes a sound`);
  };
}
