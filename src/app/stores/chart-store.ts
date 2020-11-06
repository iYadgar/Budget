import {Injectable} from '@angular/core';
import {RootStore} from './root-store';
import {action, computed, observable} from 'mobx-angular';
import {Chart} from 'chart.js';


@Injectable({
  providedIn: 'root'
})
export class ChartStore {


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


}
