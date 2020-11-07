import {ChangeDetectionStrategy, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Chart, ChartOptions, ChartType} from 'chart.js';

import {ChartStore} from '../../stores/chart-store';


@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChartComponent implements OnInit {
  @ViewChild('myCanvas', {static: true})
  canvas: ElementRef<HTMLCanvasElement>;
  private ctx: CanvasRenderingContext2D;





  constructor(public cs: ChartStore) {
    window['ChartComponent'] = this;
  }

  ngOnInit(): void {
    this.ctx = this.canvas.nativeElement.getContext('2d');
    this.draw()



  }

  draw() {
    this.cs.chart = new Chart(this.ctx, {
      type: 'doughnut',
      data: {
        datasets: [{
          data: this.cs.data,
          backgroundColor: ['#65BF95','#cf4e57']
        }],

        // These labels appear in the legend and in the tooltips when hovering different arcs
        labels: [
          'income',
          'outcome'

        ],
      }
    });
  }





}
