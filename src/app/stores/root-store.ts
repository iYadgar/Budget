import {Injectable} from '@angular/core';
import {TransactionStore} from './transaction-store';
import {ChartStore} from './chart-store';

@Injectable({
  providedIn: 'root'
})
export class RootStore {
  public ts: TransactionStore;
  public cs: ChartStore;

  constructor() {
  }

}
