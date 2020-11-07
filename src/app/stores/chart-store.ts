import {Injectable} from '@angular/core';
import {RootStore} from './root-store';
import {action, computed, observable} from 'mobx-angular';
import {Chart} from 'chart.js';
import {Itransaction} from '../types/models/Itransaction';


@Injectable({
  providedIn: 'root'
})
export class ChartStore {
  @observable chart: Chart;
  @observable data = [this.income, this.outcome];


  constructor(
    public root: RootStore
  ) {
    this.root.cs = this;
  }

  @computed get income() {
    let incomeArr: number[] = [];
    this.root.ts
      .transactions
      .filter((trans) => {
        if (trans.type === 'income') {
          incomeArr.push(trans.amount);
        }

      });
    return incomeArr.reduce((acc, cur) => acc + cur, 0);
  }

  @computed get outcome() {
    let outcomeArr: number[] = [0];
    this.root.ts
      .transactions
      .filter((trans) => {
        if (trans.type === 'outcome') {
          outcomeArr.push(trans.amount);
        }

      });

    return outcomeArr.reduce((acc, cur) => acc + cur, 0);
  }

  @computed get balancePercentage() {

    return !this.root.ts.balance ? 0 : Math.floor((this.root.ts.balance / this.income) * 100);
  }


  @action updateIncome(amount) {
    this.data[0] = this.data[0] + amount;
    this.chart.update();

  }

  @action updateOutcome(amount) {
    this.data[1] = this.data[1] + amount;
    this.chart.update();

  }

  @action updateFromDelete(trans: Itransaction) {
    if (!this.root.ts.transactions) {
      this.data = [];
    } else if (trans.type === 'outcome') {
      this.data[1] = this.data[1] + trans.amount;
    } else {
      this.data[0] = this.data[0] - trans.amount;

    }

    this.root.cs.chart.update();

  }


}
