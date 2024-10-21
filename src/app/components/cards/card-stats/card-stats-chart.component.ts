import { Component, effect, input, Input, InputSignal, OnInit } from '@angular/core';
import { CardStatsModel } from '../../../models/card.model';

@Component({
    selector: 'card-stats',
    templateUrl: './card-stats.component.html'
})
export class CardStatsComponent implements OnInit {

    public cardStats: InputSignal<CardStatsModel | undefined> = input<CardStatsModel>();
    public percentage: number;
    public difference: number;
    public isIncreased: boolean;


    constructor() {
        effect(() => {
            
            if (this.cardStats() !== undefined) {
                this.difference = Math.abs(this.cardStats()!.value - this.cardStats()!.compareValue);
                this.isIncreased = this.cardStats()!.value - this.cardStats()!.compareValue >= 0;
                this.percentage = ((this.cardStats()!.value - this.cardStats()!.compareValue) / this.cardStats()!.compareValue * 100);
                this.percentage = parseFloat(this.percentage.toFixed(2));
                
                
            }
        });
    }

    ngOnInit() {
        
    }

    public stateAction(): void {
        
    }
}

