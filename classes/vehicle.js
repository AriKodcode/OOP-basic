export default function Vehicle(type) {
  this.type = type;
  this.describe = () => {
    console.log('this is a ', this.describe);
  };
}
