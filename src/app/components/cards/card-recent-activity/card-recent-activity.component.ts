import { Component, effect, input, InputSignal, OnInit } from '@angular/core';
import { ActivityModel } from '../../../models/activity.model';
import { UiService } from '../../../services/ui/ui.service';

@Component({
    selector: 'card-recent-activity',
    templateUrl: './card-recent-activity.component.html',
    styleUrl: './card-recent-activity.component.scss'
})
export class CardRecentActivityComponent implements OnInit {

    public activities: InputSignal<ActivityModel[]> = input<ActivityModel[]>([]);
    public latestAvailableSlot: any;

    constructor(
        private readonly _uiService: UiService,
    ) {
        effect(() => {
            console.log('activity:::', this.activities());
        })
    }

    ngOnInit(): void {

    }


    public formatDateToAMPM(date: Date): string {
        return this._uiService.formatDateToAMPM(date);
    }

    public cardAction() {

    }
}
