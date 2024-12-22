//
// Iteration 3 | Classes
//
class BankAccount {
  balance: number = 0;
  accountHolder: string = "";
  constructor(person: string) {
    this.accountHolder = person;
  }
  getBalance(): number {
    return this.balance;
  }
  deposit(amount: number): string | number {
    if (amount > 0) {
      this.balance = this.balance + amount;
      return this.balance;
    }
    return "Pls provide a valid amount";
  }
  withdraw(amount: number): string | number {
    if (amount > 0 && amount < this.balance) {
      this.balance = this.balance - amount;
      return this.balance;
    } else if (amount > 0 && amount > this.balance) {
      return "Insufficient funds";
    }
    return "Pls provide a valid amount";
  }
}
const newAcc = new BankAccount("Ragnar");
console.log(newAcc);
console.log(newAcc.getBalance());
console.log(newAcc.deposit(50));
console.log(newAcc.deposit(-5));
console.log(newAcc.withdraw(25));
console.log(newAcc.withdraw(0));
console.log(newAcc.withdraw(50));
