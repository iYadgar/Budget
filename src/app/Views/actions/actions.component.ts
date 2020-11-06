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


}
