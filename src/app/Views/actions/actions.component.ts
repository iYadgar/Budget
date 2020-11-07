import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {TransactionStore} from '../../stores/transaction-store';
import {ChartStore} from '../../stores/chart-store';

@Component({
  selector: 'app-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ActionsComponent implements OnInit {


  constructor(
    public transactionStore: TransactionStore,
    public cs: ChartStore
  ) {
  }

  ngOnInit(): void {
  }

  deposit(amount: number) {
    this.transactionStore.deposit(amount);
    this.cs.updateIncome(amount);
  }

  withdraw(amount: number) {
    this.transactionStore.withdraw(amount);
    this.cs.updateOutcome(amount);
  }

}
