import { Component, Input, OnInit } from '@angular/core';
import { ChartModel } from '../../../models/chart.model';

@Component({
  selector: 'card-line-chart',
  templateUrl: './card-line-chart.component.html'
})
export class CardLineChartComponent implements OnInit {
  @Input() chart!: ChartModel;
  
  constructor() {}

  ngOnInit() { 
  }
}

