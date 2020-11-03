import { Component, OnInit } from '@angular/core';
import {TransactionStore} from '../../stores/transaction-store';

@Component({
  selector: 'app-trans-navbar',
  templateUrl: './trans-navbar.component.html',
  styleUrls: ['./trans-navbar.component.css']
})
export class TransNavbarComponent implements OnInit {

  constructor(
    public transactionStore : TransactionStore
  ) { }

  ngOnInit(): void {
  }

  onChange(){
    console.log(`value is : ${this.transactionStore.selectedOption}`);
  }

}
