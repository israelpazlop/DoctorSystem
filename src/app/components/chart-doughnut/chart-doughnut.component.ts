import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-chart-doughnut',
  templateUrl: './chart-doughnut.component.html',
  styles: [
  ]
})
export class ChartDoughnutComponent implements OnInit {
   // Doughnut
   @Input('chartLabels') public doughnutChartLabels: Label[] = [];
   @Input('chartData') public doughnutChartData: MultiDataSet = [];
   @Input('chartType') public doughnutChartType: ChartType = 'doughnut';

  constructor() { }

  ngOnInit(): void {
  }

}
