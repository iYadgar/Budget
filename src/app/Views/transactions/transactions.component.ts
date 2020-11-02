import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {TransactionStore} from '../../stores/transaction-store';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css'],
  changeDetection : ChangeDetectionStrategy.OnPush
})
export class TransactionsComponent implements OnInit {

  constructor(public transactionStore: TransactionStore) {
  }

  ngOnInit(): void {
  }

}
