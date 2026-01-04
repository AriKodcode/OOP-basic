export default function Rectangle(width, height) {
  this.width = width;
  this.height = height;
  this.area = () => {
    console.log(this.width * this.height);
  };
}
