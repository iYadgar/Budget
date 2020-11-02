import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {TransactionStore} from '../../stores/transaction-store';

@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.css'],
  changeDetection : ChangeDetectionStrategy.OnPush
})
export class BalanceComponent implements OnInit {

  constructor(public transactionStore: TransactionStore) {
  }

  ngOnInit(): void {
  }

}
