{
  // Encapsulation - Hide kore rakha jaate baire theke access kora na jay

  {
    // Access modifiers
    class BankAccount {
      public readonly id: number;
      public name: string;
      protected _balance: number; //When we want the prop in child class and not in instance we will use protected

      constructor(id: number, name: string, balance: number) {
        this.id = id;
        this.name = name;
        this._balance = balance;
      }
      addDeposit(amount: number) {
        this._balance = this._balance + amount;
      }
      private getBalance() {
        return this._balance;
      }
      //   We can reurn private function from a function that we can access from the outside.
      getHiddenBalance() {
        return this.getBalance();
      }
    }

    class ProAccount extends BankAccount {
      test() {
        console.log(this._balance);
      }
    }

    const goribManusherAccount = new BankAccount(1, "Mr. Gorib", 20);
    goribManusherAccount.addDeposit(30);
    const balance = goribManusherAccount.getHiddenBalance();
    console.log(balance);
  }
}
