import Vehicle from './vehicle.js';

export default function Car(brand, type) {
  this.brand = brand;
  Vehicle.call(this, type);
  this.info = () => {
    console.log('this is a', this.brand, this.type);
  };
}
