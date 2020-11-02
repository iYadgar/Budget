import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TransactionStore {
  transactions: number[] = [];

  constructor() {
  }

  getBalance(): number {
    return this.transactions
      .reduce((acc, curr) => acc + curr);
  }

  isNegative(): boolean {
    return this.getBalance() < 0;
  }

  deposit(money: number) {
    return this.transactions.push(money);
  }

  withdraw(money: number) {
    return this.transactions = [...this.transactions, -money];
  }
}
