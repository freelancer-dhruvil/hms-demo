import { Component, Input, OnInit } from '@angular/core';
import { ChartModel } from '../../../models/chart.model';

@Component({
  selector: 'card-pie-chart',
  templateUrl: './card-pie-chart.component.html'
})
export class CardPieChartComponent implements OnInit {
  @Input() chart!: ChartModel;
  
  constructor() {}

  ngOnInit() {
  }
}

