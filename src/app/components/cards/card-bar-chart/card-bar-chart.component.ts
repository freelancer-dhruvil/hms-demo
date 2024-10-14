import { Component, Input, OnInit } from '@angular/core';
import { ChartModel } from '../../../models/chart.model';

@Component({
  selector: 'card-bar-chart',
  templateUrl: './card-bar-chart.component.html'
})
export class CardBarChartComponent implements OnInit {
  @Input() chart!: ChartModel;
  
  constructor() {}

  ngOnInit() {
  }
}

