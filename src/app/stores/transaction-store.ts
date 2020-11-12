import {Injectable} from '@angular/core';
import {action, computed, observable} from 'mobx-angular';
import {Itransaction} from '../types/models/Itransaction';
import * as dayjs from 'dayjs';
import {v4 as uuidv4} from 'uuid';
import {autorun} from 'mobx';
import {RootStore} from './root-store';


@Injectable({
  providedIn: 'root'
})
export class TransactionStore {
  @observable transactions: Itransaction[] = [];
  @observable selectedOption: string = 'overall';

  constructor(
    public root: RootStore,
  ) {
    this.root.ts = this;

    if (localStorage.savedTransactions) {
      this.transactions = JSON.parse(localStorage.savedTransactions);
    }
    autorun(() => {
      localStorage.savedTransactions = JSON.stringify(this.transactions);

    });
  }

  @computed get outcomeOrIncome() {
    return this.selectedOption === 'overall' ? this.transactions : this.transactions
      .filter(trans => trans.type === this.selectedOption);
  }

  @computed get balance(): number {
    let transactionsAmount: number[] = [];
    this.transactions
      .forEach(transaction => transactionsAmount.push(transaction.amount));
    return transactionsAmount.reduce((acc, cur) => acc + cur, 0);

  }

  @computed get isNegative(): boolean {
    return this.balance < 0;
  }

  @action deposit(money: number) {
    if (!money || money < 0) {
      return alert('Please insert positive amount');

    } else {
      return this.transactions
        .push({
          amount: money,
          date: dayjs().format('DD/MM/YYYY'),
          id: uuidv4(),
          type: 'income'
        });


    }


  }

  @action withdraw(money: number) {
    if (!money ) {
      return alert('Please insert amount');

    } else {
      return this.transactions
        .push({
          amount: -money,
          date: dayjs().format('DD/MM/YYYY'),
          id: uuidv4(),
          type: 'outcome'
        });


    }
  }

  @action delete(trans: Itransaction) {
    let transactionFind = this.transactions.find(transaction => trans.id = transaction.id);
    let index = this.transactions.indexOf(transactionFind);

    return this.transactions.splice(index, 1);


  }


}
