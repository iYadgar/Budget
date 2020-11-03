import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ActionsComponent} from './Views/actions/actions.component';
import {BalanceComponent} from './Views/balance/balance.component';
import {TransactionsComponent} from './Views/transactions/transactions.component';
import {FormsModule} from '@angular/forms';
import {MobxAngularModule} from 'mobx-angular';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {TransNavbarComponent} from './components/trans-navbar/trans-navbar.component';
import {TransactionsListComponent} from './Views/transactions-list/transactions-list.component';
import {ChartComponent} from './Views/chart/chart.component';
import {ChartsModule} from 'ng2-charts';


@NgModule({
  declarations: [
    AppComponent,
    ActionsComponent,
    BalanceComponent,
    TransactionsComponent,
    TransNavbarComponent,
    TransactionsListComponent,
    ChartComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    MobxAngularModule,
    BrowserAnimationsModule,
    MatIconModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
