export default function Phone(brand, model) {
  this.brand = brand;
  this.model = model;
  this.details = () => {
    console.log('phone detials: ', this.brand, this.model);
  };
}
