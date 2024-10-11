import { Component, Input, OnInit } from '@angular/core';
import { CardStatsModel } from '../../../models/card.model';

@Component({
  selector: 'card-stats',
  templateUrl: './card-stats.component.html'
})
export class CardStatsComponent implements OnInit {
  @Input() cardStats!: CardStatsModel;
  
  constructor() {}

  ngOnInit() {
  }
}

