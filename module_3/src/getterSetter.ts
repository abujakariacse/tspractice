{
  // Getter and Setter
  class BankAccount {
    public readonly id: number;
    public name: string;
    protected _balance: number; //When we want the prop in child class and not in instance we will use protected

    constructor(id: number, name: string, balance: number) {
      this.id = id;
      this.name = name;
      this._balance = balance;
    }
    //   addDeposit(amount: number) {
    //     this._balance = this._balance + amount;
    //   }
    //   getBalance() {
    //     return this._balance;
    //   }

    // setter
    set deposit(amount: number) {
      this._balance = this._balance + amount;
    }
    // getter
    get balance() {
      return this._balance;
    }
  }

  const goribManusherAccount = new BankAccount(1, "Mr. Gorib", 20);

  goribManusherAccount.deposit = 100;
  const balance = goribManusherAccount.balance;
  console.log(balance);
}
