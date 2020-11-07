import { Component, OnInit } from '@angular/core';
import {TransactionStore} from '../../stores/transaction-store';
import {Itransaction} from '../../types/models/Itransaction';
import {ChartStore} from '../../stores/chart-store';

@Component({
  selector: 'app-transactions-list',
  templateUrl: './transactions-list.component.html',
  styleUrls: ['./transactions-list.component.css']
})
export class TransactionsListComponent implements OnInit {

  constructor(
    public transactionStore : TransactionStore,
    public cs : ChartStore
  ) { }

  ngOnInit(): void {
  }

  delete(trans : Itransaction){
    this.transactionStore.delete(trans);
    this.cs.updateFromDelete(trans);
    console.log(trans.amount);
  }

}
