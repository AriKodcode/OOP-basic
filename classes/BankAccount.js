export default function BankAccount(balance) {
  this.balance = balance;
  this.deposit = (amount) => {
    this.balance += amount;
  };
  this.withdraw = (amount) => {
    this.balance -= amount;
  };
  this.checkBalance = () => {
    console.log(this.checkBalance);
  };
}
