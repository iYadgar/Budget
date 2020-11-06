import {ChangeDetectionStrategy, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Chart, ChartOptions, ChartType} from 'chart.js';
import {RootStore} from '../../stores/root-store';
import {ChartStore} from '../../stores/chart-store';
import {Color, Label, MultiDataSet, SingleDataSet} from 'ng2-charts';
import {observable} from 'mobx-angular';


@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChartComponent implements OnInit {
  @ViewChild('myCanvas', {static: true})
  canvas: HTMLCanvasElement;

  try1: number = 100;
  try2: number = -100;
  public doughnutChartLabels: Label[] = ['income', 'outcome'];
  public doughnutChartData: SingleDataSet = [this.cs.income, this.cs.outcome];
  public doughnutChartType: ChartType = 'doughnut';
  public doughnutChartColors = [
    {
      backgroundColor: ['#65BF95', '#cf4e57'],
    },
  ];
  public doughnutChartOptions: ChartOptions = {
    responsive: true
  };

  constructor(public cs: ChartStore) {
    window['ChartComponent'] = this;
  }

  ngOnInit(): void {
    console.log('myCanvas');

  }


  pushPlus() {
    this.doughnutChartData[0] = +this.doughnutChartData[0] + 50;
  }

  pushMinus() {
    this.doughnutChartData[1] = +this.doughnutChartData[1] - 50;
  }


}
